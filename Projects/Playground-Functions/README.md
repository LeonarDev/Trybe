# Welcome to the Playground Functions Project repository!
<!--
Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #VQV 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma `branch` específica e um _Pull Request_ para colocar seus códigos.

### 🗒 ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone https://github.com/tryber/sd-09-project-playground-functions.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-09-project-playground-functions`

2. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b joaozinho-project-playground-functions`

3. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (devem aparecer listados os novos arquivos em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (devem aparecer listados os arquivos em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

4. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin joaozinho-project-playground-functions`

5. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-09-project-playground-functions/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_, um título claro que o identifique, e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-09-project-playground-functions/pulls) e confira que o seu _Pull Request_ está criado
---

# Entregáveis

Para entregar o seu projeto você deverá criar um _Pull Request_ neste repositório.

Este _Pull Request_ deverá conter o arquivo `challenges.js` com suas funções implementadas.

Todas as funções já estão declaradas no arquivo `challenges.js`. Você pode criar outras funções para auxiliarem as já existentes. Contudo **Não altere o nome das funções que já existem**.

**Os parâmetros das funções já existentes podem e devem ser alterados.**

## Prazo para entrega

O Prazo para entrega é de **7 dias corridos** após o último dia de projeto.

**Exemplo:** Se o último dia de projeto aconteceu na **quarta-feira, dia 17 de junho**, seu prazo final de entrega será na **quarta-feira 24 de junho** às **14 horas**.

Vale ressaltar que os projetos podem ter mais de um dia de duração, por isso o prazo de **7 dias** é contado à partir do último dia de projeto.

## ⚠️ É importante que seus arquivos não tenham o nome alterado! ⚠️

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://course.betrybe.com/intro/git/) sempre que precisar!

---

## Requisitos do projeto

## ⚠️ Leia-os atentamente e siga à risca o que for pedido. Não altere o nome de nenhuma função. ⚠️

O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

---

### 👀 Observações importantes:

* Para verificar se a sua função foi criada corretamente você pode instalar a extensão `code runner` no _VSCode_.

-->

** 1 - Using the && operator **
-
JavaScript has a logical operator `&&`, which takes two values ​​and returns `true` if both values ​​are true, and returns` false` if any of the values ​​are not.

Considering this, create a function called `compareTrue` that, when receiving two booleans:

- Return `true` if both values ​​are true;
- Return `false` if one or both parameters are false.

Perform the function using the `&&` operator.

<br>

** 2 - Triangle area **
-
Write a function named `calcArea` that receives a base value (called` base`) and a height value (called `height`) of a triangle and returns the calculation of its area.

Remember that the area of ​​a triangle is calculated using the following formula: (base * height) / 2.

<br>

** 3 - Dividing the sentence **
-
Write a function with the name `splitSentence`, which will receive a string and return an array of strings separated by each space in the original string.

Example: if the function receives the string `" go Trybe "`, the return should be `['go', 'Trybe']`.

<br>

** 4 - String concatenation **
-
Write a function with the name `concatName` that, upon receiving an array of strings, returns a string with the format` `LAST ITEM, FIRST ITEM'`, regardless of the size of the array.

This means that if the parameter passed to `concatName` is Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], the function should return` Paolillo, Lucas`.

<br>

** 5 - Points in football **
-
Write a function with the name `footballPoints` that receives the number of wins (this parameter should be called` wins`) and the number of ties (this parameter should be called `ties`) and return the number of points that the team scored in a championship.

Therefore, consider that each victory is worth 3 points and each draw is worth 1 point.

<br>

** 6 - Repetition of the largest number **
-
Write a function called `highestCount` that, upon receiving an array of numbers, returns the number of times the largest of them is repeated.

Example: if the parameter of `highestCount` is an array with values` [9, 1, 2, 3, 9, 5, 7] `, the function should return` 2`, which is the number of times that the number ` 9` (highest number of the array) is repeated.

<br>

** 7 - Mouse Hunt **
-
Imagine that there are two cats, which we will call `cat1` and` cat2`, and that both are after a mouse called `mouse`. Imagine that each of the three animals is in a position represented by a number.

Knowing this, create a function called `catAndMouse` that, upon receiving the position of` mouse`, `cat1` and` cat2`, ** in that order **, calculate the distances between the mouse and the cats and return which of the felines will reach the mouse first (the one that will be closest).

Example: if the cat `cat2` is 2 units away from the mouse, and` cat1` is 3 units away, its function should return `" cat2 "`.

If the cats are at the same distance from the mouse, the function should return the string `" cats bump and the mouse runs away "`.

<br>

** 8 - FizzBuzz **
-
Create a function called `fizzBuzz` that receives an array of numbers and returns an array as follows:

- For each Array number that is divisible by only 3, present a string "" fizz "`;
- For each Array number that is divisible by only 5, present a string "" buzz "`;
- If the number is divisible by 3 and 5, return the string `" fizzBuzz "`;
- If the number cannot be divided by 3 or 5, return the string `" bug! "`;

