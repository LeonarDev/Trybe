// 6. Now we are going to create a new array of objects from the information below, where each object will have the format `{name: student name, average: average of grades}`. For this we will assume that the position 0 of `notes` refers to the student in position 0 of `students`, here in addition to `reduce` it will also be necessary to use the `map` function. 
//   - Tip: You can access the array index within the `map`, and you can see the expected object in the `expected` constant.

const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
   // write your code here
}

const expected = [
   {name: 'Pedro Henrique', average: 7.8},
   {name: 'Miguel', average: 9.2},
   {name: 'Maria Clara', average: 8.8},
];

assert.deepStrictEqual(studentAverage(), expected);