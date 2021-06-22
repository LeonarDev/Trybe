const rs = require('readline-sync');

let executaJogo = () => {
  const numeroSorteado = Math.floor(Math.random() * 11); 
  const numeroChutado = rs.questionInt('Chute um número inteiro entre 0 e 10: ');
  
  (numeroChutado == numeroSorteado) ?
    console.log("Parabéns, número correto!")
    : console.log(`Opa, não foi dessa vez. O número era ${numeroSorteado}.`);
  
  console.log(" ");
  
  const jogarNovamente = rs.question('Deseja jogar novamente? Responda "s" ou entre com qualquer tecla para sair: ')
  
  console.log(" ");

  jogarNovamente == 's' ? reiniciaJogo() : console.log("Fim de jogo");
}

let reiniciaJogo = () => {
  executaJogo();
}

executaJogo();
