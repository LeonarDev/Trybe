// PART I
// Exercise 1
const testingScope = scope => { 
  if (scope) { 
    let ifScope = 'I must not be used outside my scope (if).';
    ifScope = `${ifScope} Great, I was used in the scope!`;
    console.log(ifScope);
  } else {
    const elseScope = 'I must not be used outside my scope (else)';
    console.log(elseScope);''
  }
}
testingScope(true);



// Exercise II
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortFunction = (a, b) => a - b;

oddsAndEvens.sort(sortFunction);
console.log(`The numbers ${oddsAndEvens} are ranked in increasing order`);



// PART II
// Exercise I


// Exercise II


// Exercise III


// Exercise IV


