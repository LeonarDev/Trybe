const rs = require('readline-sync');

let fatorial = 1;
const numero = rs.questionInt('Informe um número para saber seu fatorial: ');

parseInt(numero);

for(let index = 0; index < numero; index++) {
  fatorial *= (numero - index);
}

console.log(`O fatorial de ${numero} é ${fatorial}.`);

/*
FATORIAL:
Fat5: 5-0 * 5-1 * 5-2 * 5-3 * 5-4
Fat5:  5  *  4  *  3  *  2  *  1
Fat5:             120
*/
