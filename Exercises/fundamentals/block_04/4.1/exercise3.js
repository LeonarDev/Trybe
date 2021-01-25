// 3. Make a program that returns the largest of three numbers. Define three variables at the beginning of the program with the values to be compared.

let a = 2, b = 3, c = 3;

if (a > b && a > c) {
   console.log (a + ' is the largest number');
} else if (b > a && b > c) {
   console.log (b + ' is the largest number');
} else if (c > a && c > b) {
   console.log (c + ' is the largest number');
} else {
   console.log ('equal numbers');
}