// async and await

// Async is a hand on the wheel. This functionality turns any function into a promise. 

// To start using it, just place async before defining the function. 

// Now just turn what is resolved into return and what is reject into throw and BOOM! Your async promise is ready.

const fetch = require('node-fetch');

async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => r.value);
  }
  throw new Error('endpoint não existe');
}

function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");

// Await can only be used within a function with async and it does exactly what it says, it makes the function wait for a response to continue its execution. Let's refactor sendJokeToFriend:

const fetch = require('node-fetch');

async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => (r.value));
  }
  throw new Error('endpoint não existe');
}

async function sendJokeToFriend(name) {
  const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Hi ${name}, listen to this: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");

// Ready! Using await, sendJokeToFriend waits for verifiedFetch to finish its execution (until the last .then() or .catch()) and only then run console.log(). So again, the function is much more concise and easier to read.