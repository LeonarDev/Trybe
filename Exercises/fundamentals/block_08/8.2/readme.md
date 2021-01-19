# (8.2) ECMAScript6 - Higher Order Functions: map and filter

### Array.filter

The `filter` is very similar to `find`. What the `filter` brings again is that, instead of returning just one element of the array, it will return another array with all the elements that satisfy the condition verified by the function.

<img src="https://course.betrybe.com//fundamentals/arrays-and-hof/hof-part-2/images/filter.gif">

In the example below, we will only replace `find` with `filter`:

```js
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.filter(verifyEven);

console.log(isEven); // [30, 22]

// Another way to be done without the need to create a new function.
const isEven2 = numbers.filter((number) => number % 2 === 0);

console.log(isEven2); // [30, 22]
```

Check that the return was an array with the two even numbers from the array `numbers`.
Look at this other example of just taking the elements that have no condition. In this case, we only want people who are not yet old enough to drive:

```js
const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (arrayOfPeople) => (
  arrayOfPeople.filter((people) => (people.age < 18))
);

console.log(verifyAgeDrive(objPeople)); // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]
```

Another way to use the `filter` is to return an array without the desired element. It is necessary to remove **Ricardo** from the object now, since he is no longer a student.

```js
const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) => {
  return listStudents.filter((student) => student !== name); // Filters all students who do not have the name 'Ricardo' and returns an array with them. In practice, it removes Ricardo from the array.
};

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]
```

Note that the `filter` was used within a function that takes two parameters, the array of values and a string, which will be removed. The condition inside the `filter` is to return whenever the element is different from the `name` passed. If you got confused, run that code on your own and change how it works a little! This will help a lot.

<br>

### Array.map

See the difference between making the same function using `for` and then using `map`:

```js
const persons = [
  { firstName: "Maria", lastName: "Ferreira" },
  { firstName: "João", lastName: "Silva" },
  { firstName: "Antonio", lastName: "Cabral" },
];

const fullNames = [];
for(let i = 0; i < persons.length; i += 1){
  fullNames.push(`${persons[i].firstName} ${persons[i].lastName}`);
}

console.log(fullNames);
```

Now with the `map` function:

```js
const persons = [
  { firstName: "Maria", lastName: "Ferreira" },
  { firstName: "João", lastName: "Silva" },
  { firstName: "Antonio", lastName: "Cabral" },
];

const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]
```

The `for` has been replaced with just one line of code.

The function merged the first name with each person's last name and returned a new array with each of the values. Note that the size of the persons and `fullNames` arrays is the same (3 elements).

Another example is to perform a calculation using the values of the elements and return a new array without changing the previous one.

In the animation below, we can see that the `map` method is invoking a callback function that multiplies each element of the `numberList` array by two. The return of the `map` is a new (double) array that contains the result of multiplying each element of the `numberList` array by two. Note that the returned array has exactly the same number of items as the original array, which has not been modified!


<img src="https://course.betrybe.com//fundamentals/arrays-and-hof/hof-part-2/images/map.gif">


Suppose you have to turn all numbers into negative and pass them to a new array.

```js
const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map(number => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]
```

And what would it be like with `for` only?

```js
const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = [];
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 0) {
    negativeNumbers.push(numbers[i] * -1);
  } else {
    negativeNumbers.push(numbers[i]);
  }
}

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]
```

Other ways to use `.map` is to join two arrays together to create a new one. Consider that you have two lists: the price of the first product (Rice) is the first element of the prices list (2.99), and so on:

```js
const products = ['Rice', 'Beans', 'Lettuce', 'Tomato'];
const prices = [2.99, 3.99, 1.5, 2];
```

You want to join them in just one list of objects that looks like this:

```js
const listProducts = [{ Rice: 2.99 },...]
```

```js
const products = ['Rice', 'Beans', 'Lettuce', 'Tomato'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => {
  return listProducts.map((product, index) => (
    { [product]: listPrices[index] }
  ));
};

const listProducts = updateProducts(products, prices);
console.log(listProducts);
=> [
  { Rice: 2.99 },
  { Beans: 3.99 },
  { Lettuce: 1.5 },
  { Tomato: 2 },
]
```

### Exercises

1. Create an array with strings in the format BOOK_NAME - BOOK_GENDER - BOOK_AUTHOR
 - Tip: Use the `map` function

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
  'The Chronicles of Ice and Fire - Fantasy - George R. R. Martin',
  'The Lord of the Rings - Fantasy - J. R. R. Tolkien',
  'Foundation - Science Fiction - Isaac Asimov',
  'Dune - Science Fiction - Frank Herbert',
  'The Thing - Horror - Stephen King',
  'The Call of Cthulhu - Horror - H. P. Lovecraft'
];

function formatedBookNames() {
  // write your code here
}

assert.deepStrictEqual(formatedBookNames(), expectedResult);
```

<br>

2. Build an array of objects from the book array. Each object must contain an `author` property, with the name of the person who authored the book, and a property acts at the age of that person when the book was released. The array should be ordered by age, that is, from the youngest person to the oldest person considering their age when the book was released.
  - Tip: use the `map` and `sort` functions

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
```

<br>

3. Create an array of all objects that have a science fiction or fantasy genre.
  - Tip: use the `filter` functions;

```js
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
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'The Call of Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
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
]

function fantasyOrScienceFiction() {
  // write your code here
}

assert.deepStrictEqual(fantasyOrScienceFiction(), expectedResult);
```

<br>

4. Create an array sorted by books with more than 60 years of publication and sort by the oldest book.
  - Tip: use the `filter` and `sort` functions

```js
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
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'The Call of Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft ',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expectedResult = [
  {
    id: 6,
    name: 'The Call of Cthulhu',
    genre: 'Terror',
    author: {name: 'H. P. Lovecraft', birthYear: 1890},
    releaseYear: 1928
  },
  {
    id: 3,
    name: 'Foundation',
    genre: 'Science Fiction',
    author: {name: 'Isaac Asimov', birthYear: 1920},
    releaseYear: 1951
  },
  {
    id: 2,
    name: 'The Lord of the Rings',
    genre: 'Fantasia',
    author: {name: 'J. R. R. Tolkien', birthYear: 1892},
    releaseYear: 1954
  }
]

function oldBooks() {
  // write your code here
}

assert.deepStrictEqual(oldBooks(), expectedResult);
```

<br>

5. Create an array in alphabetical order with only the names of all people who have written science fiction or fantasy.

```js
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
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'The Call of Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expectedResult = [
  Frank Herbert,
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien '
]

function fantasyOrScienceFictionAuthors() {
  // write your code here
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);
```

6. Create an array with the name of all books with more than 60 years of publication.

```js
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
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'The Call of Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expectedResult = [
  'Lord of the Rings',
  'Foundation',
  'The Call of Cthulhu'
]

function oldBooks() {
  // write your code here
}

assert.deepStrictEqual(oldBooks(), expectedResult);
```

7. Find the name of the book written by the person whose registered name starts with three initials (ends with a period).

```js
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
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'The Call of Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expectedResult = 'The Lord of the Rings';

function authorWith3DotsOnName() {
  // write your code here
}

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);
```