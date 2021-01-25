// 7. Write a program that converts a grade given in percentage (from 0 to 100) into concepts from A to F. Follow these rules:
// Percentage >= 90 -> A
// Percentage >= 80 -> B
// Percentage >= 70 -> C
// Percentage >= 60 -> D
// Percentage >= 50 -> E
// Percentage  < 50 -> F
// The program should return an error message and end if the note is passed below 0 or above 100.

let grade = 76;

if (grade < 0 || grade > 100) {
  console.log("Error, incorrect note!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}