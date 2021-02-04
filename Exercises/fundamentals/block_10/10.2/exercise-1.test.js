// 1) Write a test that checks the callback call of an `uppercase` function, which turns the letters of a word into capital letters. Remember to be careful of false positives in asynchronous tests.

const uppercase = require('./exercise-1');

test('if the callback turns the letters of a word into capital letters', (done) => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  })
})