// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let arrayCreated = [];

for (let index = 1; index <= 25; index += 1) {
  arrayCreated.push(index);
}

console.log(arrayCreated.join(', '));
console.log('');

for (let index = 0; index < arrayCreated.length; index += 1) {
  console.log(arrayCreated[index],'dividido por 2 =', (arrayCreated[index]/2));
}
