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


##### Distinguishing each step, TDD consists of:
- Write a test that covers the function you intend to implement before you even run it. This test will fail - after all, its function has not yet been declared. You can start from the most basic test possible for this scenario, such as checking if the function you are going to create exists:
```js
const assert = require('assert');
assert.strictEqual(typeof myFunction, 'function');
```

- Implement only what is necessary for the test to pass. In the case of the previous example, you would only need to declare the function to pass the test.

- Refactor the code so that it is well written and easy to understand. The big thing in this step is that you have a test already implemented that will fail if you break something when refactoring your code.

- Repeat! After all, test-driven development is a cycle. Go back to step 1 and repeat this process until all the functionality of your function is implemented.

<br>

### Now the practice

Copy the functions already implemented and develop the tests. Separate functions into files to avoid any problems.

#### Exercise 1
1. The `sum (a, b)` function returns the sum of parameter `a` and `b`:
  - Test if the sum return `(4, 5)` is `9`
  - Test whether the return of `sum (0, 0)` is `0`
  - Test if the `sum` function throws an error when the parameters are `4` and `"5"` (string 5)
  - Test if the error message is "parameters must be numbers" when making the `sum` call `(4, "5")`

```js
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implement your tests here
```

<br>

2. `The myRemove (arr, item)` function receives an `arr` array and returns a copy of that array without the `item` element if it exists in the array:
    - Check that the `myRemove([1, 2, 3, 4], 3)` returns the expected array
    - Check that the `myRemove([1, 2, 3, 4], 3)` does **not** return the array `[1, 2, 3, 4]`
    - Check that the array passed by parameter has **not** changed
    - Check if the `myRemove([1, 2, 3, 4], 5)` returns the expected array

```js
const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implement your tests here
```

<br>

3. The `myRemoveWithoutCopy (arr, item)` function receives an `arr` array and returns the array itself without the `item` element if it exists in the array:
    - Check that the `myRemoveWithoutCopy([1, 2, 3, 4], 3)` returns the expected array
    - Check that the `myRemoveWithoutCopy([1, 2, 3, 4], 3)` does **not** return the array `[1, 2, 3, 4]`
    - Make a call to the `myRemoveWithoutCopy` function and check if the array passed by parameter has changed
    - Check if the `myRemoveWithoutCopy([1, 2, 3, 4], 5)` returns the expected array

```js
const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implement your tests here
```

<br>

4. The function `myFizzBuzz(num)` receives a number num and returns `"fizzbuzz"` if the number is divisible by `3` and `5`, returns `"fizz"` if it is divisible by only `3`, returns `"buzz"` if divisible only by `5`, returns the number itself if not divisible by `3` or `5` and returns `false` if `num` is not a number:
    - Make a call with a number divisible by **3** and **5** and check if the return is as expected
    - Make a call with a number divisible by **3** and check if the return is as expected
    - Make a call with a number divisible by **5** and check if the return is as expected
    - Make a call with a number that is not divisible by **3** or **5** and check if the return is as expected
    - Make a call with a parameter that is not a number and check if the return is as expected

```js
const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implement your tests here
```

<br>

5. Compare two objects (JSON) to check whether they are identical or not:

```js
const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implement your tests here
```

<br>

### Practicing TDD

In this part the exercises are divided into two groups: first, you will write code based on the tests. Then you will read a code and what it has to answer for. From there, you will write tests and use them as a base to change the code. As well? Well, let's go step by step!

#### Writing test code

Given the test cases below, write the functions in order to pass the tests. **It is important to never change the tests or variables already written in the code**:

Copy the tests already implemented and develop the functions. Separate functions into files to avoid any problems.

1. Write the `addOne` function to pass the tests already implemented.

```js
const assert = require('assert');
// write the addOne function here

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
```

<br>

2. Write the `wordLengths` function to pass the tests already implemented.

```js
const assert = require('assert');
// write the wordLengths function here

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
```

<br>

3. Write the `sumAllNumbers` function to pass the tests already implemented.

```js
const assert = require('assert');
// write the sumAllNumbers function here

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
```

<br>

4. Write the `findTheNeedle` function to pass the tests already implemented.

```js
const assert = require('assert');
// write the findTheNeedle function here

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
```

<br>

#### Rewriting functions using TDD

Now we have changed a little: we have a function ready (and done in the wrong way, that is, without working properly), the parameters that must be passed to it and the expected response. Write tests to understand and test the function's behavior, and then change it to pass the tests. Use the test cases above as inspiration if in doubt!
> Remember: small and numerous tests! Write one at a time and gradually correct the function.

1. Use the parameter variable as a parameter of the function below, write tests to check if it is returning as seen in the result variable and, if not, change the code so that it passes the tests.

