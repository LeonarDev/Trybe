// 1. Create a function that takes a string and returns true if it is a palindrome, or false, if it is not.
// - Example of a palindrome: macaw.
// - checkPalindrome ("arara");
// - Expected return: true

// - checksPalindrome ("development");
// - Expected return: false

function checkPalindrome(word){
  let inverseWord = word.split('').reverse().join('')

  if (inverseWord === word) {
    console.log('Word: '+ word);
    console.log('Inversed word: '+ inverseWord);
    return true;
  } else {
    console.log('Word: '+ word);
    console.log('Inversed word: '+ inverseWord);
    return false;
  }
}

console.log(checkPalindrome('arara'));
console.log('');
console.log(checkPalindrome('development'));
