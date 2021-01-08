// 4- Depois, faça uma pirâmide com n asteriscos de base:

let n = 6
let star = '*';
let space = ' ';

for (let index = 1; index <= n; index += 1) {
    console.log(star.repeat(n-(n-index)));
}