```js
const greetPeople = (people) => {
  let greeting = 'Hello ';

  for (const person in people) {
    greeting += people[person];
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
```

<br>

2. Use the parameter variable as a parameter of the function below, write tests to check if it is returning as seen in the result variable and, if not, change the code so that it passes the tests.

```js
const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];

  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      results.push(characters[i]);
    } else {
      results.push('_');
    }
  }
  return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';
```

<br>

3. Use the parameter variable as a parameter of the function below, write tests to check if it is returning as seen in the result variable and, if not, change the code so that it passes the tests.

```js
const greaterThanTen = (array) => {
  let results = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 10) {
      results += array[i];
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];
```

<br>

4. Use the parameter variable as a parameter of the function below, write tests to check if it is returning as seen in the result variable and, if not, change the code so that it passes the tests.

```js
function secondThirdSmallest(array) {
    let results = []
    array.sort(function (x, y) {
        return x + y;
    });
    results = [array[1], array[2]];
    return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];
```

### Bonus

1. Imagine that you are going to build a vending machine (like the ones that sell soda). The machine accepts coins and calculates the difference between the total amount to be paid and the amount received from the person who buys. This machine has a set of coins. You must implement the following logic: given the change amount, the machine returns a list of the coins that it will return to the person.


##### Requirements
As a person buying from vending machines, I would like to select an item, deposit payment and receive the item and change.


##### Acceptance criteria
- A successful call to a `getChange` function should return a list with the value of the coins that will be returned to the person
- This list must be in decreasing value format
- Repetition of currency values ​​is permitted, for example, [200, 100, 50, 20, 10, 2, 2]
- An error with the message paid value is not enough should be thrown if the amount paid is less than the purchase amount


##### Available currencies
The coins will be represented by the values ​​200, 100, 50, 20, 10, 5, 2 and 1. Below, there is a list of correspondence with the values ​​in reais (R$)
- 200 (R$ 2,00)
- 100 (R$ 1,00)
- 50 (R$ 0,50)
- 20 (R$ 0,20)
- 10 (R$ 0,10)
- 5 (R$ 0,05)
- 2 (R$ 0,02)
- 1 (R$ 0,01)

The **amount** of each coin is infinite, imagine that this is a simplification of the problem.


##### Example
If a person buys items with a total value of R$ 2.15 (that is, 215) and pays R$ 3,00 (that is, 300), the change is R$ 0,85 (that is, 85). To return this change to the person, the coins must be returned 1x R$ 0,50, 1x R $ 0,20, 1x R$ 0,10 and 1x R$ 0,05, thus forming the list [50, 20, 10, 5].

##### Implementation
Finalize the implementation of the `getChange(payable, paid)` function.
- `payable` is the amount to be paid, or the total amount
- `paid` is the amount the person paid

```js
function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;

  // write your code here...

  return change;
}
```

<br>

##### Unitary tests
As stated earlier, unit tests are already ready, and their implementation must go through all of them.

```js
const assert = require('assert');

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepStrictEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepStrictEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepStrictEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepStrictEqual(result, expected);

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);
```

<br>

2. Write the `factorial` function to pass the tests already implemented.

```js
const assert = require('assert');
// write the factorial function here

const in1 = 5;
const exp1 = 120;

const in2 = 9;
const exp2 = 362880;

const in3 = 1;
const exp3 = 1;

const in4 = 0;
const exp4 = 1;

const in5 = 3;
const exp5 = 6;

const out1 = factorial(in1);
const out2 = factorial(in2);
const out3 = factorial(in3);
const out4 = factorial(in4);
const out5 = factorial(in5);

assert.strictEqual(out1, exp1);
assert.strictEqual(out2, exp2);
assert.strictEqual(out3, exp3);
assert.strictEqual(out4, exp4);
assert.strictEqual(out5, exp5);
```

<br>

3. Write the `removeMiddle` function to pass the tests already implemented.

```js
const assert = require('assert');
// write the removeMiddle function here

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);
```

<br>

4. Use the parameter variable as a parameter of the function below, write tests to check if it is returning as seen in the result variable and, if not, change the code so that it passes the tests.
> Remember: small and numerous tests! Write one at a time and gradually correct the function.

```js
const getLargestNumber = (array) => {
    let largestNumber;
    for (let i = 0; i < array.length - 1; i += 1) {
        if (array[i] > array[i + 1]) {
            largestNumber = [array[i]];
        }
    }
    return largestNumber;
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;
```

<br>

5. **Kata** or **Code Kata** are programming exercises that help to improve skills through practice and repetition.

[Kata 'Password checker'](https://github.com/CodeYourFuture/js-exercises-tdd/tree/master/III.tdd-katas/password-verifier): Create a `Verify()` function that returns `false` for the cases listed in the repository and `true` otherwise. It is not necessary to make extra items (2, 3 and 4) from the repository.