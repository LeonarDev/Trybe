# (7.3) Unit Testing in JavaScript

### NodeJS Assert

The **Assert** module is a measurement tool that allows you to test expressions. This module is already installed with **NodeJS**. We can understand the `assert` as a Boolean expression that will always be `true`, unless there is a failure. For this reason, the `assert` **will not give feedback if the test does not fail**. If the `assert` expression is evaluated with a value of 0 or `false`, the test will fail and the program will be terminated. The `assert` has several methods to test whether your code works as expected. We will see in the examples below some of these methods. This is the simplest way to write tests.


Follow an example of using the `assert` module below. Rotate the expressions separately, commenting out the line that will not be executed to see the result.

```js
const assert = require ('assert'); // Syntax to include the assert module

assert.strictEqual (50, 50); // No errors: 50 == 50
assert.strictEqual (50, 70); // AssertionError: 50 == 70
```


In this other example, we use the `assert` to test the expected return of the `division` function:
```js
const assert = require('assert');

function division(x, y) {
  return x / y;
}

const expected = division(9, 3);

assert.strictEqual(expected, 3, 'Nine divided by three is equal to three');
```


Some other methods of the `assert` module that allows us to write tests are:
- `assert.strictEqual()`
- `assert.deepStrictEqual()`
- `assert.notStrictEqual()`
- `assert.ok()`
- `assert.fail()`


The list of available methods, along with the documentation for each, is [here](https://nodejs.org/api/assert.html). You will find that some methods are used more often than others. If you are interested, you can see more test examples and when each method is used [here](https://nelsonic.gitbooks.io/node-js-by-example/content/core/assert/README.html).

#### [JavaScript Test Automation](https://github.com/atinfo/awesome-test-automation/blob/master/javascript-test-automation.md)

[Most used assert methods](https://www.w3schools.com/nodejs/ref_assert.asp)

<br>

### Unit tests and code improvement

One role of unit testing is to help us implement more robust functions. See, for example, the function that performs the division used in the previous model:

```js
const division(x, y) => x / y;
```


```js
const assert = require ('assert');

// declaration of the division function, defined previously ...

assert.strictEqual (division (10, 2), 5); // OK
assert.strictEqual (division (10, 0), 0); // 💣
```


The first `assert.strictEqual` works and has no error, but the second makes evident a weakness in the implementation of the `division` function, as it could not be possible to perform the division by 0. In this case, we must improve the implementation of the `division` function, in order not to we have this inconsistent state more.

We can do this using the keyword `throw`, which in javascript serves to throw an error. We will then use it to throw an error if the divisor y is equal to zero.

```js
const assert = require('assert');

function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

assert.strictEqual(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK
```


We updated the test to reflect the change in implementation for this situation, checking not only whether the error is thrown, but also whether it is the expected error. That is, unit tests also help us to identify special cases that can lead our functions to invalid states.

<br>

### TDD: Test Driven Development 

<img src="https://miro.medium.com/max/700/1*XfV3ZwsQW6tVgFWEQG8V8g.png">

