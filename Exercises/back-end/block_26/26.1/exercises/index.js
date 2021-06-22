const rs = require('readline-sync');

escolheScript = () => {
  const scripts = [
    { name: 'Calcula IMC', script: './imc.js' },
    { name: 'Calcula Velocidade Média', script: './velocidade.js' },
    { name: 'Jogo da adivinhação', script: './sorteio.js' },
    { name: 'Calcula Fatorial', script: './fatorial.js' },
  ];

  console.table(['IMC', 'Velocidade', 'Sorteio']);
  
  console.log('Qual é o script que deseja executar? ');
  const scriptEscolhido = rs.questionInt('Entre com o número correspondente: ');

  //let mensagem = scripts.map((script, index) => `${index} - ${script.name}`);

  const script = scripts[scriptEscolhido]

  if (!script) {
    console.log('Número inválido');
    reiniciaScript();
  }

  require(script.script);
}

reiniciaScript = () => {
  escolheScript();
}

escolheScript();
