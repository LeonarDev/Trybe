// 1) Given the code below, complete it so that the area of the 3 rectangles is printed. The code must return in sequence 2, 15 and 54.

const assert = require('assert');

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

for(rectangle of rectangles) {
  assert.strictEqual(rectangleArea(), rectangle[0]*rectangle[1]); // change the function call to rectangleArea
}
