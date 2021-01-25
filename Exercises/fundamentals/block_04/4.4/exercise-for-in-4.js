// 4. Make a new for/in, but now show all key values for the object.

let info = {
  character: 'Daisy',
  origin: 'Donald Duck',
  note: 'Girlfriend of the main character in the Donald Duck comics',
};

info.recurrent = 'Yes';

for (let key in info) {
  console.log(info[key]);
}