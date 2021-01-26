const assert = require('assert');

const arrays = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
];

// 1. Given a matrix of matrices, transform it into a single matrix.
function flatten() {
  return arrays.reduce((previousValue, currentValue) => previousValue.concat(currentValue), []);
};

console.log(flatten());

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
