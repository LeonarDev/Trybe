// 4. Create a function that receives an array of names and returns the name with the most characters.
// Test array: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Expected value on function return: Fernanda.

function nameWithTheMostCharacters(arrayOfNames) {
  let biggestName = '';

  for (let index in arrayOfNames) {
    if (arrayOfNames[index].length > biggestName.length) {
      biggestName = arrayOfNames[index];
    }
  }
  return biggestName
}

console.log(nameWithTheMostCharacters(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
