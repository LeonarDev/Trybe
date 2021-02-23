const uppercase = require('./exercise-1');

test('if transforms a lowercase string to uppercase', (done) => {
  uppercase('test', (string) => {
    expect(string).toBe('TEST');
    done();
  })
})
