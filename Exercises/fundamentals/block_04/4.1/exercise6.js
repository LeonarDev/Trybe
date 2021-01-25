// 6. Write a program that is named after a chess piece and returns the movements it makes.
   // As a challenge, make the program work both if you receive the name of a part with uppercase letters and with lowercase letters, without increasing the number of conditionals.
   // As a hint, you can search for a function that makes a string have all lowercase letters.
   // If the part passed is invalid, the program should return an error message.
   // Example: bishop -> diagonals

let chessPiece = "quEEn";

if (chessPiece.toLocaleLowerCase() == "bishop") {
  console.log("bishop -> moves any number of vacant squares diagonally in a straight line");
} else if (chessPiece.toLocaleLowerCase() == "pawn") {
  console.log("pawn -> forward exactly one square, or optionally, two squares when on its starting square");
} else if (chessPiece.toLocaleLowerCase() == "rook") {
  console.log("rook -> forwards, backwards, left, or right in a straight line");
} else if (chessPiece.toLocaleLowerCase() == "knight") {
  console.log("knight -> diagonal from one corner of any 2×3 rectangle, making a 'L'");
} else if (chessPiece.toLocaleLowerCase() == "queen") {
  console.log("queen -> any number of vacant squares in any direction: forwards, backwards, left, right, or diagonally, in a straight line");
} else if (chessPiece.toLocaleLowerCase() == "king") {
  console.log("king -> moves exactly one vacant square in any direction: forwards, backwards, left, right, or diagonally; however, it cannot move to a square that is under attack by an opponent");
} else {
  console.log("Enter a valid chess piece");
}