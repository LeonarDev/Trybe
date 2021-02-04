const encode = (string) => {
  const splitString = string.split('');

  const encodeString = splitString.map((character, index) => {
    if (character === 'a') return splitString[index] = 1;
    if (character === 'e') return splitString[index] = 2;
    if (character === 'i') return splitString[index] = 3;
    if (character === 'o') return splitString[index] = 4;
    if (character === 'u') return splitString[index] = 5;
    else return character;
  });
  return encodeString.join('');
};

const decode = (string) => {
  const splitString = string.split('');

  const decodeString = splitString.map((number, index) => {
    if (number === '1') return splitString[index] = 'a';
    if (number === '2') return splitString[index] = 'e';
    if (number === '3') return splitString[index] = 'i';
    if (number === '4') return splitString[index] = 'o';
    if (number === '5') return splitString[index] = 'u';
    else return number;
  });
  return decodeString.join('');
};

const functions = { encode, decode };

module.exports = functions;