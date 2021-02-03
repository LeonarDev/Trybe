# 9.1 Asynchronous JavaScript and Callbacks

- [Asynchronous JavaScript](#Asynchronous-JavaScript)
- [Callbacks](#Callbacks)
- [Handling errors in asynchronous operations](#Handling-errors-in-asynchronous-operations)
- [Introduction to Fetch Api](#Introduction-to-Fetch-Api)
- [What is JSON and why do we use it?](#What-is-JSON-and-why-do-we-use-it)
- [Exercises](#Exercises)
  - [Exercise 1](#Exercise-1)
  - [Exercise 2](#Exercise-2)
  - [Exercise 3](#Exercise-3)
  - [Exercise 4](#Exercise-4)
  - [Exercise 5](#Exercise-5)
  - [Exercise 6](#Exercise-6)
<hr>

<br>

## Asynchronous JavaScript

A concept that is very powerful and present in JavaScript: **asynchronicity**. 

Instead of a program being loaded all in sequence, one line after another, lines that can have some kind of problem and can "keep loading", while the rest of your program runs normally. 

The execution of this line, waiting for the availability of a service, runs parallel to the development of the rest of the code. It is an *asynchronous execution*. And that has a lot of power.

<br>

Now, let's see a little bit of practice doing this fixation exercise:

```js
const assert = require('assert');

const pushNumber = (list, number) => list.push(number);

let numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

assert.deepStrictEqual(numbers, [1, 2, 3]);
```

All right so far. Code validation works.
But look at this second code:

```js
const assert = require('assert');

const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

assert.deepStrictEqual(numbers, [1, 2, 3]); // this validation fails
```Callbacks 1)`.

To pass the test, it is necessary to test the numbers after 3000 milliseconds:

```js
const assert = require('assert');

const pushNumber = (list, number) => {
  list.push(number);
  console.log(list);
};

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => assert.deepStrictEqual(numbers, [2, 3, 1]), 3000);
```

Note that, in addition to adding the `setTimeout`, the array `[1, 2, 3]` has been changed to `[2, 3, 1]`. 

This is because, as the function is asynchronous, the *code continues to run*, even if it has not yet finished executing. That is, the array receives 2 first, then 3, and after 3 seconds of `setTimeout`, it receives 1.

To learn more about setTimeout, visit [this link](https://www.w3schools.com/jsref/met_win_settimeout.asp).

<hr>

<br>

## Callbacks

Briefly, **callback** is a *function passed as a parameter to another function*. 

Without realizing it, we saw an example of a callback function when we called the `setTimeout` function. 

This function takes **two parameters**, the first is the callback function that we pass through an arrow function, and the second is the time that the interpreter will wait to execute the function.

```js
const myExpenses = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const myIncome = 1000;
```

In this first code snippet we have two variable declarations:

- The first of them, `myExpenses`, is an array of objects that represents a person's spending for the month. 
- The second, `myIncome`, represents how much this person received in the same month.

Our next step will be to implement a function that handles this information so that we have as a result a balance of inputs and outputs for the month:

```js
const monthlyBudget = (myIncome, myExpenses, callback) => {

  const totalExpenses = callback(myExpenses);
  const totalAfterExpenses = myIncome - totalExpenses;

  console.log (`Balance of the month:
    Received: US$ ${myIncome}
    Spend: US$ ${totalExpenses}
    Balance: US$ ${totalAfterExpenses}`);
};
```

In this part of the implementation, we can notice that a `monthlyBudget` function has been added that takes three parameters, `myIncome`, `myExpenses`, and `callback`.

**But what is this callback parameter doing in this function?**

As we saw earlier, callback is basically a function passed by parameter to another function.

In this example, the callback parameter will receive a function that will return how much we spent in the month, in other words, our callback function will perform the necessary logic to sum up all the expenses contained in the `myExpenses` object array, and will return this value to the `totalExpenses` constant.

```js
const handleExpenses = myExpenses => {
  const eachValue = myExpenses.map((item) => Object.values(item)[0]);
  const totalExpense = eachValue.reduce((acc, curr) => acc + curr , 0);
  return totalExpense;
};

monthlyBudget(myIncome, myExpenses, handleExpenses);
```

Finally, we can observe the implementation of our callback function represented by the handleExpenses function.

This function is handling the information contained in the `myExpenses` array of objects and returning the total amount of expenses.

In summary, what we did was:
1. We create variables that represent how much we receive in the month and how much we spend in the month.
2. We implemented the function `monthlyBudget` that receives three parameters, our expenses, our income and the callback function.
3. We implemented the ** callback ** function represented by `handleExpenses` which receives our monthly expenses and returns a total spend amount.
4. We add `handleExpenses` to the` monthlyBudget` function call and as a result we have the monthly balance.

```js
const myExpenses = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const myIncome = 1000;

const monthlyBudget = (myIncome, myExpenses, callback) => {
  const totalExpenses = callback(myExpenses);
  const totalAfterExpenses = myIncome - totalExpenses;

  console.log (`Balance of the month:
    Received: US$ ${myIncome}
    Spend: US$ ${totalExpenses}
    Balance: US$ ${totalAfterExpenses}`);
};

const handleExpenses = myExpenses => {
  const eachValue = myExpenses.map((item => Object.values(item)));
  const totalExpense = eachValue.reduce((acc, curr) => acc += curr[0] , 0);
  return totalExpense;
};

monthlyBudget(myIncome, myExpenses, handleExpenses);

// Balance of the month:
//     Received: US$ 1000
//     Spend: US$ 459
//     Balance: US$ 541
```

<hr>

<br>

## Handling errors in asynchronous operations

Suppose you are getting user data via an API request. Can we guarantee that this request will always be successful? What if there is a connection failure? What if the API is not working at the time of the request? These cases are examples of external factors, over which we have no control, that need to be addressed.

That is, just as you have a `callback` for when the asynchronous operation is successful, you would also need to have a `callback` for when the asynchronous operation ends in error.

Let's put it all into practice with this fixation exercise:

The `getCountry` function below has approximately a 50% chance of successfully obtaining a country, having a `callback` to be able to make any operation on the returned country. Add another `callback` to `getCountry`, so that it handles the returned error message:

```js
const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if(didOperationSucceed) {
      const country = {
        name: "Brazil",
        hdi: 0.759,
        currency: "Real",
      };
      onSuccess(country);
    }
    else {
      const errorMessage = "Country could not be found";
    }
  }, delay());
};

// You should print "Returned country is Brazil" on success, or "Error getting country: Country could not be found" on failure
getCountry(countryName, printErrorMessage);

// You should print "Brazil's currency is the Real" on success, or "Error getting country: Country could not be found" on failure
getCountry(countryCurrency, printErrorMessage);
```

<hr>

<br>

## Introduction to Fetch API

In the context of the **Front-end**, most cases where we need to use asynchronous functions are in requests. A good example is the `fetch()` function of the Fetch API!

The **Fetch API** contains a number of features designed to handle **http requests** in JavaScript. The primary function is `fetch()`, used to make calls to the URLs of the APIs.
It is an asynchronous function, based on a promise.

An API, in turn, is a way of trafficking data between applications. 
*For example*: there is an API that every day has a different joke. The API URL is **https://api.jokes.one**. So, if we want to have access to this joke, we need to make a request for the API URL, requesting the data. The API, in turn, will analyze the request and respond to the requested data. Note that there is a time between the request being sent and the response being returned. Therefore, we need the request to be asynchronous.

The `fetch` function takes two parameters:
  1. URL of the target service of the request;
  2. An object containing some information about API request. This object contains keys with information specific to that call. These specifications are always present in the usage documentation for that specific API.

The callback varies depending on the API used, not only in content, but also in format. As our main focus is JavaScript, we will mainly deal with responses in **JSON** format, or responses that can be reformatted to do so.
<hr>

<br>

## What is JSON and why do we use it?

**JSON** means **J**ava **S**cript **O**bject **N**otation and it's basically a way of representing data as Javascript objects:

```js
{
  "user": [
    {
      "name": "Leonardo Majevski",
      "github": "LeonarDev",
      "status": "#goAhead"
    }
  ]
}
```

**JSON** is always present in modern web applications, as it is simple, interpretable and still works very well in JavaScript applications. 

In addition, it is compatible with several other languages, which can interpret it and generate code in the format, such as Python, Java, PHP, Ruby, among others.

In this way, the APIs return data in JSON format, in order to maintain high scalability and independence.
<hr>

<br>

# Exercises

<br>

## Exercise 1) 
### Given the code below, what is the order in which the commented lines are finished?

```js
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
console.log(planetDistanceFromSun(venus)); // B
console.log(planetDistanceFromSun(jupiter)); // C
```

<hr>

<br>

## Exercise 2) 
### Now, given the code below, what is the order in which the lines commented are finished?

```js
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C
```
<hr>

<br>

## Exercise 3) 
### The `getPlanet` function below prints the planet Mars synchronously. Modify `getPlanet`, so that Mars is printed asynchronously, after 4 seconds.

```js
const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
};

getPlanet(); // prints Mars after 4 seconds
```
<hr>

<br>

## Exercise 4) 
### Suppose you need to simulate a message sent from Mars' [Curiosity](https://mars.nasa.gov/) robot to Earth. Curiosity sends the current temperature on Mars to Earth, spending a variable time of up to 5 seconds for it to finish sending. Create the `sendMarsTemperature` function, which prints the temperature on Mars.

```js
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// create the sendMarsTemperature function below


sendMarsTemperature(); // prints "Mars temperature is: 20 degree Celsius", for example
```

<hr>
<br>

## Exercise 5) 
### Now that you have done the function that sends the temperature of Mars, suppose that you are able to send to the Curiosity robot what you want to do, once you have successfully obtained the temperature on Mars. Then, add a `callback` in the `sendMarsTemperature` function that contains the actions to be taken over the temperature.

```js
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definition of sendMarsTemperature function ...


sendMarsTemperature(temperatureInFahrenheit); // prints "It is currently 47ºF at Mars", for example
sendMarsTemperature(greet); // prints "Hi there! Curiosity here. Right now is 53ºC at Mars", for example
```
<hr>

<br>

## Exercise 6) 
### Finally, the Curiosity robot has a 60% message sending success rate due to the fact that the robot is already very busy with other operations. Then, add in the sendMarsTemperature function another callback that contains the actions to be taken in case of failure.

```js
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

// definition of sendMarsTemperature function ...


// prints "It is currently 47ºF at Mars", for example, or "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// prints "Hi there! Curiosity here. Right now is 53ºC at Mars", for example, or "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);
```
