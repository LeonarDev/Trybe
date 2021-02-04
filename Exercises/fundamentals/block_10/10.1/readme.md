# (10.1) Automated testing with Jest

<br>

- [Introduction](#Introduction)
- [First steps](#First-steps)
- [Writing tests](#Writing-tests)
- [Expect and matchers](#Expect-and-matchers)
  - [toBe](#toBe)
  - [toEqual](#toEqual)
  - [Truthiness](#Truthiness)
  - [Numbers](#Numbers)
  - [Strings](#Strings)
  - [Arrays and iterables](#Arrays-and-iterables)
  - [Error](#Error)
  - [not](#not)
- [The describe block](#The-describe-block)
- [Exercises Part I](#Exercises-Part-1)
- [Exercises Part II](#Exercises-Part-2)



<hr>
<br>

## Introduction
**Jest** is a unit testing framework for JavaScript developed by Facebook.

*As our programs grow*, the tests will be distributed in several files.

It becomes necessary a tool that is able to automatically find and execute all tests of the application, reporting information about test coverage, providing feedback on which tests failed and why, in addition to other characteristics.

A testing framework presents tools to eliminate or mitigate problems.

There are several similar tools, such as **Jest**, **Mocha** and **Jasmine**. Among them, **Jest** stands out for a few reasons:
- **It is easy** to install and requires zero configuration, as you will see shortly;
- **Is fast**. The *Airbnb* engineering team was able to *decrease the execution time of its test suite **from 12 to 4 minutes** by exchanging Mocha for Jest*;

<hr>
<br>

## First steps
- It is necessary to have **npm** installed to use the **JEST** framework.
- With npm installed, enter the directory where you want to perform the tests.
- After entering the directory, type the following command in the terminal:
```shel
npm init -y
```
<br>

The following return should appear:

```
Wrote to /home/majevski/Documents/my_directory/package.json:

{
  "name": "my_directory",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
<br>

This command just created the `package.json` file.
Now we need to edit this file, replacing it as follows:

```js
// {
//  "name": "my_directory",
//  "version": "1.0.0",
//  "description": "",
//  "main": "index.js",
//  "scripts": {
      "test": "jest"
//  },
//  "keywords": [],
//  "author": "",
//  "license": "ISC"
// }
```

<br>

The `package.json` is where we list the dependencies and versions (among other information of the application).

Finally, let's install Jest by running the following command on the terminal:

```
npm install --save-dev jest
```

This command will install everything needed for Jest, creating the node_modules folder and the package-lock.json file.
Explaining what these two are:

- `node_modules` is the directory that holds all files downloaded from the installed dependencies.
- `package-lock.json` is a file that “locks” versions of dependencies. 

When someone else runs `npm install` or `npm i` to download the dependencies, this file guarantees that the same versions will be installed for everyone.

<hr>
<br>

To test your installation, let's create a file called `sum.test.js` and paste the code below into it:

```js
const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});
```

After that, we will type in the npm test terminal, if you return an answer similar to the answer below, everything is fine with the installation!

<img src="https://course.betrybe.com//fundamentals/js-unit-tests/images/jest-ok.png>

<br>

> **Note**: Check the sample file and the file name, if it doesn't have the **.test** or **.spec** in its name, Jest doesn't try to read the file, because it doesn't recognize it as a test file.

<hr>
<br>

## Writing tests
Writing tests in **Jest** is very simple: All we need to do is use the `test` function. The `it` function is an alias for testing, that is, both refer to the same function and we can use either one.

The `test` function expects **three arguments**:
- The first argument is the **name** of the test. This name identifies the test and is also the text that will appear when the tests are run.
- The second argument is a **function** containing your expectations. In other words, it is within this function that we will do the tests themselves.
- The third argument (optional) is a **timeout**, indicating how long Jest should wait for the test to run before aborting it.

To better understand, see the code below:

```js
// sum.js
const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});
```

<br>

In this example, both the implementation and the function tests are in the same file. In practice, however, they will be separated. 

Jest looks for files with the extensions `.js`, `.jsx`, `.ts` and `.tsx` within a folder named `__tests__`, or files with the suffix `.test` or `.spec`.

It is common for the test file to have the same name and be in the same folder as the file being tested, with the suffix `.test.js` :

```js
// sum.js
const sum = (a, b) => a + b;

module.exports = sum;
```

```js
// sum.test.js
const sum = require('./sum');

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});
```

<br>

The `module.exports = sum` line **exports** the `sum` function in the first file so that it can be used in other modules. 

In the second file, we use require `('./ sum')` to **import** the `sum` function.

<hr>
<br>

## Expect and matchers
When writing tests, you need to check which values satisfy some conditions. The `expect` function is used to give access to a set of methods called **matchers**.

`expect` receives the value to be tested and returns an object representing an expectation. On this object you can call the matchers that Jest provides.

Let's go through the most common matchers. It is interesting to know that there are many other matchers that can be found in the [official Jest documentation](https://jestjs.io/docs/en/expect).

<br>

### toBe
`toBe` tests **strict equality** between the value passed to expect and its argument.

*For example, the test with the expectation below **fails** because the string "5" is not the same as the number 5:*

```js
expect(5).toBe("5")
```

<br>

### toEqual
To understand the difference between `toEqual` and `toBe`, we need to understand that in JavaScript there are *two ways to assign values*. 

1. The first is for the variable,
2. The second is for object ownership.

These forms of attribution are known as **value** and **reference**.

To delve deeper into these two forms, it is important to understand the **types of data**, which we separate into:
- *Primitive types* (number, string, boolean, etc) 
- *Objects* (objects, functions, arrays, etc).

*The primitive types are assigned by value*, in other words, **a copy of the original value**, because they are immutable. Example:

```js
let name = "Pedro";
let firstName = name;

name = "Carol";

console.log(name); // Carol
console.log(firstName); // Pedro
```

<br>

On the other hand, *objects are assigned by reference*, in other words, each time you create a new object, a new memory space is created for it. They are changeable, so we can consider that it is a way to create a nickname (alias) for the original, that is, you can be called by your name or by your nickname, but you are a unique person, it is not possible to create one clone yours. See this example:

```js
let myName = { firstName: "Pedro" };
let identity = myName;

myName.firstName = "Carol";

console.log(myName.firstName); // Carol
console.log(identity.firstName); // Carol
```

<br>

This means that objects and arrays with the same content are considered different in JavaScript. 

To test equality of objects and arrays, it is necessary to use the `toEqual` matcher, which accesses each element of the object or array, doing a specific comparison job and which returns a response more focused on the need for testing:

```js
test('array and object equality', () => {
  const arr = [1, 2 ,3];
  const obj = { a: 1, b: 2, c: 3};

  expect(arr).toBe([1, 2, 3]); // fails
  expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
  expect(arr).toEqual([1, 2, 3]); // OK
  expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
});
```

<br>

### Truthiness
In tests, you sometimes need to distinguish between `undefined`, `null`, and `false`, but you sometimes do not want to treat these differently. Jest contains helpers that let you be explicit about what you want.

- `toBeNull` matches only `null`
- `toBeUndefined` matches only `undefined`
- `toBeDefined` is the opposite of `toBeUndefined`
- `toBeTruthy` matches anything that an `if` statement treats as `true`
- `toBeFalsy` matches anything that an `if` statement treats as `false`

For example:

```js
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
```

<br>

### Numbers
Most ways of comparing numbers have matcher equivalents.

```js
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});
```

For **floating point** equality, use `toBeCloseTo` instead of `toEqual`, because you don't want a test to depend on a tiny rounding error.

```js
test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);         This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});
```

<br>

### Strings
You can check **strings** against regular expressions with `toMatch`:

```js
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christopher', () => {
  expect('Christopher').toMatch(/stop/);
});
```

<br>

### Array and iterables
You can check if an **array or iterable** contains a particular item using `toContain`:

```js
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});
```

<br>

### Error
If you want to test whether a particular function throws an error when it's called, use `toThrow`.

```js
const multiplyByTwo = (number) => {
  if (! number) {
    throw new Error ('number is undefined')
  }
  return number * 2;
};
multiplyByTwo (4);

