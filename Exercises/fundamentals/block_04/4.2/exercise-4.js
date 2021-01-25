// 4. With the same code as in the previous exercise, if the final value is greater than 20, print the message: "value greater than 20". If not, print the message: "value less than or equal to 20"

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let arithmeticAverage = sum/numbers.length;


if (arithmeticAverage > 20) {
  console.log('Value greater than 20');
} else {
  console.log('Value less than or equal to 20');
}
