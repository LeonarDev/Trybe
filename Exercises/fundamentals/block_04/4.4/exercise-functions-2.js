// 2. Create a function that receives an array of integers and returns the index of the highest value.
// Test array: [2, 3, 6, 7, 10, 1]; .
// Expected value without return of function: 4.

function indexOfTheBiggestNumber(arrayOfNumbers) {
  let biggestIndex = 0;

  for (let index in arrayOfNumbers) {
    if (arrayOfNumbers[biggestIndex] < arrayOfNumbers[index]) {
      biggestIndex = index;
    }
  }
  return biggestIndex;
}

console.log(indexOfTheBiggestNumber([2, 3, 6, 7, 10, 1]));
