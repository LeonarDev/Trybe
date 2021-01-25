// 5. Make a pyramid with n base asterisks, which is empty in the middle;

let number = 7;
let middle = (number + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let column = 1; column <= number; column += 1) {
    if (column == controlLeft || column == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}