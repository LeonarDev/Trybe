// Bonus 3. You will now create a new array from the numbers array, without losing it. 
// Each value of the new array must be equal to the corresponding value of the previous array multiplied by the next. For example: the first value of the new array should be 45, as it is the multiplication of 5 (corresponding value) and 9 (next value). 
// If there is no next value, the multiplication must be done by 2. Do this using the for and the push method.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i + 1]) {
    newArray.push(numbers[i] * numbers[i + 1]);
  } else {
    newArray.push(numbers[i] * 2);
  }
}

console.log(newArray);