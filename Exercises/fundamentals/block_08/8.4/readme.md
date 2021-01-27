# ES6 - Spread operator, rest parameter, destructuring, abbreviation object literal and default params

### Spread operator

The **spread operator** is an *ES6 feature* that allows us to **spread the values** of one or more iterable objects, *such as an array*, over a new object/array. 

> NOTE: Without changing the initial object(s).

```js
const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ];
console.log(numbers); // [ 1, 2, 3 ];
```

<br>

The spread is also very useful when we need to **combine arrays in a single structure**:
```js
const spring = ['OCT', 'NOV', 'DEC'];
const summer = ['JAN', 'FEB', 'MAR'];
const fall = ['APR', 'MAY', 'JUN'];
const winter = ['JUL', 'AUG', 'SEP'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); /* [
  'JAN', 'FEB', 'MAR',
  'AP', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP',
  'OCT', 'NOV', 'DEZ'
] */
```

<br>

Another interesting use of the spread is in the **argument of a function** that *receives several parameters*. 

In the next example, we have a function that calculates a patient's *BMI (body mass index)*. 

The function takes the person's **weight** and **height** *as parameters*, and *returns* the **rounded BMI result**. 

We can save the patient data in an array and use the spread to expand these values in the argument of the function that calculates the BMI:

```js
const imc = (weight, height) => (weight / (height * height)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76
```

<br>

And we can apply this concept to ready-made JavaScript functions that take multiple parameters, such as the **Math.max** and **Math.min** functions:

```js
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5
```

<br>

Another valid example for a better understanding of the spread operator is that we can also do the same with **objects**:

```js
const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: "Developer",
};

const customer = {...people, ...about};
console.log(customer); /* {
  id: 101,
  name: 'Alysson',
  age: 25,
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer'
} */
```

<br>

### Rest Parameter

It allows us to create functions that receive an **unlimited number of arguments**

The arguments that will be passed as a parameter are saved in an array that can be accessed from within the function.

We can pass any type of parameter when using **rest**. All of them will be placed inside an array, which allows us to use methods, like .length for example:

```js
function howManyParams(...args) {
   console.log('parameters:', args)
   return `You passed ${args.length} parameters to the function.`;
};

console.log(howManyParams(0, 1, 2)); // 3 parameters were passed to the function.
console.log(howManyParams("string", null, [1, 2, 3], { })); // 4 parameters were passed to the function.
```

<br>

Another example where **rest** is very useful:

```js
const sum = (...args) => {
  return args.reduce((accumulator, current) => accumulator + current, 0);
};
console.log(sum(4, 7, 8, 9, 60)); // 88
```

<br>

### Object destructuring

In the work environment as a developer, we always need to extract values from an object in Javascript.

In the example below, how could we do to print the value of each product object property?

```js
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Walmart'
};
```

<br>

One way would be to access the values using object notation, such as `console.log(product.name)`, and repeat for each property.

This task is repetitive and verbose ...

When dealing with more complex objects, it would even be impractical.

To our delight, ES6 introduces yet another resource to make everyday activities, such as **accessing the values of an object**, simpler and with fewer declarations.

This feature is what we call **object destructuring**. 

We just need to pass the name of the properties we want to access on the left, between braces, and the object on the right:

```js
const { name } = product;
console.log(name); // Smart TV Crystal UHD
```

<br>

If we want to get, in addition to the name, the seller of the product, we can include the seller property within the keys to access its corresponding value:

```js
const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Walmart
```

<br>

Another cool trick of this feature is that you can **reassign the name of the property** you want to access by declaring it as a variable.

```js
const student = {
  a: 'Maria',
  b: 'Class B',
  c: 'Math',
};

const { a:name, b:classAssigned, c:subject } = student;

console.log(name); // Maria
console.log(classAssigned); // Class B
console.log(subject); // Math
```

<br>

This way of accessing an object's value and assigning it to a variable is equivalent to what we have below:

```js
const student = {
  a: 'Maria',
  b: 'Class B',
  c: 'Math',
};
const name = student.a;
console.log(name); // Maria
```

