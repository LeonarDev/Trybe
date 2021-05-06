# (15.3) Testing React Router

<br>

<!-- - **[Summary](#Summary)** -->
- **[Exercicios](#Exercicios)**

<hr>
<br>

#### COMEÇANDO OS EXERCÍCIOS
À primeira vista, pode parecer uma tarefa gigante construir o próprio Portfólio com React e testes. Então, para ajudar, vamos sugerir uma sequência do que fazer, passo a passo, para que você possa seguir com mais confiança:

- Comece construindo as rotas com React Router e os componentes base (que são componentes sem as funcionalidades completas, apenas com um texto pequeno dentro para renderizarem na tela), e após isso teste tudo. Exemplos de rotas para seu portfólio seriam: `Início`, `Projetos`, `Sobre mim` e `Contato`.
  - Teste que o clique em cada rota renderiza os textos esperados na tela.
  - Teste com o histórico que as urls corretas são acessadas após cada clique.
  - Teste que, ao clicar num componente, o texto do componente que estava renderizado some da tela!
  
- Daqui em diante, para cada um dos itens abaixo, você deve escrever os testes antes de ir para o próximo. **É muito importante testar a sua aplicação aos poucos, ao longo do desenvolvimento**. Você pode fazer a funcionalidade dos itens primeiro e depois testar. Ou, você pode, também, fazer TDD, escrevendo os testes primeiro e depois a funcionalidade do item, que é necessária para passar nos testes. A escolha é sua, ok?

#### Escolha três itens para incluir no seu portfólio, e inclua os demais como bônus:

- Seu nome completo e uma foto atual sua, onde o texto alternativo deve ser a descrição da foto que você está exibindo;
  - Teste o nome normalmente e, na imagem, não esqueça de verificar o `src` e o `alt`.

- Uma breve descrição sobre você, destacando algumas informações como nacionalidade e a cidade/estado onde mora;

- Uma lista de habilidades que você possui e destacar a que você mais se orgulha;
  - Para testar o destaque, você poderá usar a classe dele ou o tipo de tag que usou. Caso existam mais elementos com a mesma `classe` ou `tag`, você poderá usar o `datatest-id` para certificar que o elemento é o correto.

- Um link externo para o seu github, que abra em uma nova aba;
  - Teste se o link realmente direciona para a sua página do github. Importante buscar elementos na página que alteram pouco, como o seu próprio nome ou apelido.
  - Utilize mocks para testes em links externos.

- Um índice com links internos para as diferentes seções do seu portfólio, agora separadas por páginas, utilizando React Router.
  - Teste cada um separadamente, não se esqueça de usar o `history` para reiniciar o estado de cada teste.

- Um formulário com campo de e-mail e mensagem para que as pessoas possam entrar em contato com você EmailJS.
  - Utilize mocks para garantir o funcionamento desse teste, uma vez que essa aplicação comporta-se como uma API e é um link externo.

<br>

#### Dicas gerais para os testes:
- Comece seus testes por algum elemento fixo e bem previsível na tela inicial, um título por exemplo é o ideal, pois assim você já verifica se seus testes estão funcionando devidamente.

- Verifique antes de tudo se o elemento a ser testado existe, depois verifique seu conteúdo e por fim, verifique suas funcionalidades (caso existam).

- Faça um describe para organizar o conjunto de testes e mantenha os nomes dos `its` ou `tests` sempre coerente sobre o que está sendo testado.

- Use mocks para o envio de e-mail, testes de rotas e de formulários.
