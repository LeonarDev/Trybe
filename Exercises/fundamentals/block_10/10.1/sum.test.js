const sum = require('./sum');

describe('Exercises - Part I', () => {
  test('that the sum (a, b) function returns the sum of parameter a and b', () => {
    expect(sum(2, 3)).toEqual(5);
  });
  test('if the sum return (4, 5) is 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  test('if the return of sum (0, 0) is 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
  test('if the sum function throws an error when the parameters are 4 and "5" (string 5)', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });
  test('if the error message is "parameters must be numbers" when making the sum call (4, "5")', () => {
    expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'))
  })
});