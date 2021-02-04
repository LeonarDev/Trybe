// encode-decode.js
const encode = string => {
  let encodedString = '';
  for (let index in string) {
    if (string[index] === 'a') {
      encodedString += '1';
    } else if (string[index] === 'e') {
      encodedString += '2';
    } else if (string[index] === 'i') {
      encodedString += '3';
    } else if (string[index] === 'o') {
      encodedString += '4';
    } else if (string[index] === 'u') {
      encodedString += '5';
    } else {
      encodedString += string[index];
    }
  }
  return encodedString;
}
const decode = string => {
  let decodedString = '';
  for (let index in string) {
    if (string[index] === '1') {
      decodedString += 'a';
    } else if (string[index] === '2') {
      decodedString += 'e';
    } else if (string[index] === '3') {
      decodedString += 'i';
    } else if (string[index] === '4') {
      decodedString += 'o';
    } else if (string[index] === '5') {
      decodedString += 'u';
    } else {
      decodedString += string[index];
    }
  }
  return decodedString;
}

const functions = { encode, decode };

module.exports = functions;