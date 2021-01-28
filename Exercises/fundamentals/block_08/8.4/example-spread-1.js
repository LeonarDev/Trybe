const assert = require('assert');

// ISSUE: joining two arrays into one
const horrorBooks = ['It', 'The Shining'];
const scifiBooks = ['I, Robot', 'Caves of Steel', 'The End of Eternity'];

// Using FOR
let awesomeBooks = [];

for (let i = 0; i < horrorBooks.length; i++) {
  awesomeBooks.push(horrorBooks[i]);
}

for (let i = 0; i < scifiBooks.length; i++) {
  awesomeBooks.push(scifiBooks[i]);
}

// Using SPREAD OPERATOR
const books = [...horrorBooks, ...scifiBooks];

console.log(books);

// Tests
const expectedValue = ['It', 'The Shining', 'I, Robot', 'Caves of Steel', 'The End of Eternity'];
assert.deepStrictEqual(books, expectedValue);