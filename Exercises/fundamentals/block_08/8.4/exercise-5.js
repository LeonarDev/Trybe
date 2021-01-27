// 5) Write the `swap` function, which, given an array of 3 elements, returns a new array with the first and third elements exchanged. Detail: you need to do this function using only one line:

const assert = require('assert');

const myList = [1, 2, 3];

// write swap below

const swappedList = swap(myList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);
