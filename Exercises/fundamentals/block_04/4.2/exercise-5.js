// 5. Using for, find out what is the highest value contained in the array and print it

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let highestValue = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > highestValue) {
    highestValue = numbers[index];
  }
}

console.log('The highest value of the array is ', highestValue);
