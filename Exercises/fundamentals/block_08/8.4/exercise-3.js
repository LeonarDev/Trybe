// 3) Write the `personLikes` function, which given a parameter object that represents a person, returns all that person's tastes, as shown below:

const assert = require('assert');

const alex = {
  name: "Alex",
  age: 26,
  likes: ["fly fishing"],
  nationality: "Australian"
};

const gunnar = {
  name: "Gunnar",
  age: 30,
  likes: ["hiking", "scuba diving", "taking pictures"],
  nationality: "Icelandic"
};

// complete the function signature below
const personLikes = ({ name, age, likes }) => `${name} is ${age} years old and likes ${likes.join(", ")}.`;


assert.strictEqual(personLikes(alex), "Alex is 26 years old and likes fly fishing.");
assert.strictEqual(personLikes(gunnar), "Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.");
