// 4. Make a pyramid with n basic asterisks

let number = 5;
let lineColumn;
let lineInput = '';
let symbol = '*';

let midOfMatrix = (number + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight= midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (lineColumn = 1; lineColumn <= number; lineColumn += 1) {
    if (lineColumn > controlRight && lineColumn < controlLeft) {
      lineInput = lineInput + symbol;
    } else {
      lineInput = lineInput + ' ';
    }
  }
  console.log(lineInput);
  lineInput = '';
  controlRight -= 1;
  controlLeft += 1;
};