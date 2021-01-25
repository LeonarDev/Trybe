// 5. Create a function that receives an array of integers and returns the most repeatable integer.
// Test array: [2, 3, 2, 5, 8, 2, 3]; .
// Expected value on function return: 2

function theMostRepeatableInteger(arrayOfNumbers) {
  let repeatedCount = 0;
  let numberCount = 0;
  let indexRepeatedNumber = 0;
  for (let index in arrayOfNumbers) {
    let checkNumber = arrayOfNumbers[index];
    for (let index2 in arrayOfNumbers) {
      if (checkNumber === arrayOfNumbers[index2]) {
        numberCount++;
      }
    }
    if (numberCount > repeatedCount) {
      repeatedCount = numberCount;
      indexRepeatedNumber = index;
    }
    numberCount = 0;
  }
  return arrayOfNumbers[indexRepeatedNumber];
}

console.log(theMostRepeatableInteger([2, 3, 2, 5, 8, 2, 3]));