# (4.1) JavaScript - Introduction

In today's exercises, you will be doing fifteen small programs. All work with conditional logic (`if / else` and` switch`), arithmetic operators (+, -, *, /,%) and logical operators (>, <, &&, ||). For you to be able to run your codes we recommend that you use the Code Runner extension, you can see more about it in the content we did about using VS Code.
1. Make five programs, one for each basic arithmetic operation. Your program must have two variables, a and b, defined at the beginning with the values to be operated. Make programs for:
    * Addition
    * Subtraction
    * Multiplication
    * Division
    * Module

1. Make a program that returns the greater of two numbers. Define two variables at the beginning of the program with the values to be compared.

1. Make a program that returns the largest of three numbers. Define three variables at the beginning of the program with the values to be compared.

1. Make a program that, given a value defined in a variable, returns "positive" if that value is positive, "negative" if it is negative and "zero" otherwise.

1. Make a program that defines three variables with the values of the three internal angles of a triangle. Return true if the angles represent the angles of a triangle and false otherwise.
    * For the angles to be a valid triangle, the sum of the three must be 180 degrees. If the angles are invalid, the program should return an error message.

1. Write a program that is named after a chess piece and returns the movements it makes.
    * As a challenge, make the program work both if you receive the name of a part with uppercase letters and with lowercase letters, without increasing the number of conditionals.
    * As a tip, you can search for a function that makes a string stay with all lower case letters.
    * If the part passed is invalid, the program should return an error message.
    * Example: bishop -> diagonals

1. Write a program that converts a grade given in percentage (from 0 to 100) into concepts from A to F. Follow these rules:
    * Percentage> = 90 -> A
    * Percentage> = 80 -> B
    * Percentage> = 70 -> C
    * Percentage> = 60 -> D
    * Percentage> = 50 -> E
    * Percentage <50 -> F
    * The program should return an error message and end if the grade passed is less than 0 or greater than 100.

1. Write a program that defines three numbers in variables at the beginning and returns true if at least one of the three is even. Otherwise, it returns false.
    * Bonus: use only an `if`.

1. Write a program that defines three numbers in variables at the beginning and returns true if at least one of the three is odd. Otherwise, it returns `false`.
    * Bonus: use only an `if`.

1. Write a program that starts with two values in two different variables: the cost of a product and its sales value. From the values, calculate how much profit (sales value less the cost of the product) the company will have when selling 1,000 of these products.
    * Note that a 20% tax is levied on the cost of the product.
    * Your program should also issue an error message and terminate if any of its input values are less than zero.
    * The profit of a product is the result of subtracting the sale value from the cost of the product, and the 20% tax is also part of the cost value.
      * TotalCostValue = CostValue + TaxAboutCost
      * profit = salesValue - TotalCost (profit of a product)

1. A person who works with a formal contract in Brazil has the INSS and the IR deducted from his gross salary. Make a program that, given a gross salary, calculates the net to be received.
    * The notation for a salary of R $ 1500.10, for example, must be 1500.10. For tax ranges, use the following references:
      * **INSS**
        * Gross salary up to R $ 1,556.94: 8% rate
        * Gross salary from R $ 1,556.95 to R $ 2,594.92: 9% rate
        * Gross salary from R $ 2,594.93 to R $ 5,189.82: 11% rate
        * Gross salary above R $ 5,189.82: maximum rate of R $ 570.88
    
      * **IR**
        * Up to R $ 1,903.98: exempt from income tax
        * From R $ 1,903.99 to 2,826.65: rate of 7.5% and installment of R $ 142.80 to be deducted from tax
        * From R $ 2,826.66 to R $ 3,751.05: rate of 15% and installment of R $ 354.80 to be deducted from tax
        * From R $ 3,751.06 to R $ 4,664.68: rate of 22.5% and installment of R $ 636.13 to be deducted from tax
        * Above R $ 4,664.68: rate of 27.5% and installment of R $ 869.36 to be deducted from tax.


Example - A person has a gross salary of R$ 3,000.00. The calculation will be:
* The gross salary is between R$ 2,594.93 and R$ 5,189.82, so its rate for INSS is 11%. The INSS will be 11% of R$ 3,000, that is, R$ 330.00.
* To find the base salary, subtract the INSS rate from the gross salary: R$ 3,000.00 - R$ 330.00 = R$ 2,670.00.
* To take the amount of the IR, we have a salary (already deducted from the INSS) between R$ 1,903.99 and R$ 2,826.65, the rate being then 7.5%, with a portion of R$ 142.80 to be deducted from the tax. Thus, we have:
    * R$ 2,670.00: salary with INSS already deducted;
    * 7.5%: income tax rate;
    * R$ 142.00 installment to be deducted from tax.
    * Doing the math, we have: (7.5% of R$ 2,670.00) - R$ 142.80 = R$ 57.45
    * The last calculation to obtain the net salary is R$ 2,670.00 - R$ 57.45 (base salary - IR value) = R$ 2,612.55.
      
Result: R$ 2,612.55.
Tip: *How about identifying the rates with explanatory name variables?*
