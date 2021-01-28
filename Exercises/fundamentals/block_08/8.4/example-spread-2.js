const assert = require('assert');

const point = [1.0, 2.2, -6.6, 8];
const otherPoint = [0.1, 3.5, -99.6];

printPointCoordinates = (x, y, z) => `Point coordinates are x = ${x}, y = ${y} and z = ${z}`;

console.log(printPointCoordinates(...point));

// TESTS
const expectedValuesPoint = 'Point coordinates are x = 1, y = 2.2 and z = -6.6';
const actualValuesPoint = printPointCoordinates(point[0], point[1], point[2]);
assert.strictEqual(expectedValuesPoint, actualValuesPoint);

const expectedValuesOtherPoint = 'Point coordinates are x = 0.1, y = 3.5 and z = -99.6';
const actualValuesOtherPoint = printPointCoordinates(otherPoint[0], otherPoint[1], otherPoint[2]);
assert.strictEqual(expectedValuesOtherPoint, actualValuesOtherPoint);