// 6. Create a function that receives an integer N and returns the sum of all numbers from 1 to N.
// Test value: N = 5.
// Expected value in the function return: 1 + 2 + 3 + 4 + 5 = 15.

function summation(number) {
  let total = 0;

  for (let index = 1; index <= number; index += 1) {
    total = total + index
  }
  return total;
}

console.log(summation(5));
