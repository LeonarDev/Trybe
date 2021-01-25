// (Difficult) Make a program that receives a string in Roman numerals and returns the number that the string represents.

// Attention! This exercise has already appeared in the selection process of a large multinational!

// Tips:
// - A string is an array of characters, so each element of the array is a letter.
// - The value of each Roman numeral is:

// | I  | 1    |
// | -- | ---- |
// | IV | 4    |
// | V  | 5    |
// | IX | 9    |
// | X  | 10   |
// | XL | 40   |
// | L  | 50   |
// | XC | 90   |
// | C  | 100  |
// | CD | 400  |
// | D  | 500  |
// | CM | 900  |
// | M  | 1000 |

// How about creating an object that associates each letter with a numeral for easy reference?

// Attention! When you have a small number to the right of a large number, they must be added together. Example: XI = 10 + 1 = 11. However, if the small number is to the left of a number greater than it, it must be subtracted. Example: IX = 10 - 1 = 9.

function Romanos(roma) {
  let romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let arrayNumbers = [];
  let result = 0;

  for (let indice in roma) {
    arrayNumbers[indice] = romanos[roma[indice]];
  }

  for (let indice in arrayNumbers) {
    if (arrayNumbers[indice] < arrayNumbers[indice + 1]) {
      arrayNumbers[indice + 1] = arrayNumbers[indice + 1] - arrayNumbers[indice];
    } else {
      result += arrayNumbers[indice];
    }
  }

  return result;
}

console.log(Romanos(MMXVIII));