test('tests if multiplyByTwo returns the result of the multiplication', () => {
  expect(multiplyByTwo(4)). toBe(8);
});
test('tests whether an error is thrown when number is undefined', () => {
  expect(() => { multiplyByTwo() }).toThrow();
});
test('tests if the error message is "number is undefined"', () => {
  expect(() => { multiplyByTwo() }).toThrowError(new Error('number is undefined'));
});
```

>**Note** that to test if an error is thrown, we pass a function to `expect`. We call `multiplyByTwo` within the arrow function. 

Calling the function directly within `expect` will prevent the error from being caught. Thus, the assertion will fail, because the error will happen even before `expect` is executed and has a chance to catch the error. 

To test the error message, as we did in the test of the example above, we use the `toThrowError` matcher and pass in the parentheses the message that will be shown in case of error: `new Error ("number is undefined")`. 
>**Note** that in both cases the function we want to test is called indirectly by an arrow function. Following this syntax is important for our tests to work correctly.

<br>

### not
`not` allows you to test the opposite of something. For example, this code tests that Sunday is a day of the week, but **not** a working day:

```js
const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workDays, 'Saturday'];

test('Sunday is a week day', () => {
  expect(weekDays).toContain('Sunday');
});

test('Sunday is not a workday', () => {
  expect(workDays).not.toContain('Sunday');
});
```
<hr>
<br>

## The describe block
`describe(name, fn)` creates a block that groups together several related tests. For example, if you have a `myBeverage` object that is supposed to be delicious but not sour, you could test it with:

```js
const myBeverage = {
  delicious: true,
  sour: false,
};

describe('my beverage', () => {
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});
```

<hr>
<br>

# Exercises Part 1

Use the function already implemented to develop the tests:

```js
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}
```
<br>

## 1.1 Test that the sum (a, b) function returns the sum of parameter a and b.
<br>

## 1.2 Test if the sum return (4, 5) is 9.
<br>

## 1.3 Test if the return of sum (0, 0) is 0.
<br>

## 1.4  Test if the sum function throws an error when the parameters are 4 and "5" (string 5).
<br>

## 1.5 Test if the error message is "parameters must be numbers" when making the sum call (4, "5").
<hr>
<br>

# Exercises Part 2

Use the functions already implemented to develop the tests:

```js
function encode(string) {
  let encodedString = '';
  for (let index in string) {
    if (string[index] === 'a') {
      encodedString += '1';
    } else if (string[index] === 'e') {
      encodedString += '2';
    } else if (string[index] === 'i') {
      encodedString += '3';
    } else if (string[index] === 'o') {
      encodedString += '4';
    } else if (string[index] === 'u') {
      encodedString += '5';
    } else {
      encodedString += string[index];
    }
  }
  return encodedString;
```

```js
function decode(string) {
  let decodedString = '';
  for (let index in string) {
    if (string[index] === '1') {
      decodedString += 'a';
    } else if (string[index] === '2') {
      decodedString += 'e';
    } else if (string[index] === '3') {
      decodedString += 'i';
    } else if (string[index] === '4') {
      decodedString += 'o';
    } else if (string[index] === '5') {
      decodedString += 'u';
    } else {
      decodedString += string[index];
    }
  }
  return decodedString;
}
```

For the `encode` and `decode` functions, create the following tests:
