const rs = require('readline-sync');

calculaVelocidadeMedia = () => {
  const distancia = rs.questionInt('Qual foi a distância percorrida em metros? ');
  const tempo = rs.questionInt('Qual foi o tempo gasto em segundos? ');
  const velocidadeMedia = (distancia / tempo).toFixed(2);
  console.log(`A velocidade média foi de ${velocidadeMedia} metros por segundo.`);
}

calculaVelocidadeMedia();
