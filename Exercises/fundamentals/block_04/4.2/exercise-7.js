// 7. Using for, find out what is the lowest value in the array and print it;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowerValue = 101;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < lowerValue) {
    lowerValue = numbers[index];
  }
}

console.log('The lowest value is ',lowerValue);
