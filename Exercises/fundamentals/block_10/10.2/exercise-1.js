// Write a test that checks the callback call of an uppercase function, which turns the letters of a word into capital letters. Remember to be careful of false positives in asynchronous tests.

const uppercase = (string, callback) => {
  callback(string.toUpperCase());
};

module.exports = uppercase;
