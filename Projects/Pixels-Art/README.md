# Welcome to the Arte com Pixels project repository!

With this project, the ability to model problems will be reinforced, an essential skill that the developer will encounter all the time in his career! One way of modeling problems is to break it down into several smaller ones.

In the context of this project, the problem is: given a frame composed of pixels and a color palette, you need to allow the user to be able to paint the frame with the color he has selected in the palette.

In addition, you will have the opportunity to put what you have learned about HTML, CSS and JavaScript back into practice!

<br>

<!--
Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

---

## Instruções para entregar seu projeto:

### 🗒ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone git@github.com:tryber/sd-09-project-pixels-art.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-09-project-pixels-art`

2. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b mariazinha-project-pixels-art`

3. Crie na raiz do projeto os arquivos que você precisará desenvolver:
  * Verifique que você está na raiz do projeto
    * Exemplo: `pwd` -> o retorno vai ser algo tipo _/Users/mariazinha/code/**sd-0x-block5-project-pixels-art**_
  * Crie os arquivos `index.html`, `style.css` e `script.js`
    * Exemplo: `touch index.html style.css script.js`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
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

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin mariazinha-meme-generator-project`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-0x-block5-project-pixels-art/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_, um título claro que o identifique, e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-0x-block5-project-pixels-art/pulls) e confira que o seu _Pull Request_ está criado

---

# Entregáveis

Para entregar o seu projeto você deverá criar um Pull Request neste repositório.

Este Pull Request deverá conter os arquivos `index.html`, `style.css` e `script.js`, que conterão seu código HTML, CSS e JavaScript, respectivamente.

## ⚠️ É importante que seus arquivos tenham exatamente estes nomes! ⚠️

Você pode adicionar outros arquivos se julgar necessário. Qualquer dúvida, procure a monitoria.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://course.betrybe.com/intro/git/) sempre que precisar!

---

## Requisitos do projeto

### 💡Veja o exemplo a seguir de como o projeto pode se parecer depois de pronto. Lembre-se que você pode ~~e deve~~ ir além para deixar o projeto com a sua cara e impressionar à todos!

![exemplo de arte com pixels](./art-with-pixels.gif)

## ⚠️ Leia-os atentamente e siga à risca o que for pedido. Em particular, **atente-se para os nomes de _ids_  e _classes_ que alguns elementos de seu projeto devem possuir**. Não troque `ids` por `classes` ou vice-versa ⚠️

O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

---

### 👀Observações importantes:

* Os requisitos do seu projeto são avaliados automaticamente, sendo utilizada a resolução de tela de `1366 x 768` (1366 pixels de largura por 768 pixels de altura).

  * #### ⚠️ Logo, recomenda-se desenvolver seu projeto usando a mesma resolução, via instalação [deste plugin](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en) do `Chrome` para facilitar a configuração da resolução. ⚠️

* Caso for utilizar imagens nesse projeto, atente-se para o tamanho delas. **Não utilize imagens com um tamanho maior que _500Kb_.**
  * #### ⚠️ Utilize uma ferramenta [como esta](https://picresize.com/pt) para redimensionar as imagens. ⚠️

  * Caso a avaliação falhe com alguma mensagem de erro parecida com `[409:0326/130838.878602:FATAL:memory.cc(22)] Out of memory. size=4194304`, provavelmente as imagens que você está utilizando estão muito grandes. Tente redimensiona-las para um tamanho menor.

