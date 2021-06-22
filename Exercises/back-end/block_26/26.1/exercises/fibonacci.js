const rs = require('readline-sync');

console.log("Sequência de Fibonacci");
const termo = rs.questionInt('Informe o número que deseja visualizar: ');

let ultimo = 0;
let penultimo = 0;
let fibonacci = [];

if (termo > 0 && termo <= 2) {
  termo -= 1;
  sequencia.push(termo);
} else {
  for(; termo > 0; termo--) {
    numero = ultimo + penultimo;
    sequencia.push(termo);
    //penultimo = ultimo;
    //ultimo = numero;
  }
}

console.log(termo);
console.log(fibonacci);

/*
Fn = Fn-1 + Fn-2

Fibonacci (0) = 0,
Fibonacci (1) = 1,
Fibonacci (2) = Fibonacci (0) + Fibonacci (1) = 1,
Fibonacci (3) = Fibonacci (1) + Fibonacci (2) = 2,
Fibonacci (4) = Fibonacci (2) + Fibonacci (3) = 3,
Fibonacci (5) = Fibonacci (3) + Fibonacci (4) = 5,
Fibonacci (6) = Fibonacci (4) + Fibonacci (5) = 8,
*/