// 2. Build an array of objects from the book array. Each object must contain an `author` property, with the name of the person who authored the book, and a property acts at the age of that person when the book was released. The array should be ordered by age, that is, from the youngest person to the oldest person considering their age when the book was released.
//   - Tip: use the `map` and `sort` functions

const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'The Chronicles of Ice and Fire',
    genre: 'Fantasy',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'The Lord of the Rings',
    genre: 'Fantasy',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Foundation',
    genre: 'Science Fiction',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Dune',
    genre: 'Science Fiction',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'The Thing',
    genre: 'Horror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'The Call of Cthulhu',
    genre: 'Horror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expectedResult = [
  { age: 31, author: 'Isaac Asimov' },
  { age: 38, author: 'H. P. Lovecraft' },
  { age: 39, author: 'Stephen King' },
  { age: 43, author: 'George R. R. Martin' },
  { age: 45, author: 'Frank Herbert' },
  { age: 62, author: 'J. R. R. Tolkien' }
];

function nameAndAge() {
  // write your code here
}

assert.deepStrictEqual(nameAndAge(), expectedResult);
