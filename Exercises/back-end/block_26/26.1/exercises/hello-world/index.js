const rs = require('readline-sync');

//console.log('Hello, world!');

const name = rs.question('Qual seu nome? ');
const age = rs.questionInt('Qual sua idade? ');

console.log(`Olá, ${name}! Sua idade é de ${age} anos de idade!`);
