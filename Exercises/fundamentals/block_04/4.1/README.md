# (4.1) JavaScript - Introduction

- [Declaring JavaScript Variables](#)
- [Using Variables](#)
- [var](#)
- [let](#)
- [const](#)
- [Scope](#)
- [Hoisting](#)
- [Exercises](#Exercises)

<hr>
<br>

## Declaring JavaScript Variables
Data types are basically either **Variables** or **Constants**.

Variables in JavaScript are containers which hold reusable data.

```js
var x;
var y;
var z;
```

The above code corresponds to variable `x`, variable `y`, and variable `y`. We are declaring these variables.

Notice we are not assigning a value to these variables just yet. We are only saying they should exist. If you were to look at the value of each variable here, it would be `undefined`.

The variable is registered in its corresponding scope, the scope of a variable is simply "where the variable can be used."

<hr>
<br>

## Using Variables

```js
var x         = 5;             // Number
var name      = "Chris";       // String
var developer = true | false;  // Boolean
var location  = null;          // Null
var blue;                      // undefined
```

`JavaScript` has two data types:
- Primitive types
- Reference types

##### 1) Primitive types
- It consists of Number, String, Boolean, null, and undefined.
- If we assign a primitive type to a variable, we can think of it as we putting that particular value in a particular memory box.
- When we assign a value of one variable to another it will be copied into that new variable.

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--AXOtjb2v--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/y59prr693im7sqh2p188.jpg">

<br>

##### 2) Reference types
- Now you can probably guess about Reference types. It consists of Array, Object, and Function.
- In the case of Reference types Variables actually don't have the actual values but it contains a reference to that particular value.
- Here, Reference simply means a pointer to another memory location that holds particular value. This might be sound confusing for you at first glance but bear with me. Once you go through it would be very clear to you.

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--aMJ7pUlt--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/ewqorhhqk7iapelxmv96.jpg">

<hr>
<br>

## Naming Variables
- Names should **begin with lowercase** string.
- Names **cannot contain symbols** or begin with symbols.
- Names **cannot begin with a number**.
- Names **can contain** a mix of **uppercase** strings, **lowercase** strings, and **numbers**.

```js
// VALID
var man;     
var woman3;  
var blackDog; // This is the best way to name variables with several words

// INVALID
var 1girl;   
var -girl;  
```
<hr>
<br>

## var
Multiple variables in JavaScript can also be chained, while separated by a comma.

```js
var x, y, z; 
```

Assigning values:

```js
var x = 5, y = 6, z = 7;

var a = 10,
    b = 30,
    c = 90;
```

Variables in JavaScript can also evaluate simple mathematical expressions and assume its value. Here:

```js
var x = 5 + 10 + 2;
console.log(x); // 17
```

After the first declaration of a variable in the global scope, subsequent declarations of a variable name using var is possible.
```js
var age = 22;
var age = 25;

console.log(age) // 25
```

<hr>
<br>

## let

Introduced in ES2015 (aka ES6), the variable type `let` shares a lot of similarities with `var` but unlike `var` has **scope constraints**. 

`let` is constrained to whichever scope it is declared in. Its declaration and assignment are similar to `var`. `let` was introduced to mitigate issues posed by variables scope which developers face during development.

In short, let helps us by making it easier to see where variables live in our code.

Just like in the `var`, multiple declarations can also be made with let:

```js
let x, y, z;
x = 50, y = 20, z = 3;
```

Unlike `var`, variables cannot be re-declared using `let`, trying to do that will throw a Syntax error: `Identifier has already been declared`:
```js
let x = 20;
let x = 50;

console.log(x); // SyntaxError: identifier "x" has already been declared.
```

## const
`const`, is a variable type (not really, but you’ll find out now) assigned to data whose **value cannot and will not be changed** throughout the script. Now, this is more strict. `const` is also limited to the scope which it operates. `const` is declared like `var` and `let`.

```js
const x = 20; 
const y = 'boy';
const z = 'developer';
```
### Note: A variable declared with `const` MUST be initialized:

```js
const x; // SyntaxError: missing initializer
```

<br>

- `Variables` can be changed: `var` and `let`
- `Constants` remain the same: `const`

<hr>
<br>

## Scope
Scope in JavaScript simply means “where an element, data, or value is usable” in the script. In JavaScript, we have two kinds of scope:
- **Global** scope
- **Local** scope

For instance:
```js
var x = 5;    // declare x globally

function foo() {
  var x = 4;      // create x locally in the function
  console.log(x); // logs 4
}

foo();          // call our function

console.log(x); // logs 5
```

> Note: Creating a new function creates a new local scope called function scope.

In the code block above we have the basic representation of the global scope and the function (local) scope. x is declared and initialized with the value of 5 which is available to the global scope and is **accessible anywhere in the script**.

In the function `foo()`, `x` is re-declared and initialized while assigning it a value of 4. Local variables like the `var x = 4` inside our function are created when the function starts and deleted when the function is run.

`x` is independent of the global scope and is only accessible within the function `foo()`. Once a variable is declared with `var` it can be used anywhere in the code retaining its original value unless re-assigned a new value:
```js
var x = 10;     // declare x

function foo() {
  x = 20;       // reassign the global x to 20
}

foo()           // call our function

console.log(x); // 20
```

### Using `let` to Block Scope
Using let, we can declare the same variable name multiple times and be sure of what the scope is. Let's take the two examples below comparing the var and let methods.

#### Using `var`:
```js
function doSomethingCool() {
  var x = 5;    // variable scoped to doSomethingCool() function

  if (true) {
    var x = 10;      // same variable! will override the x=5
    console.log(x);  // logs 10 
  }

  console.log(x);    // logs 10
}
```

#### Using `let`:
```js
function doSomethingCool() {
  let x = 5;    // variable scoped to doSomethingCool() function

  if (true) {
    let x = 10;      // new variable! does not conflict with x=5
    console.log(x);  // logs 10 
  }

  console.log(x);    // logs 5
}
```

<hr>
<br>

## Hoisting
In JavaScript, hoisting is a term used to denote the movement of variable and function declarations to the top of their scope during execution of the scope.

Basic Example:
```js
// assign a value of 2 to x
x = 2;     

// declare variable named x 
var x;      

console.log(x); // logs 2
```

How does this happen? You may have thought that after the second line (var x;), that the value of `x` would then become `undefined`. Let's take a look at how the JavaScript engine actually sees the above code:

```js
// variable declaration was hoisted to the top! 
// x is undefined at this point
var x;      

// assign a value of 2 to x
x = 2;      

console.log(x); // logs 2
```

Different from `var`, `let` is used when the variable and value is required solely in a block. No leaks whatsoever to the global scope. Here:
```js
if (true) {
  // defined only in this block scope
  let x = 5
}

// x is not available in the global scope
console.log(x); // ReferenceError
```

<hr>
<br>

## Exercises

In today's exercises, you will be doing fifteen small programs. All work with conditional logic (`if / else` and` switch`), arithmetic operators (+, -, *, /,%) and logical operators (>, <, &&, ||). For you to be able to run your codes we recommend that you use the Code Runner extension, you can see more about it in the content we did about using VS Code.
1. Make five programs, one for each basic arithmetic operation. Your program must have two variables, a and b, defined at the beginning with the values to be operated. Make programs for:
    * Addition
    * Subtraction
    * Multiplication
    * Division
    * Module

**1**. Make a program that returns the greater of two numbers. Define two variables at the beginning of the program with the values to be compared.

**2**. Make a program that returns the largest of three numbers. Define three variables at the beginning of the program with the values to be compared.

**3**. Make a program that, given a value defined in a variable, returns "positive" if that value is positive, "negative" if it is negative and "zero" otherwise.

**4**. Make a program that defines three variables with the values of the three internal angles of a triangle. Return true if the angles represent the angles of a triangle and false otherwise.
    * For the angles to be a valid triangle, the sum of the three must be 180 degrees. If the angles are invalid, the program should return an error message.

**5**. Write a program that is named after a chess piece and returns the movements it makes.
    * As a challenge, make the program work both if you receive the name of a part with uppercase letters and with lowercase letters, without increasing the number of conditionals.
    * As a tip, you can search for a function that makes a string stay with all lower case letters.
    * If the part passed is invalid, the program should return an error message.
    * Example: bishop -> diagonals

**6**. Write a program that converts a grade given in percentage (from 0 to 100) into concepts from A to F. Follow these rules:
    * Percentage> = 90 -> A
    * Percentage> = 80 -> B
    * Percentage> = 70 -> C
    * Percentage> = 60 -> D
    * Percentage> = 50 -> E
    * Percentage <50 -> F
    * The program should return an error message and end if the grade passed is less than 0 or greater than 100.

**7**. Write a program that defines three numbers in variables at the beginning and returns true if at least one of the three is even. Otherwise, it returns false.
    * Bonus: use only an `if`.

**8**. Write a program that defines three numbers in variables at the beginning and returns true if at least one of the three is odd. Otherwise, it returns `false`.
    * Bonus: use only an `if`.

**9**. Write a program that starts with two values in two different variables: the cost of a product and its sales value. From the values, calculate how much profit (sales value less the cost of the product) the company will have when selling 1,000 of these products.
    * Note that a 20% tax is levied on the cost of the product.
    * Your program should also issue an error message and terminate if any of its input values are less than zero.
    * The profit of a product is the result of subtracting the sale value from the cost of the product, and the 20% tax is also part of the cost value.
      * TotalCostValue = CostValue + TaxAboutCost
      * profit = salesValue - TotalCost (profit of a product)

**10**. A person who works with a formal contract in Brazil has the INSS and the IR deducted from his gross salary. Make a program that, given a gross salary, calculates the net to be received.
    * The notation for a salary of R$ 1500.10, for example, must be R$ 1500.10. For tax ranges, use the following references:
      * **INSS**
        * Gross salary up to R$ 1,556.94: 8% rate
        * Gross salary from R$ 1,556.95 to R$ 2,594.92: 9% rate
        * Gross salary from R$ 2,594.93 to R$ 5,189.82: 11% rate
        * Gross salary above R$ 5,189.82: maximum rate of R$ 570.88
    
      * **IR**
        * Up to R$ 1,903.98: exempt from income tax
        * From R$ 1,903.99 to R$ 2,826.65: rate of 7.5% and installment of R$ 142.80 to be deducted from tax
        * From R$ 2,826.66 to R$ 3,751.05: rate of 15% and installment of R$ 354.80 to be deducted from tax
        * From R$ 3,751.06 to R$ 4,664.68: rate of 22.5% and installment of R$ 636.13 to be deducted from tax
        * Above R$ 4,664.68: rate of 27.5% and installment of R$ 869.36 to be deducted from tax.


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
