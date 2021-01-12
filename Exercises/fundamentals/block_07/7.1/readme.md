# Part I

Now you are going to do some fixation exercises.

1. Make the necessary modifications to the function so that its behavior respects the scope in which each variable was declared.

* Modify the structure of the function so that it is an `arrow function`.

* Modify the concatenations for `template literals`.

* Copy the code below.

```js
function testingScope(scope) { 
  if (scope === true) { 
    var ifScope = 'I must not be used outside my scope (if)';
    ifScope = ifScope + ' great, I was used in the scope!';
    console.log(ifScope);
  } else {
    var elseScope = 'I must not be used outside my scope (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' What am I doing here ? :O');
}

testingScope(true);
```

2. Copy the code below and make a function that returns the `oddsAndEvens` array in ascending order.

* Use template literals for the `console.log call(oddsAndEvens)`; return "Numbers 2,3,4,7,10,13 are sorted in ascending order!".

* Bonus (optional): try to do the same exercise using the `array.sort()` method. 
**Spoiler:** It is possible to perform a function that orders any array of numbers.

* Copy the code below.

```js
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Your code here.

console.log(oddsAndEvens);
```

<br>

# Part II

Below, you will see some specifications of algorithms to develop. It is essential that you use what you have learned about `let`, `const`, `arrow functions` and `template literals`.

1. Create a function that receives a number and returns its factorial.

- In mathematics, the factorial of a non-negative number N, with the notation N!, is the product of all integers less than or equal to N. *Example*: 4! = 4 * 3 * 2 * 1 = 24.

- Bonus (optional): try to do the same exercise [recursively](http://devfuria.com.br/logica-de-programacao/recursividade-fatorial/). **Spoiler**: It is possible to resolve with a line.

- Create a function that receives a sentence and returns the longest word.

Example:
```js
longestWord("Antonio went to the bathroom and we don't know what happened") // return 'bathroom', 'happened'
```

3. Create a page that contains:
- A button to which an event listener will be associated;

- A `clickCount` variable in the **JavaScript** file that accumulates the number of clicks on the button;

- A field in **HTML** that updates the number of clicks on the button as the `clickCount` variable is updated.

4. Create **JavaScript** code with the following specification:

Don't forget to use `template literals`

- **Function 1**: Write a function that will receive a `string` as a parameter. Your function should look for the letter x in any string you determine and replace it with the string you passed as a parameter. Your function must return this new `string`.

**Example**:
    - Determined string: "Tryber x here!"
    - Parameter: "Bebeto"
    - Return: "Tryber Bebeto here!"

- An array with global scope, which is the scope of the JS file, in this case, containing five strings with their main skills.

- **Function 2**: Write a function that will receive the `string` returned from Function 1 as a parameter. This function must concatenate the skills of the global array to the `string` that was passed to Function 2 via parameter. You must order the skills in alphabetical order. Your function must return this new `string`.

**Example**: "Tryber x here! My top five skills are:
    - JavaScript;
    - HTML; ... #goTrybe ".
