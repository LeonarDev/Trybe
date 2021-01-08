# (4.4) JavaScript - Objects and Functions

### Part I - Objects and For/In

Using the object below, do the following exercises:
```
let info = {
  character: "Margarida",
  origin: "Donald Duck",
  note: "Girlfriend of the main character in the Donald Duck comics",
};
```

1. Print a welcome message on the console to the character above, including her name.
   - Expected value on the console: Welcome, Margarida


2. Insert a new property in the object with the key name "recurring" and the value "Yes" and then print the object on the console.
   - Expected value on the console:

```
  {
    character: 'Margarida',
    origin: 'Donald Duck',
    note: 'Girlfriend of the main character in the Donald Duck comics',
    applicant: 'Yes'
  };
```

3. Make a for/in that shows all the keys of the object.
   - Expected value on the console:

```
  character
  source
  note
  recurrent
```

4. Make a new for/in, but now show all key values for the object.
   - Expected value on the console:

```
  Daisy
  Donald Duck
  Main character girlfriend in Donald Duck comics
  Yes
```

5. Now, define a second object with the same structure (the same keys) as the first and the following values: "Uncle Scrooge", "Christmas on Bear Mountain, Dell's Four Color Comics # 178", "The last MacPatinhas", "Yes" .
   - Expected value on the console:
```
Daisy and Scrooge
Donald Duck and Christmas on Bear Mountain, Dell's Four Color Comics # 178
Main character's girlfriend in Donald Duck and The Last Mac comic
Both recurring // Pay attention to that last line!
```

---

### Part II - Functions

1. Create a function that takes a string and returns true if it is a palindrome, or false if it is not.
   - Example of palindrome: macaw.
   - checksPalindrome ("macaw");
   - Expected return: true
   - checksPalindrome ("development");
   - Expected return: false

2. Create a function that receives an array of integers and returns the index of the highest value.
 - Test array: [2, 3, 6, 7, 10, 1]; .
 - Expected value when returning the function: 4.

3. Create a function that receives an array of integers and returns the index of the lowest value.
 - Test array: [2, 4, 6, 7, 10, 0, -3]; .
 - Expected value when returning the function: 6.

4. Create a function that receives an array of names and returns the name with the most characters.
 - Test array: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
 - Expected value in the return of the function: Fernanda.

5. Create a function that receives an array of integers and returns the most repeatable integer.
 - Test array: [2, 3, 2, 5, 8, 2, 3]; .
 - Expected value when returning the function: 2.

6. Create a function that receives an integer N and returns the sum of all numbers from 1 to N.
 - Test value: N = 5.
 - Expected value when returning the function: 1 + 2 + 3 + 4 + 5 = 15.

7. Create a function that receives a word string and another string ending. Check that the ending string is the end of the word string. Consider that the ending string will always be less than the word string.
 - Test value: "trybe" and "be"
 - Expected value on function return: true
 - CheckEndWord ("trybe", "be");
 - Expected return: true
 - verifyFimPalavra ("joaofernando", "fernan");
 - Expected return: false
