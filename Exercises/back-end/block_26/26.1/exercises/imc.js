const rs = require('readline-sync');

//console.log('Hello, world!');

const name = rs.question('Qual é seu nome? ');
//const age = rs.questionInt('Qual é sua idade? ');
const heigth = rs.questionFloat('Qual é sua altura? (em metros) ');
const weigth = rs.questionFloat('Qual é seu peso? (em quilos) ');

let imc = weigth / (heigth*heigth);
let situation;

if (imc < 18.5) {
  situation = 'Abaixo do peso (magreza)';
} else if (imc >= 18.5 && imc < 25) {
  situation = 'Peso normal';
} else if (imc >= 25 && imc < 30) {
  situation = 'Acima do peso (sobrepeso)';
} else if (imc >= 30 && imc < 35) {
  situation = 'Obesidade grau I';
} else if (imc >= 35 && imc < 40) {
  situation = 'Obesidade grau II';
} else if (imc >= 40) {
  situation = 'Obesidade grau III e IV';
} else {
  situation = 'Valor inválido. Favor utilizar peso em quilos e altura em metros';
}

console.log(`Olá, ${name}! Seu IMC é de ${imc.toFixed(1)} e sua situação é '${situation}'`);
