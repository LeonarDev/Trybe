// 8. Write a program that defines three numbers in variables at the beginning and returns true if at least one of the three is even. Otherwise, it must return false.

let a = 1;
let b = 3;
let c = 5;

let isEven = false;

if ((a % 2 == 0 || b % 2 == 0 || c % 2 == 0)) {
  isEven = true;
};
console.log(isEven);