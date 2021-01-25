// 3. Now invert the side of the triangle.

let number = 5;
let star = '*';
let space = ' ';

for (let index = 1; index <= number; index += 1) {
  console.log(space.repeat(number-index)+(star.repeat(index)));
}
