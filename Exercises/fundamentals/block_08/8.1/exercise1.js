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
    genre: 'horror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'The Call of Cthulhu',
    genre: 'horror',
    author: {
      name: 'H. P. Lovecraft ',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// const authorBornIn1947 = (value) => value.author.birthYear === 1947;
// const verifyAuthorName = books.find(authorBornIn1947).author.name;
const authorBornIn1947 = () => {
  return books.find(book => book.author.birthYear === 1947).author.name;
}

assert.strictEqual (authorBornIn1947(), 'Stephen King');