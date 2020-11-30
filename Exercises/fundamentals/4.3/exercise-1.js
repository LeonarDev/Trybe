// 1- Ffaça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 5;
let star = '*'

for (let index = 0; index < n; index += 1) {
  console.log(star.repeat(n));
}