<br>

What happens when we try to access a non-existent field?

Javascript will not be able to make this association because this field does not exist and the variable will receive the *value **undefined***.

<br>

Finally, another situation that we can use object destructuring is when we want to **pass an object's values as parameters to a function**, as in the example below:

```js
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Walmart'
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promotion! ${name} for just ${price} is just here: ${seller}`)
};

printProductDetails(product); // Promotion! Smart TV Crystal UHD for just 1899.05 is just here: Walmart
```

<br>

### Array destructuring

You have certainly accessed an array position value as follows:

```js
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

const firstCountry = arrayCountries[0];
const secondCountry = arrayCountries[1];
const thirdCountry = arrayCountries[2];
const fourthCountry = arrayCountries[3];

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada
```

<br>

With the unstructuring of the array, we can declare all variables containing the country names using just a single line of code:

```js
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [ firstCountry, secondCountry, thirdCountry, fourthCountry ] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada
```

<br>

One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

Destructuring an array lets us do exactly that:

```js
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
```
##### Use Destructuring Assignment to Assign Variables from Arrays

The variable `a` is **assigned the first value** of the array, and `b` is **assigned the second value** of the array. 

We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

```js
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
```

[Array destructuring exercise 1](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-arrays)

##### Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

The result is similar to `Array.prototype.slice()`, as shown below:

```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]
```

Variables `a` and `b` take the first and second values from the array.

After that, because of the rest parameter's presence, `arr` gets the rest of the values in the form of an array. 

The rest element only works correctly as the last variable in the list.

As in, you cannot use the rest parameter to catch a subarray that leaves out the last element of the original array.

[Array destructuring exercise 2](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements)

<br>

### Default destructuring

Now that we know how to apply destructuring to objects and arrays.

What happens when we try to access:
- A property that does not exist in an object?
- A value in a non-existent position in an array?

That is:

```js
const person = {
    name: "João",
    lastName: "Jr",
    age: 34
};

const { nationality } = person;
```

<br>

As we saw in the previous sessions, when we try to access a property that does not exist, such as `nationality`, the returned value is `undefined`.

If a property does not exist in the object, we can give it a default value, as in the case of `nationality` using **default destructuring**:

```js
const person = {
    name: "João",
    lastName: "Jr",
    age: 34
};

const { nationality = "Brazilian" } = person;
console.log(nationality); // Brazilian
```

<br>

Analogously, the same can be done when destroying an array:

```js
const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(z); // 0
```

<br>

### Object property shorthand

one of the advantages of ES6 is that the new syntax eliminates repetitive codes, helping to clean up the code.

**property shorthand** is a very useful feature when declaring objects in Javascript.

The function below **receives information about a new user** as a parameter and **returns an object** containing this data.

Note that the properties of the returned object and the arguments that we pass to `newUser` are **identical**.

This repetition seems unnecessary, doesn't it?

```js
const newUser = (id, name, email) => {
  return {
    id: id,
    name: name,
    email: email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }
```

It is exactly this repetition that the feature **property shorthand** eliminates: we can simply **replace `id: id` with `id`** that Javascript understands that you want to assign the value of id to a property with the **same name** as the passed parameter:

```js
const newUser = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }
```

### Default parameters

See what happens when we call the `greeting` function without passing the `user` argument that it expects:

```js
const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!
```

The function will return `undefined`.
One solution would be:

```js
const greeting = (user) => {
  user = typeof user === 'undefined' ? 'user' : user;
  console.log(`Welcome ${user}!`);
};

greeting(); // Welcome user!
```

This solution doesn't look very elegant, does it? 

After all, we need to include a line to check if the parameter is `undefined`. If it is `undefined`, we define that `user` will be **'user'**. Otherwise, the function will print the message with the user's name passed as an argument.

With ES6, we can pre-define a standard parameter for the function. Thus, we can rewrite the previous example as follows:

```js
const greeting = (user = 'user') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome user!
```

# Exercises

### 1) Given the code below, complete it so that the area of the 3 rectangles is printed. The code must return in sequence 2, 15 and 54.

```js
const assert = require('assert');

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

