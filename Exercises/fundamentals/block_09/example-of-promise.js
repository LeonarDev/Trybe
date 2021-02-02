// To simulate a situation of success and error, we will use Math.random () to draw a value from 0 to 10. If the value is between 0 and 5 (with 5 included), it will be a failure, if the value is between 6 and 10, it will be a success. Our program would look like this:

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number <= 5) {
    return reject(console.log(`What a failure =( Our number was ${number}`));
  }
  resolve(console.log(`What a success =) our number was ${number}`));
});

// Run the program a few times to see what happens.

// When the program is successful, your output will appear normally. When he is unsuccessful, he throws an error! This is the main difference between resolving and rejecting, exactly what we wanted to demonstrate. In the next section we will see how to deal with this error.

// Also note how adsorbed or return before rejecting to interrupt a function's execution. Thus the use of else becomes unnecessary.

// Ok, we understand how Promises work, but how are they better than callbacks to manage the execution flow? We will now see how to manage the asynchronous flow with 2 more "superpowers" of the promises: .then() and .catch()!

// ------------------------------------------

// There are 2 main tools that we can use to manage the asynchronous flow with promises: .then() and .catch(). Let's start by talking about .then(). For this, let's refactor our promise:

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number <= 5) {
    return reject(console.log(`What a failure =( Our number was ${number}`));
  }
  resolve(number);
})
.then(number => `What a success =) Our number was ${number}`)
.then(msg => console.log(msg));

// Here we demonstrate 2 important things about the .then () syntax:

//    1) We pass a function as an argument. This function also takes 1 argument which is the return of the resolve from our promise.

//    2) The .then() is used "in a chain", a concept called chaining. Thus, we can chain several .then(), and the argument of the internal function of one will be the return of the previous one. The most important part is that .then() waits for the promise (or the previous .then()) to be completed to start its execution. Thus, our flow is controlled!

// Let's see what happens in the code above. The promise is executed and, after its execution, if the number is somewhere between 5 and 10, the resolver returns the number that is passed to the first .then() as number. In turn, it returns the phrase That success =) our number was $ {number} which is passed as an argument to the second .then(), which uses it to "log in" to the console.

// Okay, but the error keeps happening. What can we do about it? Now .catch() comes in! Let's add it to the code:

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random()* 11);

  if (number <= 5) {
    return reject(number);
  }
  resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg))
.catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));

// If we run the code above, we will see that the previous error has disappeared, as it has now been addressed! 

// Just as .then() receives the return from resolve, .catch() receives the return from the reject, which is passed to it as an argument to its internal function. So, when the promise returns a reject, it skips all the .then() and executes the first .catch() it finds. 

// And there's more! The .catch() also "catches" any errors that happen within any .then() before it. For this reason it is generally used at the end.

// And so, our first promise is ready!