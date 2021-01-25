// 9. Using the array created in the previous exercise, print the result of dividing each of the elements by 2.

let arrayCreated = [];

for (let index = 1; index <= 25; index += 1) {
  arrayCreated.push(index);
}

console.log(arrayCreated.join(', '));
console.log('');

for (let index = 0; index < arrayCreated.length; index += 1) {
  console.log(arrayCreated[index],'divided by 2 =', (arrayCreated[index]/2));
}