for(rectangle of rectangles) {
  assert.strictEqual(rectangleArea(), rectangle[0]*rectangle[1]); // change the function call to rectangleArea
}
```

<hr>

### 2) Create a `sum` function that, given a variable number of elements, returns the sum of those elements. That is:

```js
const assert = require('assert');

// type sum below

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);
```

<hr>

### 3) Write the `personLikes` function, which given a parameter object that represents a person, returns all that person's tastes, as shown below:

```js
const assert = require('assert');

const alex = {
  name: "Alex",
  age: 26,
  likes: ["fly fishing"],
  nationality: "Australian"
};

const gunnar = {
  name: "Gunnar",
  age: 30,
  likes: ["hiking", "scuba diving", "taking pictures"],
  nationality: "Icelandic"
};

// complete the function signature below
const personLikes = () => `${name} is ${age} years old and likes ${likes.join(", ")}.`;
assert.strictEqual(personLikes(alex), "Alex is 26 years old and likes fly fishing.");
assert.strictEqual(personLikes(gunnar), "Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.");
```

<hr>

### 4) Write a `filterPeople` function that, given a list of people, returns all Australian people who were born in the 20th century:

```js
const assert = require('assert');

const people = [
  {
    name: "Nicole",
    bornIn: 1992,
    nationality: "Australian"
  },
  {
    name: "Harry",
    bornIn: 2008,
    nationality: "Australian"
  },
  {
    name: "Toby",
    bornIn: 1901,
    nationality: "Australian"
  },
  {
    name: "Frida",
    bornIn: 1960,
    nationality: "Dannish"
  },
  {
    name: "Fernando",
    bornIn: 2001,
    nationality: "Brazilian"
  }
];

// write filterPeople below

const filteredPeople = filterPeople(people);

assert.deepStrictEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" });
assert.deepStrictEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" });
``` 

<hr>

### 5) Write the `swap` function, which, given an array of 3 elements, returns a new array with the first and third elements exchanged. Detail: you need to do this function using only one line:

```js
const assert = require('assert');

const myList = [1, 2, 3];

// write swap below

const swappedList = swap(myList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);
```

<hr>

### 6) Suppose you are dealing with cars, and the way the problem was delivered to you, each car is modeled as an array. However, this modeling is low level. Creates a `toObject` function that, given a list, returns an object representing the car:

```js
const assert = require('assert');

const palio = ["Palio", "Fiat", 2019];
const shelbyCobra = ["Shelby Cobra", "Ford", 1963];
const chiron = ["Chiron", "Bugatti", 2016];

// write toObject below

assert.deepStrictEqual(toObject(palio), { name: "Palio", brand: "Fiat", year: 2019 });
assert.deepStrictEqual(toObject(shelbyCobra), { name: "Shelby Cobra", brand: "Ford", year: 1963 });
assert.deepStrictEqual(toObject(chiron), { name: "Chiron", brand: "Bugatti", year: 2016 });
```

<hr>

### 7) Write a `shipLength` function that, given an object representing a ship, returns its length, also showing the appropriate length unit:

```js
const assert = require('assert');

const ships = [
  {
    name: "Titanic",
    length: 269.1
  },
  {
    name: "Queen Mary 2",
    length: 1132,
    measurementUnit: "feet"
  },
  {
    name: "Yamato",
    length: 256,
    measurementUnit: "meters"
  }
];

// write shipLength below

assert.strictEqual(shipLength(ships[0]), "Titanic is 269.1 meters long");
assert.strictEqual(shipLength(ships[1]), "Queen Mary 2 is 1132 feet long");
assert.strictEqual(shipLength(ships[2]), "Yamato is 256 meters long");
```

<hr>

### 8) Write a `greet` function that, given a person's name, returns a greeting message:

```js
const assert = require('assert');

// write greet below

assert.strictEqual(greet("John"), "Hi John");
assert.strictEqual(greet("John", "Good morning"), "Good morning John");
assert.strictEqual(greet("Isabela", "Hi"), "Hi Isabela");
```
