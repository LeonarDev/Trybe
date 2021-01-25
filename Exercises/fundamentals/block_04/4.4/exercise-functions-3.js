// 3. Create a function that receives an array of integers and returns the index of the lowest value.
// Test array: [2, 4, 6, 7, 10, 0, -3]; .
// Expected value on function return: 6.

function indexOfTheLowestNumber(arrayOfNumbers) {
  let lowestIndex = 0;

  for (let index in arrayOfNumbers) {
    if (arrayOfNumbers[lowestIndex] > arrayOfNumbers[index]) {
      lowestIndex = index;
    }
  }
  return lowestIndex;
}

console.log(indexOfTheLowestNumber([2, 4, 6, 7, 10, 0, -3]));