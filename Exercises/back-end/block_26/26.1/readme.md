# 26.1 NodeJS - Introduction

> ### :warning: Translation to **English** under construction :construction:

### Habilidades desenvolvidas:
- Utilizar os comandos do npm para criar e gerenciar pacotes e dependências;
- Utilizar o comando node para executar scripts;
- Utilizar o sistema de módulos do Node.js;
- Criar scripts simples, com interação do usuário, com Node.js.
- [Exercícios](#exercícios)

<br>

## Exportando módulos

```js
// brlValue.js

const brl = 5.37;

const usdToBrl = (valueInUsd) => valueInUsd * brl;

module.exports = usdToBrl;
```

Estamos exportando uma função de forma que podemos utilizá-la para converter um valor em dólares para um valor em reais.

O uso desse nosso módulo se daria da seguinte forma:

```js
// index.js

const convert = require('./brlValue');

const usd = 10;
const brl = convert(usd);

console.log(brl) // 53.7
```

Perceba que podemos dar o nome que quisermos para a função depois que a importamos, independente de qual o seu nome dentro do módulo.

Suponhamos agora que seja desejável exportar tanto a função de conversão quanto o valor do dólar (a variável brl ). Para isso, podemos exportar um objeto contendo as duas constantes da seguinte forma:

```js
// brlValue.js

const brl = 5.37;

const usdToBrl = (valueInUsd) => valueInUsd * brl;

module.exports = {
  brl,
  usdToBrl,
};
```

Dessa forma, ao importarmos o módulo, receberemos um objeto como resposta:

```js
// index.js

const brlValue = require('./brValue');

console.log(brlValue); // { brl: 5.37, usdToBrl: [Function: usdToBrl] }

console.log(`Valor do dólar: ${brlValue.brl}`); // Valor do dólar: 5.37
console.log(`10 dólares em reais: ${brlValue.usdToBrl(10)}`); // 10 dólares em reais: 53.7
```

Por último, como estamos lidando com um objeto, podemos utilizar object destructuring para transformar as propriedades do objeto importado em constantes no escopo global:

```js
const { brl, usdToBrl } = require('./brValue');

console.log(`Valor do dólar: ${brl}`); // Valor do dólar: 5.37
console.log(`10 dólares em reais: ${usdToBrl(10)}`); // 10 dólares em reais: 53.7
```

<br>

## Importando módulos

Você verá, a seguir, como utilizar o require para importar cada tipo de módulo.

#### Módulos locais

Quando queremos importar um módulo local, precisamos passar para o require o caminho do módulo, seguindo a mesma assinatura. Por exemplo, require('./meuModulo') . Note que a extensão ( .js ) não é necessária: por padrão, o Node já procura por arquivos terminados em .js ou .json e os considera como módulos.

Além de importarmos um arquivo como módulo, podemos importar uma pasta. Isso é útil pois, muitas vezes, um módulo está dividido em vários arquivos, mas desejamos importar todas as suas funcionalidades de uma vez só. Nesse caso, a pasta precisa conter um arquivo chamado index.js , que importa cada um dos arquivos do módulo e os exporta da forma mais conveniente.

Por exemplo:

```js
// meuModulo/funcionalidade-1.js

module.exports = function () {
  console.log('funcionalidade1');
}
```

```js
// meuModulo/funcionalidade-2.js

module.exports = function () {
  console.log('funcionalidade2');
}
```

```js
// meuModulo/index.js

const funcionalidade1 = require('./funcionalidade-1');
const funcionalidade2 = require('./funcionalidade-2');

module.exports = { funcionalidade1, funcionalidade2 };
```

No exemplo acima, quando importarmos o módulo meuModulo , teremos um objeto contendo duas propriedades, que são as funcionalidades que exportamos dentro de meuModulo/index.js.

Para importarmos e utilizarmos o módulo meuModulo , basta passar o caminho da pasta como argumento para a função require , assim:

```js
// minha-aplicacao/index.js

const meuModulo = require('./meuModulo');

console.log(meuModulo); // { funcionalidade1: [Function: funcionalidade1], funcionalidade2: [Function: funcionalidade2] }

meuModulo.funcionalidade1();
```

<br>

#### Módulos internos

Para utilizarmos um módulo interno, devemos passar o nome do pacote como parâmetro para a função require . Por exemplo, require('fs') importa o pacote fs , responsável pelo sistema de arquivos.

Uma vez que importamos um pacote, podemos utilizá-lo no nosso código como uma variável, dessa forma:

```js
const fs = require('fs');

fs.readFileSync('./meuArquivo.txt');
```

Repare que o nome da variável pode ser qualquer um que escolhermos. O que importa mesmo é o nome do pacote que passamos como parâmetro para o require .

<br>

#### Módulos de terceiros

Módulos de terceiros são importados da mesma forma que os módulos internos: passando seu nome como parâmetro para a função require . A diferença é que, como esses módulos não vêm inclusos no Node.js, precisamos primeiro instalá-los na pasta do projeto em que queremos utilizá-los. O registro oficial do Node.js, onde milhares de pacotes estão disponíveis para serem instalados é o NPM. Além disso, npm também é o nome da ferramenta de linha de comando (CLI - command line interface ) responsável por baixar e instalar esses pacotes. O CLI npm e o Node.js são instalados juntos. Ao longo do conteúdo, sempre que utilizarmos NPM , em maísculas, estamos nos referindo ao registro, ao passo que, quando utilizarmos npm , em minúsculas, estamos nos referindo ao CLI.

Quando importamos um módulo que não é nativo do Node.js, e não aponta para um arquivo local, o Node inicia uma busca por esse módulo. Essa busca acontece na pasta node_modules . Caso um módulo não seja encontrado na node_modules mais próxima do arquivo que o chamou, o Node procurará por uma pasta node_modules na pasta que contém a pasta atual. Caso encontrado, o módulo é carregado. Do contrário, o processo é repetido em um nível de pasta acima. Isso acontece até que o módulo seja encontrado, ou até que uma pasta node_modules não exista no local em que o Node está procurando.

<br>

## Node.js Cheat Sheets

#### Criar novo pacote Node.js

```js
// Cria o arquivo package.json personalizado

npm init
```

```js
// Cria o arquivo package.json padrão

npm init -y
```

<br>


#### Instalar pacotes no Node.js

```js
// Instala todas as depedências do arquivo package.json

npm install
```

```js
// Instala o pacote desejado nas depedências do arquivo package.json

npm install <package_name>

```

Exemplo:

```js
npm install express
```

```js
// Instala o pacote desejado nas depedências de desenvolvimento do arquivo package.json

npm install <package-name> --save-dev

```

OU

```js

npm install <package-name> -D

```

<br>

#### Remover pacotes no Node.js

```js
// Remove o pacote desejado das depedências do arquivo package.json

npm rm <package_name>

```

<br>

#### Criar scripts no arquivo package.json

```js
// Cria script para iniciar a aplicação principal

{
  "scripts": {
    "start": "node nome_do_seu_arquivo.js"
  }
}

```

Exemplo:

```js

{
  "scripts": {
    "start": "node index.js"
  }
}

```

```js
// Cria script personalizado para o pacote desejado

{
  "scripts": {
    "nome_do_comando_do_script": "o_que_deseja_executar"
  }
}

```

Exemplo: 

```js
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

<br>

#### Executar scripts do arquivo package.json

```js
// Executa a aplicação principal do pacote que esta criando

npm start

```

```js
// Executa o script registrado no arquivo package.json

npm run <package-name>

```

<br>

## EXERCÍCIOS

Antes de começar, crie uma nova pasta e, dentro dela, crie um pacote Node.js com o npm init chamado my-scripts. Realize os exercícios dentro desse pacote.

**Exercício 1**: Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa.

>Utilize o pacote [readline-sunc](https://www.npmjs.com/package/readline-sync) para solicitar os inputs pelo terminal. 

>Armazene o script no arquivo `imc.js`.

>Permita que o script seja executado através do comando `npm run imc`.

<hr>
<br>

**Exercício 2**: Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:

| IMC               | Situação |
| ----------------- | -------- |
| Abaixo de 18,5    | Abaixo do peso (magreza)  |
| Entre 18,5 e 24,9 | Peso normal               |
| Entre 25,0 e 29,9 | Acima do peso (sobrepeso) |
| Entre 30,0 e 34,9 | Obesidade grau I          |
| Entre 35,0 e 39,9 | Obesidade grau II         |
| 40,0 e acima      | Obesidade graus III e IV  |

<hr>
<br>

**Exercício 3**: Crie mais um script. Dessa vez, para calcular a velocidade média de um carro numa corrida.

>Utilize o **readline-sync** para solicitar os dados à pessoa.

>Armazene o script no arquivo velocidade.js.

>Permita que o script seja executado através do comando `npm run velocidade`.

>Considere a distância em metros e o tempo em segundos.


<hr>
<br>

**Exercício 4**: Crie um "jogo de adivinhação" em que a pessoa ganha se acertar qual foi o número aleatório gerado.

>O script deve ser executado através do comando `npm run sorteio`.

>Utilize o readline-sync para realizar input de dados.

>Armazene o script em sorteio.js .

>O número gerado deve ser um inteiro entre 0 e 10.

>Caso a pessoa acerte o número, exiba na tela "Parabéns, número correto!".

>Caso a pessoa erre o número, exiba na tela "Opa, não foi dessa vez. O número era [número sorteado]".

>Ao final, pergunte se a pessoa deseja jogar novamente. Se sim, volte ao começo do script.


<hr>
<br>

**Exercício 5**: Crie um arquivo `index.js` que pergunta qual script deve ser executado.

>O script deve ser acionado através do comando npm start .

>Utilize o **readline-sync** para realizar o input de dados

>Quando executado, o script deve exibir uma lista numerada dos scripts disponíveis.

>Ao digitar o número de um script e pressionar enter, o script deve ser executado.

>Você pode utilizar o require para executar o script em questão.

<hr>
<br>

**Exercício 6**: Crie um script que realize o fatorial de um número n.

>Armazene o script no arquivo `fatorial.js`.

>Utilize o **readline-sync** para realizar o input de dados.

>O script deve ser acionado através do comando `npm run fatorial`

>Adicione o script ao menu criado no exercício 5.

>Adicione validações para garantir que o valor informado seja um inteiro maior que 0.

<hr>
<br>

**Exercício 7**: Crie um script que exiba o valor dos n primeiros elementos da sequência de fibonacci.

>Armazene o script no arquivo `fibonacci.js`.

>Utilize o **readline-sync** para realizar o input de dados.

>O script deve ser acionado através do comando `npm run fibonacci`.

>Adicione o script ao menu criado no exercício 5.

>Não imprima o valor 0, uma vez que ele não está incluso na sequência;

>Quando n = 10, exatamente 10 elementos devem ser exibidos;

>Adicione validações para garantir que o valor informado é um inteiro maior que 0.
