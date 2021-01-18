# 8.1 ECMAScript6 - Higher Order Functions

#### A Higher Order Function is simply a function that takes another function as a parameter or that returns a function.

- `forEach`: to iterate over all the elements of an array (forEach runs through the array and executes the function passed to each of its values. ForEach does not return any values). The function passed to forEach has element, index and array as parameters, where:
    - element - Value of the array element;
    - index - Index at each iteration or position of the element in the array, starting from 0;
    - array - Original array being traversed.
- `find`: to find the first element of an array that satisfies a condition (the function to be passed must return true or false);
- `some`: to test if any element satisfies a condition (return true or false);
- `every`: to test that all elements satisfy a condition (return true or false);
- `sort`: to sort arrays according to some criterion. If you want to sort alphabetically, just call sort, with no parameters in the function. When there are elements such as `numbers`, the sort places the alphabetical order of the codes of that element in the unicode character table:
```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
```

<br>

> Now, if you want to sort in increasing numbers, you need to pass the following function:
```js
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]
```

To see how the sort works, play with [this example](https://codepen.io/pen/?template=gOMYaXy) made in CodePen.


<br>

# Exercises

In the following exercises, you will work with a data structure representing a list of books, containing information such as the name of the book, genre, author of the book and release date.

In each exercise, you will be asked to find or produce some information about this list using the functions you learned today. All exercises contain a base code. You must copy this code and save it in a file named after the exercise number, completing the blank function.

For example, exercise 1 must be saved in the file **exercise1.js**, and so on. In each exercise there are one or more function calls from the assert module. These functions will automatically check if your code returns the expected result.

Your solution will only be considered correct if all the asserts in the file are executed without errors. In Visual Studio Code, you can run the sample code by right clicking and choosing the Run Code option.

When all the assertions pass, that is, none of them finds a different result than expected, nothing different than normal is reported:

```js
const assert = require('assert');

function anyFunction() {
  return 'value1';
}

assert.strictEqual(anyFunction(), 'value1');
```

```js
[Running] node "/Users/majevski/example.js"

[Done] exited with code=0 in 0.087 seconds
```

```js
const assert = require('assert');

function anyFunction() {
  return 'value1';
}

assert.strictEqual(anyFunction(), 'value2');
```

```js
[Running] node "/Users/majevski/example.js"
assert.js:92
  throw new AssertionError(obj);
  ^

AssertionError [ERR_ASSERTION]: 'valor1' == 'valor2'
    at Object.<anonymous> (/Users/majevski/example.js:7:8)
    at Module._compile (internal/modules/cjs/loader.js:956:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Function.Module.runMain (internal/modules/cjs/loader.js:1025:10)
    at internal/main/run_main_module.js:17:11 {
  generatedMessage: true,
  code: 'ERR_ASSERTION',
  actual: 'valor1',
  expected: 'valor2',
  operator: '=='
}

[Done] exited with code=1 in 0.075 seconds
```

Pay attention to the line that says why the execution failed: `AssertionError [ERR_ASSERTION]: 'value1' == 'value2'`. This means that the result of the function `anyFunction, value1`, is different from the expected `alue2`.