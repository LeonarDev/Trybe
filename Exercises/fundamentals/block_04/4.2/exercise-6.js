// 6. Find out how many odd values are in the array and print the result. If none exist, print the message: "no odd values found";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let count = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 != 0) {
    count += 1;
  }
}

if (count > 0) {
  console.log('Exist ', count, ' odd values.');
} else {
  console.log('No odd values found');
}
