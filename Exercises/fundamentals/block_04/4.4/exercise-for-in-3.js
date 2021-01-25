// 3. Make a for/in that shows all the keys of the object.

let info = {
  character: 'Daisy',
  origin: 'Donald Duck',
  note: 'Girlfriend of the main character in the Donald Duck comics',
};

info.recurrent = 'Yes';

for (key in info) {
  console.log(key);
}