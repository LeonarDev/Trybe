// 11. A person with a formal contract in Brazil has the INSS and the IR deducted from their gross salary. Make a program that, given a gross salary, calculates the net salary to be received by her.

// The notation for a salary of R$ 1500.10, for example, should be 1500.10. For tax ranges, use the following references:

// INSS
// - Gross salary up to R$ 1,556.94: 8% rate
// - Gross salary from R$ 1,556.95 to R$ 2,594.92: 9% rate
// - Gross salary from R$ 2,594.93 to R$ 5,189.82: 11% rate
// - Gross salary above R$ 5,189.82: maximum rate of R$ 570.88

// GO
// - Up to R$ 1,903.98: exempt from income tax
// - From R$ 1,903.99 to 2,826.65: rate of 7.5% and installment of R$ 142.80 to be deducted from tax
// - From R$ 2,826.66 to R$ 3,751.05: rate of 15% and installment of R$ 354.80 to be deducted from tax
// - From R$ 3,751.06 to R$ 4,664.68: rate of 22.5% and installment of R$ 636.13 to be deducted from tax
// - Above R$ 4,664.68: rate of 27.5% and installment of R$ 869.36 to be deducted from tax.


let aliquotINSS;
let aliquotIR;
let grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = baseSalary * 0.075 - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = baseSalary * 0.15 - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = baseSalary * 0.225 - 636.13;
} else {
  aliquotIR = baseSalary * 0.275 - 869.36;
};

console.log("Salary: " + (baseSalary - aliquotIR));