// 1. Given a matrix of matrices, transform it into a single matrix.

const assert = require('assert');

const arrays = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
];

function flatten() {
  // write your code here
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
