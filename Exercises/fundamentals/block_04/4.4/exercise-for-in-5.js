// 5. Now, define a second object with the same structure (the same keys) as the first and the following values: "Scrooge Uncle", "Christmas on Bear Mountain, Dell's Four Color Comics # 178", "The last McDuck", " Yes".

// Expected value on the console:
// Daisy and Uncle $crooge
// Donald Duck and Christmas on Bear Mountain, Dell's Four Color Comics # 178
// Main character's girlfriend in Donald Duck and The Last Mac comic
// Both recurring // Pay attention to that last line!


let info = {
  character: "Daisy",
  origin: "Donald Duck",
  note: "Girlfriend of the main character in the Donald Duck comics",
  recurrent: "Yes"
};

let info2 = {
  character: "Uncle $crooge",
  origin: "Christmas on Bear Mountain, Dell's Four Color Comics # 178",
  note: "The last McDuck",
  recurrent: "Yes"
};

for (let key in info) {
  if (info[key] === info.recurrent && info[key] === "Yes" && info2[key] === "Yes") {
    console.log("Both recurrent");
  } else {
    console.log(info[key], 'and', info2[key]);
  }
}