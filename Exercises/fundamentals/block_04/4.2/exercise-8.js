// 8. Using for, create an array ranging from 1 to 25 and print the result;

let arrayCreated = [];

for (let index = 1; index <= 25; index += 1) {
  arrayCreated.push(index);
}

console.log(arrayCreated.join(', '));
