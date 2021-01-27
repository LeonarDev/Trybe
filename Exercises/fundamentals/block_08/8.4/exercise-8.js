// 8) Write a `greet` function that, given a person's name, returns a greeting message:

const assert = require('assert');

// write greet below
const greet = (name, greet = 'Hi') => `${greet} ${name}`; 

assert.strictEqual(greet("John"), "Hi John");
assert.strictEqual(greet("John", "Good morning"), "Good morning John");
assert.strictEqual(greet("Isabela", "Hi"), "Hi Isabela");
