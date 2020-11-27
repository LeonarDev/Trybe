// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
  // Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
  // Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
  // Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
  // Exemplo: bishop -> diagonals

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