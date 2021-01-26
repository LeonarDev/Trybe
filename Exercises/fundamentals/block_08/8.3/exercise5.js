const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// 5. Given the array of names, return the number of times that the letter 'A' appears uppercase or lowercase.
function containsA() {
  return names.reduce((previousValue, currentValue) => 
    previousValue + currentValue.split('').reduce((acumulator, currentSplited) => {
      if (currentSplited === 'a' || currentSplited === 'A') return acumulator + 1;
      return acumulator;
    }, 0), 0);
}

assert.deepStrictEqual(containsA(), 20);
