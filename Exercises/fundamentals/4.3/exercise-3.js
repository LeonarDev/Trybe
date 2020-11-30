// 3- Agora inverta o lado do triângulo.

let n = 5;
let star = '*';
let space = ' ';

for (let index = 1; index <= n; index += 1) {
  console.log(space.repeat(n-index)+(star.repeat(index)));
}
