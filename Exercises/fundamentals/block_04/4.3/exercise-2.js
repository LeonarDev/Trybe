// 2. do the same as before, but print a right triangle with 5 base asterisks.

let number = 5;
let star = '*';

for (let index = 1; index <= number; index += 1) {
  console.log(star.repeat(index));
}
