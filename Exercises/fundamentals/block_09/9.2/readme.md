# 9.2 Promises and APIs

- [Promises](#Promises)
- [Creating a Promise](#Creating-a-promise)
- [Using Promises](#Using-Promises)
- [Chaining Promises](#Chaining-Promises)
- [Async and Await](#Async-and-Await)
- [Application Programming Interface](#Application-Programming-Interface)
- [Exercises](#Exercises)
  - [Exercise 1](#Exercise-1)
  - [Exercise 2](#Exercise-2)
  - [Exercise 3](#Exercise-3)
  - [Exercise 4](#Exercise-4)
  - [Exercise 5](#Exercise-5)
  - [Exercise bonus](#Exercise-bonus)

<br>

<img src="https://media1.tenor.com/images/e2fdba6a5bcdc347b80279ff8f28c133/tenor.gif">

### Promises

> I promise to do this whenever that is true. If it isn't true, then I won't.

Promises are the main way to communicate with APIs.

**Complementing the explanation:**

A promise is used to handle the **asynchronous result** of an operation. 

JavaScript is designed to not wait for an asynchrnous block of code to completely execute before other synchronous parts of the code can run. For instance, when making API requests to servers, we have no idea if these servers are offline or online, or how long it takes to process the server request.

With Promises, we can defer execution of a code block until an async request is completed. This way, other operations can keep running without interruption.

Promises have three states:
- **Pending**: This is the initial state of the Promise before an operation begins
- **Fulfilled**: This means the specified operation was completed
- **Rejected**: The operation did not complete; an error value is usually thrown

<br>

### Creating a Promise

The Promise object is created using the new keyword and contains the `promise`; this is an executor function which has a **resolve** and a **reject** callback. 

In the same way that a "normal function" has the `return` to return a response from its execution, Promise has the `resolve` and the `reject`, which do exactly that: they return a response from its execution.

`Resolve` returns a **positive response**, that is, you will use it when you want to convey that everything went well.

The ``reject` returns a **negative response**, that is, you will use it when something goes wrong.

There is only a small difference between the `resolve/reject` and the `return`: 
  - While the `return` **stops** executing the function when it is called, 
  - The `resolve/reject` **does not stop**, so it is important to use a return before one when you don't want it the execution continues (this pattern is called **'early-return'**).

```js
const promise = new Promise(function(resolve, reject) {
  // promise description
})
```

Let’s create a promise:

```js
const weather = true
const date    = new Promise(function(resolve, reject) {
  if (weather) {
    const dateDetails = {
      name:     'Cubana Restaurant',
      location: '55th Street',
      table:    5
    };

    resolve(dateDetails)
  } else {
    reject(new Error('Bad weather, so no Date'))
  }
});
```

If `weather` is `true`, resolve the promise returning the data `dateDetails`, else return an error object with data `Bad weather, so no Date`.

<br>

### Using Promises

Using a promise that has been created is relatively straightforward; we chain `.then()` and `.catch()` to our **Promise** like so:

```js
date
  .then(function(done) {
    // the content from the resolve() is here
  })
  .catch(function(error) {
    // the info from the reject() is here
  });
```

Using the promise we created above, let's take this a step further:

```js
const myDate = function() {
  date
    .then(function(done) {
      console.log('We are going on a date!')
      console.log(done)
    })
    .catch(function(error) {
        console.log(error.message)
    })
}

myDate();
```

Since the weather value is `true`, we call `mydate()` and our console logs read:

```js
We are going on a date!
{
  name: 'Cubana Restaurant',
  location: '55th Street'
  table: 5
}
```

`.then()` receives a function with an argument which is the **resolve** value of our promise. `.catch` returns the **reject** value of our promise.

>Note: **Promises are asynchronous**. Promises in functions are placed in a micro-task queue and run when other synchronous operations complete.

<br>

### Chaining Promises

Sometimes we may *need to execute two or more asynchronous operations* based on the result of preceding promises. In this case, promises are chained. Still using our created promise, let’s order an uber if we are going on a date.

So we create another promise:

```js
const orderUber = function(dateDetails) {
  return new Promise(function(resolve, reject) {
    const message = `Get me an Uber ASAP to ${dateDetails.location}, we are going on a date!`;

    resolve(message)
  });
}
```

This promise can be shortened to:

```js
const orderUber = dateDetails => {
  const message = `Get me an Uber ASAP to ${dateDetails.location}, we are going on a date!`;
  return Promise.resolve(message)
} 
```

We chain this promise to our earlier date operation like so:

```js
const myDate = function() {
  date
    .then(orderUber)
    .then(function(done) {
      console.log(done);
    })
    .catch(function(error) {
      console.log(error.message)
    })
}

myDate();
```

Since our weather is true, the output to our console is:

```js
Get me an Uber ASAP to 55th Street, we are going on a date!
```

Once the `orderUber` promise is chained with `.then`, subsequent `.then` utilizes data from the previous one.

<br>

### Async and Await

#### Async

An **async function** is a modification to the syntax used in writing promises. You can call it syntactic sugar over promises. It only makes writing promises easier.

An *async function returns a promise** -- if the function returns a value, the promise will be resolved with the value, but if the async function throws an error, the promise is rejected with that value. 

Let’s see an async function:

```js
async function myRide() {
  return '2017 Dodge Charger';
}
```

and a different function that does the same thing but in promise format:

```js
function yourRide() {
  return Promise.resolve('2017 Dodge Charger');
}
```

From the above statements, `myRide()` and `yourRide()` are equal and will both resolve to `2017 Dodge Charger`. Also when a promise is rejected, an async function is represented like this:

```js
function foo() {
  return Promise.reject(25)
}

// is equal to:

async function() {
  throw 25;
}
```

<br>

#### Await

The await keyword is used in an async function to ensure that all promises returned in the async function are synchronized, ie. they wait for each other. 

Await eliminates the use of callbacks in `.then()` and `.catch()`. In using async and await, async is prepended when returning a promise. `try` and `catch` are also used to get the rejection value of an async function. Let's see this with our date example:

```js
async function myDate() {
  try {

    let dateDetails = await date;
    let message     = await orderUber(dateDetails);
    console.log(message);

  } catch(error) {
    console.log(error.message);
  }
}
```

Lastly we call our async function:

```js
(async () => { 
  await myDate();
})();
```

<br>

### Application Programming Interface

An **API** allows applications to communicate with each other, serving as a "bridge" for them. An API is not a database or a server, but the one responsible for controlling access points to them, through a set of routines and programming standards

<img src="https://course.betrybe.com//fundamentals/js-asynchronous/API.png">

<br>

> Every API is a backend, but not every backend is an API.

A standard website backend returns templates for the front end of a single application, through defined routes. For example, when you access a page on our platform, you are making a **request** to the server, which returns a template as a **response**.

The APIs also have access routes that allow communication with the server, but they do not need to return templates. Generally, they return data in **JSON** format.

<br>

<br>

# Exercises

### Exercise 1)
#### First, see the [API manual on the icanhazdadjoke.com website](https://icanhazdadjoke.com/api). He explains how to make requests for joke service. For now, just look around; now let's understand how this API works:
- To begin, let's make a request via the browser. Visit the icanhazdadjoke.com website, and notice that it returns an HTML page with a random joke.
    - Then, in the terminal, we will make the request: `curl -H "Accept: text/html" "https://icanhazdadjoke.com/"`. Realize that the return is HTML identical to a request via browser with a random joke.
    -For the next request, we will use the command: `curl -H "Accept: text/plain" "https://icanhazdadjoke.com/"`. See that now we just received the random joke in text format.
    -Finally, make the request: `curl -H "Accept: application/json" "https://icanhazdadjoke.com/"`. The API now returns an object in **JSON format**. 
    - Note that, depending on what we pass in the `Accept:` key in the header, defined by `-H` in the command, the service returns a different answer.

Use the following HTML and js as a base:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Best jokes ever</title>
  <script src="apiScript.js" ></script>
  </head>
  <body>
    <h1>Get ready for a great joke!</h1>
    <h2 id="jokeContainer"></h2>
  </body>
</html>
```

```js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Code here
};

window.onload = () => fetchJoke();
```

- Now let's try to make requests to the API using `fetch`. This function takes two parameters.
    1. The address to which the request will be made, that is, the service url.
    2. An object containing the requisition specifications. For this API, we will assign to this object the keys `method:` and `headers:`

```js
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

fetch(API_URL, myObject);
```

The second parameter `myObject` defines the type of request `method: 'GET'` and the response format `headers: {'Accept': 'application/json'}`, as seen in requests via `curl`.
- The `fetch` function is a **Promise** and, as such, depending on its developments, we can chain procedures to be done, using the `.then` (in case of success) and `.catch` (in case of failure) clauses. 
- The `fetch` request returns a **Response** object. 

Using `.then`, check the response structure using a `console.log` in the response returned by `fetch`.

```js
fetch(API_URL, myObject)
  .then(response => console.log(response));
```

Did you see the answer? We even received a response from the service, but how can I get the joke text out of there 🤔?

For that, we use the `.json()` method in the API response. This method converts the content of the Response `body` and returns another Promise, which, when successful, returns a JSON containing the joke information.

From `fetch`, replace the previous `console.log()` with the `.json()` method and print the request data.

```js
fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => console.log(data));
```

We received an object, right? From there, make the joke appear in the DOM of your page!

<hr>
<br>

### Exercise 2)
#### Now, take a step back: let's do a Promise step by step. 
- First, instantiate a Promise. Inside it, you must produce an array with ten random numbers from 1 to 50 and square them all. 
    - If the sum of all these elements is less than 8000, the promise must be resolved. 
    - Otherwise, it must be rejected. 
    - Add a `.then` and a `.catch` to Promise with anything inside just to make the code work.

Try using Higher Order Functions! Remember that both are assigned functions as a parameter!

<hr>
<br>

### Exercise 3)
#### When the promise is successfully resolved, return the result of dividing that number by 2, 3, 5 and 10 in an array.

<hr>
<br>

### Exercise 4)
#### When Promise is rejected, print, via `console.log`, the phrase "It's more than eight thousand! That promise must be broken!"

<hr>
<br>

### Exercise 5)
#### When the Promise is successful, chain a second Promise into it that adds the elements of the array.

<hr>
<br>

### Exercise bonus)
#### - Use only Higher Order Functions to perform operations with the array;

#### - Refactor Promise to use only `async` and `await`.
