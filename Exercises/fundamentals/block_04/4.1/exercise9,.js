// 9. Write a program that defines three numbers in variables at the beginning and returns true if at least one of the three is odd. Otherwise, it must return false.

let a = 1;
let b = 3;
let c = 5;

let isOdd = false;

if ((a % 2 != 0 || b % 2 != 0 || c % 2 != 0)) {
  isOdd = true;
};
console.log(isOdd);