# (8.3) 


# Exercise

All exercises must be performed using reduce, and if necessary another HOF, the information will be quoted in the statement.

1. Given a matrix of matrices, transform it into a single matrix.

```js
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

```

<br>

2. Create a string with the names of all authors.

```js
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


function allNames() {
  // write your code here
}

assert.deepStrictEqual(allNames(), "Names: George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.");

```

<br>

3. Calculate the average age that authors were when their respective books were released.

```js
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

const expectedResult = 43;

function averageAge() {
  // write your code here
}

assert.strictEqual(averageAge(), expectedResult);

```

<br>

4. Find the book with the biggest name.

```js
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

const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin'
  },
  genre: 'Fantasy',
  id: 1,
  name: 'The Chronicles of Ice and Fire',
  releaseYear: 1991
};

function longestNamedBook() {
  // write your code here
}

assert.deepStrictEqual(longestNamedBook(), expectedResult);

```

<br>

5. Given the array of names, return the number of times that the letter **'A'** appears uppercase or lowercase.

```js
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // write your code here
}

assert.deepStrictEqual(containsA(), 20);

```

<br>

6. Now we are going to create a new array of objects from the information below, where each object will have the format `{name: student name, average: average of grades}`. For this we will assume that the position 0 of `notes` refers to the student in position 0 of `students`, here in addition to `reduce` it will also be necessary to use the `map` function. 
  - *Tip: You can access the array index within the `map`, and you can see the expected object in the `expected` constant.*

```js
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

```