Example: if the parameter is [2, 15, 7, 9, 45], your function should return `[" bug! "," FizzBuzz "," bug! "," Fizz "," fizzBuzz "]`.

<br>

** 9 - Encode and Decode **
-
Create two functions: the first should be called `encode` and, when receiving a string as a parameter, you should replace all lowercase vowels with numbers, according to the following format:

a -> 1 \
and -> 2 \
i -> 3 \
o -> 4 \
u -> 5

That is, if the `encode` parameter is` "hi there!" `, The return should be` "h3 th2r2!" `.

The second function should be called `decode` and does the opposite of` encode` - that is, it receives a string containing numbers instead of lowercase letters and will return a string with lowercase vowels instead of numbers (so, if the parameter of ` decode` is `" h3 th2r2! "`, the return should be `" hi there! "`).

<br>

** 10 - List of technologies **
-
Create a function that receives an array of technology names that you want to learn. This function must also receive a second parameter called `name` with a name.

For each technology in the array, create an object with the following structure:

``
{
  tech: "NomeTech",
  name: name
}
``

These objects must be inserted in a new list in ascending order from the `tech` field in the object.

The output of your function should be a list of objects ordered by the `tech` field of the objects with the format above.

Example:
``
Function inputs:

["React", "Jest", "HTML", "CSS", "JavaScript"]
"Lucas"

// Output:

[
  {
    tech: "CSS",
    name: "Lucas"
  },
  {
    tech: "HTML",
    name: "Lucas"
  },
  {
    tech: "JavaScript",
    name: "Lucas"
  },
  {
    tech: "Jest",
    name: "Lucas"
  },
  {
    tech: "React",
    name: "Lucas"
  }
]
``

If the array comes empty, its function should return 'Empty!'

<br>

**Bonus**
=
** 11 - Phone number **
-
Create a function called `generatePhoneNumber` that receives an array with 11 numbers and returns a phone number, respecting parentheses, dashes and spaces.

Example: if the function parameter is [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], `generatePhoneNumber` should return` (12) 34567-8901`.

- If the function receives an array with a size other than 11, it should return `" Array with incorrect size. "`.

- If any of the numbers in the array is less than 0, greater than 9 or is repeated 3 times or more, `generatePhoneNumber` must return the string` "it is not possible to generate a phone number with these values" `.

<br>

** 12 - Condition of existence of a triangle **
-
A triangle consists of three lines: `lineA`,` lineB` and `lineC`. Create a function called `triangleCheck` that should take the three lines as a parameter and return if it is possible to form a triangle with the values ​​presented for each line

To do so, keep in mind a few considerations:

- For it to be possible to form a triangle, it is necessary that the measurement of either side is less than the sum of the measurements of the other two and greater than the absolute value of the difference between these measurements.

- To obtain the absolute value of a number in JavaScript, search for the `Math.abs` function.

- The return of your function must be a Boolean.

Example: the return of `triangleCheck (10, 14, 8)` should be `true`.

<br>

** 13 - Welcome to the Trybe Bar! **
-
According to the rules of this bar, each drink should drink a glass of water so that there is no hangover.

Create the function `hydrate` that receives a string, and return the suggestion of how many glasses of water you should drink. Examples:
``
String received:
  "1 beer"
Returned string:
  "1 glass of water"
``

``
String received:
  "1 cachaça, 5 beers and 1 glass of wine"
Returned string:
  "7 glasses of water"
``

``
String received:
  "1 cachaça, 5 beers and 1 glass of wine"
Returned string:
  "7 glasses of water"
``

**Grades**

- For simplicity, we will consider that anything with a number in front of it is a drink ** and that your string will always come in the format quantity (in number) + type of drink **.

- The number in front of each drink is in the range between 1 and 9.

** Tip: ** search for something similar to `get all integers inside a string js`.

<!--

### DURANTE O DESENVOLVIMENTO

* Faça `commits` das alterações que você fizer no código regularmente;

* Lembre-se de sempre após um ~~(ou alguns)~~ `commits` atualizar o repositório remoto (o famoso `git push`);

* Os comandos que você utilizará com mais frequência são:

  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_;

  2. `git add` _(para adicionar arquivos ao stage do Git)_;

  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_;

  5. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_;

  4. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_.

---

### DEPOIS DE TERMINAR O DESENVOLVIMENTO - OPCIONAL, PORÉM MUITO IMPORTANTE! <3

Para sinalizar que o seu projeto está pronto para o _"Code Review"_ dos seus colegas, faça o seguinte:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-09`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

### REVISANDO UM PULL REQUEST

Use o conteúdo sobre [Code Review](https://app.betrybe.com/course/real-life-engineer/code-review) para te ajudar a revisar os _Pull Requests_.

#VQV 🚀
-->
