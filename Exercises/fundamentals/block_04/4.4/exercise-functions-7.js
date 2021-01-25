// 7. Create a function that receives a word string, and another, an ending string. Check that the ending string is the end of the word string. Consider that the ending string will always be less than the word string.
// Test value: "trybe" and "be"
// Expected value on function return: true

// verifiesEndWord ("trybe", "be");
// Expected return: true

// verifyendOfTheWord ("joaofernando", "fernan");
// Expected return: false

function checkEndOfTheWord(word, endOfTheWord) {
  let wordInverted = word.split("").reverse().join("");
  let endOfTheWordInverted = endOfTheWord.split("").reverse().join("");

  for (let index = 0; index < endOfTheWordInverted.length; index += 1) {
    if (wordInverted[index] != endOfTheWordInverted[index]) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(checkEndOfTheWord("trybe", "be")); //true
console.log(checkEndOfTheWord("joaofernando", "fernan")); //false
