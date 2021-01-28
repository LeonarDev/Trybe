const assert = require('assert');

const singer = {
  name: 'Milton Nascimento',
  birthplace: 'Rio de Janeiro',
  city: 'Belo Horizonte',
  albuns: ['Minas', 'Geraes', 'Clube da Esquina', 'Canção da America', 'Três Pontas', 'Nascimento', 'Caçador de Mim']
}

const { name: singerName, birthplace, city, albuns } = singer;

console.log(singerName);

const [ first, second, ...otherAlbums ] = albuns;

console.log(first, second);
console.log(otherAlbums);


// TESTS
const expectedValue = 'The singer Milton Nascimento was born in Rio de Janeiro and lives in Belo Horizonte. He has 7 albums.'
const actualValue = `The singer ${singerName} was born ${birthplace} and lives in ${city}. He has ${albuns.length} albums.`;

assert.strictEqual(expectedValue, actualValue);