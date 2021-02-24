/* 2) Com a mesma função do exercício anterior, utilizando o mock:

Crie uma nova implementação que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. 

Essa implementação deve ocorrer uma única vez. Faça os testes necessários.
*/

const randomNumber = () => Math.floor(Math.random() * 101);

module.exports = { randomNumber };
