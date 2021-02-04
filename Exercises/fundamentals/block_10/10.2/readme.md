# (10.2) Jest - Assynchronous Tests

<br>

- [Testing asynchronous code](#Testing-asynchronous-code)
  - [Callbacks](#Callbacks)
  - [Promises](#Promises)
  - [Async and Await](#Async-and-Await)
- [Matcher .resolves and .rejects](#Matcher-.resolves-and-.rejects)
- [Setup and Teardown](#Setup-and-Teardown)
- [Exercises](#Exercises)


<hr>
<br>

## Testing asynchronous code
So that we can carry out asynchronous tests, Jest provides us with some solutions in order that our tests know when the function to be tested has been completed and the necessary information has been returned.

This prevents false positives from happening and ensures safety for the application.

We will analyze each case separately below:

- **Callbacks**: to test callbacks we use the `done` function. It is called to signal to Jest that the test must wait for the `callback` function to return for validation to take place.
- **Promises**: when we test promises we must **return** it within the test. Remember to use `then` when the return is a `resolve` and `catch` when the return is a `reject`.
- **Async / Await**: to test functions with `async` and `await` we must use the keyword `async` in the function passed to test and `await` where we expect some asynchronous feedback. Remember that async/await is just a simpler syntax alternative for testing promises.

<br>

### Callbacks
When performing asynchronous tests, it is necessary to be careful with **false positives**, as Jest does not, by default, know when it is necessary to wait for the execution of an asynchronous function to finish. 

In other words, you run the test, Jest analyzes the synchronous functions, does not wait for the asynchronous ones to finish and, given the end of the test, it generates a positive result before an eventual problem in an asynchronous function causes an error.

The example below generates a false positive:

```js
test ("It shouldn't pass!", () => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('It should fail!')
  }, 500);
});
```
The test returns a **false-positive** result when performed in this way - note, even, that the phrase *'It should fail!'* doesn't even appear on the console. Jest does not wait for the test to end, generating this **false positive result**.

For Jest to wait for the asynchronous function to be finished, it is necessary to use a library callback, `done`, which needs to be called after the asynchronous tests.

Now Jest in the example below can identify the error.

```js
test ("It shouldn't pass!", (done) => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('It should fail!')
    done();
  }, 500);
});
```

Another example for better understanding:

```js
const SumNumbers = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500)
}

test('SumNumbers, sum 5 plus 10', done => {
  SumNumbers(5, 10, (result) => {
    expect(result).toBe(15);
    done();
  });
})
```
<hr>
<br>

### Promises
To test a promise the code below will be used. It has an `Animals` array, containing animals with their name, age and type.

Note that the `findAnimalsByType` function is a promise, responsible for searching for animals of a certain type in the array. If successful, it will return a `resolve` with an array of data. In case of failure, it will return a `reject` with an object with the error key, with a message.

```js
const Animals = [
  { name: 'Sleeper', age: 1, type: 'Dog' },
  { name: 'Snooze', age: 2, type: 'Dog' },
  { name: 'Sloth', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Does not have this type of animal.' });
    }, 100);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);
```

The first test of this code will check if, when calling the `getListAnimals` function with `Dog` as a parameter, your return will be the two dogs in the `Animals` array.

```js
const Animals = [
  { name: 'Sleeper', age: 1, type: 'Dog' },
  { name: 'Snooze', age: 2, type: 'Dog' },
  { name: 'Sloth', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Does not have this type of animal.' });
    }, 100);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);

describe('When the type of animal exists', () => {
  test('Return the list of animals', () => {
    expect.assertions(2);
    return getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Sleeper');
      expect(listDogs[1].name).toEqual('Snooze');
    });
  });
});
```

Run the test and check that it is not giving any false positives. Change the `Sleeper` to `Agitated`. Saw? The test did not pass, so there are no false positives.

Now see the step by step how the test was done.

First we create the describe, where the tests will be run.

```js
describe ('When the animal type exists', () => {
   test ('Return the list of animals', () => {

   });
});
```

Now, add the function to be tested. As it returns a *Promise*, it is necessary to add `.then` to get its result.

```js
describe('When the animal type exists', () => {
  test('Return the list of animals', () => {
    getListAnimals('Dog').then(listDogs => {

    });
  });
});
```

Now add the tests and run them.


```js
describe('When the animal type exists', () => {
  test('Return the list of animals', () => {
    getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Sleeper');
      expect(listDogs[1].name).toEqual('Snooze');
    });
  });
});
```

Check for any false positives, change the Sleeper's name to Bob. Watch:

```js
describe('When the animal type exists', () => {
  test('Return the list of animals', () => {
    getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Bob');
      expect(listDogs[1].name).toEqual('Snooze');
    });
  });
});
```

The test continued to pass without finding the error (which was not expected), which indicates that it has a false positive.

To solve this problem, it is necessary to insert a `return` before the function and then add the expected amount of expectation using the `expect.assertions(2)` command.

```js
describe('When the animal type exists', () => {
  test('Return the list of animals', () => {
    expect.assertions(2);
    return getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Bob');
      expect(listDogs[1].name).toEqual('Snooze');
    });
  });
});
```

Now the test was able to identify the error, returning two errors. One of the errors is what Bob expected, but received the Sleeper. As Jest only received 1 assertion, but 2 were expected, the second error appears in our test. Now, undo the changes to make the test work again. Since this test was able to find the error, it is clear that the problem of false positive results was solved.
If you want, remove the `expect.assertions(2)` and see that the test passes!

```js
describe('When the animal type exists', () => {
  test('Return the list of animals', () => {
    return getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Sleeper');
      expect(listDogs[1].name).toEqual('Snooze');
    });
  });
});
```

This promise has two cases: when it works, `resolve` occurs and, in error, `reject` occurs. 

As the `resolve` has already been tested, only the error tests are missing.

The code below tests the error case exactly.

```js
describe('When the type of animal does not exist', () => {
  test('Return the list of animals', () => {
    return getListAnimals('Lion').catch(error =>
      expect(error).toEqual({ error: "It doesn't have that kind of animal." })
    );
  });
});
```

As the `Animals` array does not have any `Lion` (type inserted in the test), the `reject` will be triggered, which will return an object with an `error` key with the value `It does not have this type of animal.`. The difference between this test and the others is `.catch` in place of `.then`. The `.catch` works the result of the promise when a `reject` occurs; The `.then`, when `resolve` occurs.
<hr>
<br>

### Async and Await
To test the `Async/Await` code, the same code as before, but with minor changes, will be used. Watch:

```js
test('Testing with async/await', async () => {
  const listDogs = await getListAnimals('Dog');
  expect(listDogs[0].name).toEqual('Sleeper');
  expect(listDogs[1].name).toEqual('Snooze');
});
```

Realize that the difference between them is `async`. As there is a promise to be tested, it is necessary to use `await`, so that the test waits for the promise to finish and then execute the remaining test. The `listDogs` variable receives the return of the promise and runs the tests.
Below is the code for when the promise `reject` occurs. It is necessary to add the `try/catch` block.

```js
test('Testing with async/await, testing the reject', async () => {
  try {
    await getListAnimals('Lion');
  } catch (error) {
    expect(error).toEqual({ error: "It doesn't have that kind of animal." })
  }
});
```
<hr>
<br>

## Matcher .resolves and .rejects
In *Jest 20.0.0*, to further simplify testing, matchers `.resolves` and `.rejects` were added.

`.Resolves` expects the promise to be resolved. If the promise is rejected, the test will automatically fail.

`.Rejects` expects the promise to be rejected. If the promise is resolved, the test will automatically fail.

With promise:

```js
describe('Testing promise - findAnimalsByType', () => {
  describe('When the type of animal exists', () => {
    test('Retorne a lista de animais', () => {
      const listDogs = [
        { name: 'Sleeper', age: 1, type: 'Dog' },
        { name: 'Snooze', age: 2, type: 'Dog' },
      ]
      expect.assertions(1);
      return expect(getListAnimals('Dog')).resolves.toEqual(listDogs)
    });
  });

  describe('When the type of animal does not exist', () => {
    test('Retorns an error', () => {
      expect.assertions(1);
      return expect(getListAnimals('Lion')).rejects.toEqual({ error: 'Does not have this type of animal.' })
    });
  });
});
```

With Async/Await:

```js
describe('Testing Async/Await - findAnimalsByType', () => {
  describe('When the type of animal exists', () => {
    test('Retorne a lista de animais', async () => {
      const listDogs = [
        { name: 'Sleeper', age: 1, type: 'Dog' },
        { name: 'Snooze', age: 2, type: 'Dog' },
      ]
      expect.assertions(1);
      await expect(getListAnimals('Dog')).resolves.toEqual(listDogs)
    });
  });

  describe('When the type of animal does not exist', () => {
    test('Returns an error', () => {
      expect.assertions(1);
      await expect(getListAnimals('Lion')).rejects.toEqual({ error: 'Does not have this type of animal.' })
    });
  });
});
```
<hr>
<br>

## Setup and Teardown
Often while writing tests you have some setup work that needs to happen before tests run, and you have some finishing work that needs to happen after tests run. Jest provides helper functions to handle this.

For example, let's say that several tests interact with a database of cities. You have a method `initializeCityDatabase()` that must be called before each of these tests, and a method `clearCityDatabase()` that must be called after each of these tests. 
You can do this with:

```js
beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});
```

`beforeEach` and `afterEach` can handle asynchronous code in the same ways that [tests can handle asynchronous code](https://jestjs.io/docs/en/asynchronous) - they can either take a `done` parameter or `return` a promise. 

For example, if `initializeCityDatabase()` returned a promise that resolved when the database was initialized, we would want to return that promise:

```js
beforeEach(() => {
  return initializeCityDatabase();
});
```

#### ANOTHER EXAMPLE:
```js
// This beforeEach and this afterEach will be applied to all tests
beforeEach(() => {
  retrieveCitiesFromCache();
});

afterEach(() => {
  resetCities();
});

it("should have only 1 city after remove Belo Horizonte", () => {
  removeCity("Belo Horizonte");
  expect(getCities().length).toBe(1);
});

it("should have the city of Belo Horizonte", () => {
  expect(isCity("Belo Horizonte")).toBeTruthy();
});

describe('Requesting cities from api', () => {
  // This beforeEach and this afterEach will only be applied to tests
   // of the describe block
  beforeEach(() => {
    return requestCities();
  });
  
  afterEach(() => {
    resetCities();
  });

  it("should have 8 cities after request", () => {
    let cities = getCities();
    expect(cities.length).toBe(8);
  });

  it("should have the city of Belo Horizonte", () => {
    expect(isCity("Belo Horizonte")).toBeTruthy();
  });

  it("should have the city of Fortaleza", () => {
    expect(isCity("Fortaleza")).toBeTruthy();
  });
});
```

[Official Documentation do see more examples](https://jestjs.io/docs/en/setup-teardown)

<hr>
<br>

# Exercises

#### 1) Write a test that checks the callback call of an `uppercase` function, which turns the letters of a word into capital letters. Remember to be careful of false positives in asynchronous tests.

```js
const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};
```

**Base code for exercises 2 and 3:**
The following code simulates a call to the database to search for users. The result of this search is a Promise, which is used by the `getUserName` method.

```js
const users = {
: { name: 'Mark' },
: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};
```

<br>

#### 2) Using the Promise syntax, run a test that checks the result of the `getUserName` function for the case where the user is found, and also a test for the case where the user is not found.
> Tip: See the false data used in the database, available in the users variable, to know which IDs exist.

<br>

#### 3) Rewrite the test from the previous exercise, this time using async / await syntax.
> Tip: Use [try/catch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch) in case of an error.

<br>

#### 4) The code below searches a user's GitHub, according to the URL, their repositories, and returns a list as a result. Given the URL `'https://api.github.com/orgs/tryber/repos'`, do a test to verify that the `'sd-01-week4-5-project-todo-list'` and `'sd-01- week4-5-project-meme-generator'` are on that list.

```js
const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};
```

<br>

#### 5) For this exercise, try to guess the output of the `console.log` from the tests below without running them, and see if you have a good understanding of how `beforeEach` and `afterEach` work.

```js
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});
```

<br>

#### 6) In this exercise, you will create functions similar to the code below - the same one that was used as an example on the promise tests.

```js
const Animals = [
  { name: 'Sleeper', age: 1, type: 'Dog' },
  { name: 'Snooze', age: 2, type: 'Dog' },
  { name: 'Sloth', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      };

      return reject({ error: `It doesn't have that kind of animal.` });
    }, 100);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);
```
<br>

Use as a basis for the following exercises:

```js
const Animals = [
  { name: 'Sleeper', age: 1, type: 'Dog' },
  { name: 'Snooze', age: 2, type: 'Dog' },
  { name: 'Sloth', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  // Add the code here
);

const getAnimal = (name) => {
  // Add the code here
};
// ---------------------

describe('Testing promise - findAnimalByName', () => {
  describe('When there is an animal with the name sought', () => {
    test('Return the animal object', () => {
      expect.assertions(1);
      return getAnimal('Sleeper').then(animal => {
        expect(animal).toEqual({ name: 'Sleeper', age: 1, type: 'Dog' });
      });
    });
  });

  describe('When there is no animal with the name sought', () => {
    test('Returns an error', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('No animals with that name!');
      );
    });
  });
});
```

#### 7) Add a feature to search for the animal's name - create a function that should pass the test.

<br>

#### 8) Add a new feature to search for the age of the animals. The return should be an array of objects, but if you can't find any, return an error message. Write down both the function and your test.