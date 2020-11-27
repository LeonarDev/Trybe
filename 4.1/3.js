// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 2, b = 3, c = 3;

if (a > b && a > c) {
  console.log(a + ' é o maior número');
} else if (b > a && b > c) {
  console.log(b + ' é o maior número');
} else if (c > a && c > b) {
  console.log(c + ' é o maior número');
} else {
  console.log('números iguais');
}