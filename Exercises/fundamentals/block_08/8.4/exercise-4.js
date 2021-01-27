// 4) Write a `filterPeople` function that, given a list of people, returns all Australian people who were born in the 20th century:

const assert = require('assert');
const { monitorEventLoopDelay } = require('perf_hooks');

const people = [
  {
    name: "Nicole",
    bornIn: 1992,
    nationality: "Australian"
  },
  {
    name: "Harry",
    bornIn: 2008,
    nationality: "Australian"
  },
  {
    name: "Toby",
    bornIn: 1901,
    nationality: "Australian"
  },
  {
    name: "Frida",
    bornIn: 1960,
    nationality: "Dannish"
  },
  {
    name: "Fernando",
    bornIn: 2001,
    nationality: "Brazilian"
  }
];

// write filterPeople below
const bornIn20Century = (year) => year >= 1901 && year <= 2000;

const isAustralian = (nationality) => nationality === "Australian";

const filterPeople = (people) => {
  return people.filter(({ bornIn, nationality }) => bornIn20Century(bornIn) && isAustralian(nationality))
};

const filteredPeople = filterPeople(people);

assert.deepStrictEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" });
assert.deepStrictEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" });
