// Let's create a promise that fetchs only for a specific endpoint. For this, we will use as an "endpoint" a url that returns praise about Chuck Norris (praise, because nobody makes jokes about Chuck Norris). https://api.chucknorris.io/jokes/random?category=dev

// Before going to the code, as we will run our code directly in Node and not in the browser, we need to install node-fetch. Run the command below if you don't already have package.json:

// npm init -y

// then, install node-fetch:
// npm i node-fetch

// Now see the code below:

const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}

// Let's take a quick look at the code. First we create the verifiedFetch function and pass the url of our endpoint. 

// Then we return a promise, transforming our function into an asynchronous function. 

// Now, within the promise we do a check. If the endpoint is the right one, we use fetch to make a call to the endpoint, we transform the response into a json using the .json() method, and to finish we use resolve to return our answer. 

// If the url is not the right one, we raise an error. Notice here that we use the 'new Error' constructor to raise an error. Using this constructor inside the reject is an important good practice and we will use it from now on.

const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}

function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");