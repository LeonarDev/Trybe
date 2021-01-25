// 2. Insert a new property in the object with the key name "recurring" and the value "Yes" and then print the object on the console.

let info = {
  character: 'Daisy',
  origin: 'Donald Duck',
  note: 'Girlfriend of the main character in the Donald Duck comics',
};

// Two ways to solve the exercise
info.recurrent = "Yes";

info['recurrent'] = "Yes";

console.log (info);