const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'The Chronicles of Ice and Fire',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'The Lord of the Rings',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien ',
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
      name: 'H. P. Lovecraft ',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expectedResult = [
  {
    id: 1,
    name: 'The Chronicles of Ice and Fire',
    genre: 'Fantasia',
    author: {name: 'George R. R. Martin', birthYear: 1948},
    releaseYear: 1991
  },
  {
    id: 5,
    name: 'The Thing',
    genre: 'Horror',
    author: {name: 'Stephen King', birthYear: 1947},
    releaseYear: 1986
  },
  {
    id: 4,
    name: 'Dune',
    genre: 'Science Fiction',
    author: {name: 'Frank Herbert', birthYear: 1920},
    releaseYear: 1965
  },
  {
    id: 2,
    name: 'The Lord of the Rings',
    genre: 'Fantasia',
    author: {name: 'J. R. R. Tolkien ', birthYear: 1892},
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Foundation',
    genre: 'Science Fiction',
    author: {name: 'Isaac Asimov', birthYear: 1920},
    releaseYear: 1951
  },
  {
    id: 6,
    name: 'The Call of Cthulhu',
    genre: 'Horror',
    author: {name: 'H. P. Lovecraft ', birthYear: 1890},
    releaseYear: 1928
  }
];

// 4) Sort books by release date in descending order.
function booksOrderedByReleaseYearDesc() {
  // write your code here
}


assert.deepStrictEqual( booksOrderedByReleaseYearDesc(), expectedResult );