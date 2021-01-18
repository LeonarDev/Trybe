# (8.1) ECMAScript6 - Higher Order Functions

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

The function passed to forEach has element, index and array as parameters, where:
element - Value of the array element;

index - Index at each iteration or position of the element in the array, starting from 0;

array - Original array being traversed.