* Para verificar se a sua avaliação foi computada com sucesso, você pode verificar os **detalhes da execução do avaliador**.

  * Na página do seu _Pull Request_, acima do "botão de merge", procure por _**"Evaluator job"**_ e clique no link _**"Details"**_;

  * Na página que se abrirá, procure pela linha _**"Cypress evaluator step"**_ e clique nela;

  * Analise os resultados a partir da mensagem _**"(Run Starting)"**_;

  * Caso tenha dúvidas, consulte [este vídeo](https://vimeo.com/420861252) ou procure a monitoria.


* Você tem liberdade para adicionar novos comportamentos ao seu projeto, seja na forma de aperfeiçoamentos em requisitos propostos ou novas funcionalidades, **desde que tais comportamentos adicionais não conflitem com os requisitos propostos**.

  * Em outras palavras, você pode fazer mais do que for pedido, mas nunca menos.

* Contudo, tenha em mente que **nada além do que for pedido nos requisitos será avaliado**. _Esta é uma oportunidade de você exercitar sua criatividade e experimentar com os conhecimentos adquiridos._

-->

## Mandatory requirements:

* In this project, you will implement a pixel art editor.

** In other words, given a color palette and a frame composed of pixels, you will allow those who use it to be able to paint whatever they want on the frame! ** 👩‍🎨

<br>

### 1 - The page must have the title "Palette of Colors".

##### The following checks will be made:

- The title must be inside an `h1` tag with the` id` called `title`;

- The title text must be ** exactly ** "Color Palette".

<br>

### 2 - The page must have a palette of four different colors.

##### The following checks will be made:

- The color palette must be an element with `id` called` color-palette`, whereas each individual color of the color palette must have the `color` class;

- The background color of each element in the palette should be the color that the element represents. ** The only color not allowed in the palette is white. **;

- Each element of the color palette must have a solid black border, 1 pixel wide;

- The color palette should list all colors available for use side by side, and should be positioned under the title "Color Palette";

- The color palette must not contain repeated colors.

<br>

### 3 - The color ** black ** must be the first in the color palette.

##### The following checks will be made:

- The other colors can be chosen freely.

<br>

### 4 - The page must have a pixel frame, with 25 pixels.

##### The following checks will be made:

- The pixel frame must be 5 elements wide and 5 elements long;

- The "pixel" frame must have the `id` called` pixel-board`, whereas each individual "pixel" within the frame must have the `class` called` pixel`;

- The initial color of the "pixels" inside the frame, when opening the page, must be white;

- The "pixel" frame should appear below the color palette.

<br>

### 5 - Each element of the pixel frame must be 40 _pixels_ wide and 40 _pixels_ high and be delimited by a black border of 1 pixel.

##### The following checks will be made:

- The pixel frame has a height and length of 5 elements;

- 40 pixels must be the total size of the element, including its content and excluding the black border, which must be created separately.

<br>

### 6 - When loading the page, the color ** black ** of the palette must already be selected to paint the pixels.

##### The following checks will be made:

- The element of black color must initially have the `class`` selected`;

- Note that the element that should receive the `selected` class must be one of the elements that have the` color` class, as specified in ** requirement 2 **.

<br>

### 7 - When clicking on one of the palette colors, the selected color will be used to fill the pixels in the frame.

##### The following checks will be made:

- The `class`` selected` must be added to the color selected in the palette, at the same time that it is removed from the previously selected color;

- Only one color of the palette must have the `class`` selected` at a time;

- Note that the elements that should receive the `selected` class must be the same elements that have the` color` class, as specified in ** requirement 2 **.

<br>

### 8 - When clicking on a pixel inside the frame after selecting a color in the palette, the pixel must be filled with that color.

##### The following checks will be made:

- When loading the page it should be possible to paint the pixels black;

- After selecting another color in the palette, it should be possible to paint the pixels with that color;

- Only the pixel that was clicked should be filled with the selected color, without influencing the color of the other pixels.

<br>

### 9 - Create a button that, when clicked, clears the frame by filling the color of all its pixels with white.

##### The following checks will be made:

- The button must have the `id` called` clear-board`;

- The button must be positioned between the color palette and the pixel frame;

- The button text must be ** "Clear" **.

<br>

Bonus Requirements:

### 10 - Make the pixel frame have its size defined by the user.

##### The following checks will be made:

- Create an input and a button that allow you to define a pixel frame with size between 5 and 50. When clicking on the button, a frame of ** N ** pixels wide and ** N ** pixels high must be generated, where ** N ** is the number entered in the input;

 - That is, if the value passed to the input is 7, when clicking on the button, a 49 pixel frame will be generated (7 pixels wide x 7 pixels high);

- The input must have the `id` called` board-size` and the button must have the `id` called` generate-board`;

- The input must only accept numbers greater than zero. This restriction ** must ** be made using the attributes of the `input` element;

- The button must contain the text "VQV";

- The input must be positioned between the color palette and the pixel frame;

- The button must be positioned on the side the input;

- If no value is placed in the input when clicking the button, show an `alert` with the text:" Board is invalid! ";

- The new frame must have all pixels filled with white.

<br>

### 11 - Limit the minimum and maximum size of the board.

##### The following checks will be made:

- If the value entered in the input `board-sze` falls outside the range of 5 to 50, do:

   - Value less than 5, consider 5 as standard;

   - Value greater than 50, consider 50 as standard.

<br>

### 12 - Make the colors in the palette randomly generated when loading the page.

##### The following checks will be made:

- The black color still needs to be present and must be the first in your color palette.

---

<br>

## Dicas

- Você pode pesquisar sobre a propriedade `display` do CSS, [especificamente sobre as opções `table`, `table-row` e `table-cell`](https://stackoverflow.com/questions/29229523/how-and-why-to-use-display-table-cell-css) para te ajudar a posicionar os elementos;

- [Que tal](https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/) usar um _loop_ para adicionar o mesmo evento em vários elementos? [Ou então](https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/) a técnica de _event bubbling_ combinada com `classList`?

- Se precisar consultar os valores do _CSS_ de um elemento a partir do _JavaScript_, [dê uma olhada aqui](https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp).

- Para alterar alguma propriedade do _CSS_ de um elemento através do _JavaScript_, dê uma olhada no [atributo `style`](https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp) do elemento.

- Para colocar sua página no [GitHub Pages](https://pages.github.com/), não é necessário remover o conteúdo que já está lá, você pode apenas adicionar essa nova página. Para isso, todo o conteúdo desse projeto deve ser colocado em uma pasta `/projetos/pixels-art`.


<!--
### DURANTE O DESENVOLVIMENTO

* ⚠ **RECOMENDAMOS QUE VOCÊ FIQUE ATENTO ÀS ISSUES DO CODDE CLIMATE, PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO. A PARTIR DO PRÓXIMO BLOCO SEU PROJETO SOMENTE SERÁ AVALIADO SE NÃO TIVER ISSUES NO CODE CLIMATE!** ⚠

* Faça `commits` das alterações que você fizer no código regularmente;

* Lembre-se de sempre após um ~~(ou alguns)~~ `commits` atualizar o repositório remoto (o famoso `git push`);

* Os comandos que você utilizará com mais frequência são:

  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_;

  2. `git add` _(para adicionar arquivos ao stage do Git)_;

  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_;

  5. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_;

  4. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_.

---

### DEPOIS DE TERMINAR O DESENVOLVIMENTO

Para sinalizar que o seu projeto está pronto para o _"Code Review"_ dos seus colegas, faça o seguinte:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-09`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

### REVISANDO UM PULL REQUEST

Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

#VQV 🚀
-->
