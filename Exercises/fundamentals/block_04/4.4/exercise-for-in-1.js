// 1. Print a welcome message on the console to the character above, including her name.
// - Expected value on the console: Welcome, Daisy

let info = {
  character: 'Daisy',
  origin: 'Donald Duck',
  note: 'Girlfriend of the main character in the Donald Duck comics',
  recurrent: 'Yes'
};

// Two ways to solve the exercise
console.log ('Welcome, ' + info.character);

console.log ('Welcome, ' + info ['character']);