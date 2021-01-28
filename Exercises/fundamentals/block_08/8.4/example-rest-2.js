const assert = require('assert');

const dateInfo = ['1981', '7', '31', '22', '47', '12'];

const formatDate = (year, month, day, ...rest) => {
  console.log(rest);
  return `${day}/${month}/${year}`;
};

console.log(formatDate(...dateInfo));

// TESTS
const expectedValue = '31/7/1981';
const actualValue = formatDate('1981', '7', '31', '22', '47', '12');
assert.strictEqual(actualValue, expectedValue);