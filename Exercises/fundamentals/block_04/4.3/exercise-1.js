// 1. Make a program that, given any value n, whether n > 1, print on the screen a square made of side asterisks of size n.

let number = 5;
let star = '*'

for (let index = 0; index < number; index += 1) {
  console.log(star.repeat(number));
}
