/* 5) Utilizando as mesmas funções do exercício anterior:

Repita a implementação para a primeira função. 

Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.
*/

const firstFunction = (str) => str.toUpperCase();
const secondFunction = (str) =>  str.charAt(0);
const thirdFunction = (str1, str2) => str1.concat(str2);

module.exports = {
  firstFunction,
  secondFunction,
  thirdFunction,
};
