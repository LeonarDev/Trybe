// #### 2.1) Test if `encode` and `decode` are functions.

// #### 2.2) For the `encode` function, teste if the vowels a, e, i, o, u are converted to 1, 2, 3, 4 and 5, respectively;

// #### 2.3) For the `decode` function test if the numbers 1, 2, 3, 4 and 5 are converted to the vowels a, e, i, o, u, respectively;

// #### 2.4) Test if the other letters/numbers are not converted for each case;

// #### 2.5) Test if the `string` that is returned by the functions has the same number of characters as the `string` passed as a parameter.

const { encode, decode } = require('./exercise-2');

describe('Exercises - Part 2', () => {
test('if `encode` and `decode` are functions', () => {
    expect(typeof encode && typeof decode).toEqual('function');
  });
test('in `encode` if a, e, i, o, u, are converted to 1, 2, 3, 4, 5, respectively', () => {
    expect(encode('a')).toBe('1') &&
          (encode('b')).toBe('2') &&
          (encode('c')).toBe('3') &&
          (encode('d')).toBe('4') &&
          (encode('e')).toBe('5');
  })
test('in `decode` if 1, 2, 3, 4, 5 are converted to a, e, i, o, u, respectively', () => {
    expect(decode('1')).toBe('a') &&
          (decode('2')).toBe('e') &&
          (decode('3')).toBe('i') &&
          (decode('4')).toBe('o') &&
          (decode('5')).toBe('u');
  });
test('if the other letters/numbers are not converted for each case', () => {
    expect(encode('mensuration')).toEqual('m2ns5r1t34n') &&
          (decode('1d2c3t45n')).not.toEqual('education');
  });
test('if the `string` that is returned by the functions has the same number of characters as the `string` passed as a parameter', () => {
    expect(encode('string').length).toEqual(6) &&
          (decode('12345').length).toEqual(5);
  })
})