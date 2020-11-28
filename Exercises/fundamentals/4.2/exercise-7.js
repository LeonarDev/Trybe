// Utilizando for, descubra qual o menor valor contido no array e imprima-o

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowerValue = 101;

for(let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < lowerValue) {
    lowerValue = numbers[index];
  }
}

console.log('O menor valor é',lowerValue);