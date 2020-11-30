// 1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
//   - Exemplo de palíndromo: arara .
//   - verificaPalindrome("arara") ;
//   - Retorno esperado: true
//   - verificaPalindrome("desenvolvimento") ;
//   - Retorno esperado: false

function isPalindrome(word){
  let inverseWord = word.split('').reverse().join('')

  if (inverseWord === word) {
    isPalindrome = true;
    console.log('true');
  } else {
    isPalindrome = false;
    console.log('false');
  }

  console.log(word);
  console.log(inverseWord);
}

isPalindrome('bota');