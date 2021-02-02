# Exercises

### Exercise 1)
#### First, see the [API manual on the icanhazdadjoke.com website](https://icanhazdadjoke.com/api). He explains how to make requests for joke service. For now, just look around; now let's understand how this API works:
- To begin, let's make a request via the browser. Visit the icanhazdadjoke.com website, and notice that it returns an HTML page with a random joke.
    - Then, in the terminal, we will make the request: `curl -H "Accept: text/html" "https://icanhazdadjoke.com/"`. Realize that the return is HTML identical to a request via browser with a random joke.
    -For the next request, we will use the command: `curl -H "Accept: text/plain" "https://icanhazdadjoke.com/"`. See that now we just received the random joke in text format.
    -Finally, make the request: `curl -H "Accept: application/json" "https://icanhazdadjoke.com/"`. The API now returns an object in **JSON format**. 
    - Note that, depending on what we pass in the `Accept:` key in the header, defined by `-H` in the command, the service returns a different answer.

Use the following HTML and js as a base:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Best jokes ever</title>
  <script src="apiScript.js" ></script>
  </head>
  <body>
    <h1>Get ready for a great joke!</h1>
    <h2 id="jokeContainer"></h2>
  </body>
</html>
```

```js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Code here
};

window.onload = () => fetchJoke();
```

- Now let's try to make requests to the API using `fetch`. This function takes two parameters.
    1. The address to which the request will be made, that is, the service url.
    2. An object containing the requisition specifications. For this API, we will assign to this object the keys `method:` and `headers:`

```js
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

fetch(API_URL, myObject);
```

The second parameter `myObject` defines the type of request `method: 'GET'` and the response format `headers: {'Accept': 'application/json'}`, as seen in requests via `curl`.
- The `fetch` function is a **Promise** and, as such, depending on its developments, we can chain procedures to be done, using the `.then` (in case of success) and `.catch` (in case of failure) clauses. 
- The `fetch` request returns a **Response** object. 

Using `.then`, check the response structure using a `console.log` in the response returned by `fetch`.

```js
fetch(API_URL, myObject)
  .then(response => console.log(response));
```

Did you see the answer? We even received a response from the service, but how can I get the joke text out of there 🤔?

For that, we use the `.json()` method in the API response. This method converts the content of the Response `body` and returns another Promise, which, when successful, returns a JSON containing the joke information.

From `fetch`, replace the previous `console.log()` with the `.json()` method and print the request data.

```js
fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => console.log(data));
```

We received an object, right? From there, make the joke appear in the DOM of your page!

<hr>
<br>

### Exercise 2)
#### Now, take a step back: let's do a Promise step by step. 
- First, instantiate a Promise. Inside it, you must produce an array with ten random numbers from 1 to 50 and square them all. 
    - If the sum of all these elements is less than 8000, the promise must be resolved. 
    - Otherwise, it must be rejected. 
    - Add a `.then` and a `.catch` to Promise with anything inside just to make the code work.

Try using Higher Order Functions! Remember that both are assigned functions as a parameter!

<hr>
<br>

### Exercise 3)
#### When the promise is successfully resolved, return the result of dividing that number by 2, 3, 5 and 10 in an array.

<hr>
<br>

### Exercise 4)
#### When Promise is rejected, print, via `console.log`, the phrase "It's more than eight thousand! That promise must be broken!"

<hr>
<br>

### Exercise 5)
#### When the Promise is successful, chain a second Promise into it that adds the elements of the array.

<hr>
<br>

### Exercise bonus)
#### - Use only Higher Order Functions to perform operations with the array;

#### - Refactor Promise to use only `async` and `await`.
