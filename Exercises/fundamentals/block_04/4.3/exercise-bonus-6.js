// Make a program that says whether a number defined in a variable is prime or not.
// A prime number is a number that is only divisible by 1 and itself, that is, dividing it with any other numbers gives a remainder other than zero.

let divisors;
let numberToCheck = 25;

for (let number = 2; number < numberToCheck && divisors !== 1; number += 1) {
  divisors = 0;
  if (numberToCheck % number == 0) divisors += 1;
}

if (divisors === 0) console.log(numberToCheck + ' is prime');
else console.log(numberToCheck + ' is not prime');