# 24.3 Complex updates II

> ### :warning: Translation to **English** under construction :construction:

### Habilidades desenvolvidas:
- Utilizar o operador `$all` para filtrar documentos;
- Utilizar o operador `$elemMatch` para filtrar documentos;
- Utilizar o operador `$size` para filtrar documentos pelo tamanho de arrays;
- Utilizar o operador `$expr` para criar expressões de agregação;
- Utilizar expressões regulares e o operador `$regex` para buscar documentos;
- Utilizar o índice textual e o operador `$text`;
- Utilizar o operador `$mod`.

- [Exercícios](#exercícios)

<br>

## Operador $all

O operador $all seleciona todos os documentos em que o valor do campo é um array que contenha todos os elementos especificados. Em se tratando-se de array , esse operador é equivalente ao operador $and , pois fará a comparação de todos os valores especificados.
Utiliza-se $all sempre que é preciso passar mais de um valor de comparação, e é irrelevante tanto a existência de mais elementos no array quanto a ordem em que esses elementos estão.
Entenda essa diferença com estas duas queries :

```js
db.inventory.find({ tags: ["red", "blank"] });

db.inventory.find({ tags: { $all: ["red", "blank"] } });
```

A primeira query retornará somente os documentos em que o array tags seja exatamente igual ao passado como parâmetro no filtro, ou seja, contenha apenas esses dois elementos, na mesma ordem.
Já a segunda analisará o mesmo array , independentemente da existência de outros valores ou a ordem em que os elementos estejam.
Utilizar o $all poupa um pouco de código. Veja um exemplo utilizando o $all :

```js
db.inventory.find(
  { tags: { $all: [ "ssl", "security" ] } }
);
```

E seu equivalente, utilizando o $and :


```js
db.inventory.find(
  {
    $and: [
      { tags: "ssl" },
      { tags: "security" }
    ]
  }
);
```

<br>

## Operador $elemMatch

O operador $elemMatch seleciona os documentos que contêm um campo do tipo array com pelo menos um elemento que satisfaça todos os critérios de seleção especificados. Ou seja, com esse operador você pode especificar várias queries para um mesmo array.

Veja um exemplo considerando a coleção scores com os seguintes documentos:


```js
{ _id: 1, results: [82, 85, 88] },
{ _id: 2, results: [75, 88, 89] }
```

A query abaixo seleciona somente os documentos em que o array results contém ao menos um elemento que seja maior ou igual a 80 e menor que 85 :

```js
db.scores.find(
  { results: { $elemMatch: { $gte: 80, $lt: 85 } } }
);
```

Como resultado, apenas o documento com o _id igual a 1 será retornado.
Você pode utilizar o operador $elemMatch em arrays que contenham subdocumentos e especificar vários campos desses subdocumentos como filtro. Veja os seguintes documentos na coleção survey :

```js
{
  _id: 1,
  results: [
    { product: "abc", score: 10 },
    { product: "xyz", score: 5 }
  ]
},
{
  _id: 2,
  results: [
    { product: "abc", score: 8 },
    { product: "xyz", score: 7 }
  ]
},
{
  _id: 3,
  results: [
    { product: "abc", score: 7 },
    { product: "xyz", score: 8 }
  ]
}
```

A query abaixo selecionará apenas os documentos em que o array results contenha ao menos um elemento subdocumento com o campo product igual a xyz e o campo score maior ou igual a 8 :

```js
db.survey.find(
  { results: { $elemMatch: { product: "xyz", score: { $gte: 8 } } } }
);
```

Será retornado apenas o documento com o _id igual a 3 .
Você não precisa utilizar o operador $elemMatch se estiver utilizando uma condição para apenas um campo do documento embedado . Veja:

```js
db.survey.find(
  { results: { $elemMatch: { product: "xyz" } } }
);
```

Como a operação acima só tem uma condição, o operador $elemMatch não se faz necessário e você pode utilizar a query abaixo:


```js
db.survey.find(
  { "results.product": "xyz" }
);
```

<br>

## Operador $size

O operador $size seleciona documentos em que um array contenha um número de elementos especificado.
Considere a coleção products a seguir, contendo documentos em que o campo tags pode ser um array :

```js
{ _id: 1, tags: ["red", "green"] },
{ _id: 2, tags: ["apple", "lime"] },
{ _id: 3, tags: "fruit" },
{ _id: 4, tags: ["orange", "lemon", "grapefruit"] }
```

Ao executar a query abaixo, apenas os documentos com o _id igual 1 e 2 serão retornados, pois seus campos tags são arrays e contêm exatamente 2 elementos :

```js
db.products.find(
  { tags: { $size: 2 } }
);
```

É importante saber que o operador $size não aceita ranges de valores. Se você precisar selecionar documentos com base em valores diferentes, a solução é criar um campo que se incremente quando elementos forem adicionados ao array .

<br>

## Operador $where

O operador $where pode ser utilizado para passar uma string contendo uma expressão ou função JavaScript . Esse operador é muito flexível, mas requer que o banco de dados processe a expressão ou função passada para cada documento na coleção. O documento é referenciado na expressão ou função usando this ou obj .

O operador $where não será explorado porque, na versão 3.6 do MongoDB , um outro operador, $expr , que será visto a seguir, passou a suportar expressões de agregação. O operador $expr é mais rápido do que o $where porque não executa JavaScript . Você deve preferir utilizá-lo sempre que possível!

Para saber um pouco mais sobre o operador $where , [clique aqui](https://docs.mongodb.com/manual/reference/operator/query/where/index.html).

<br>


## Operador $expr

O operador $expr permite que você utilize [expressões de agregação](https://docs.mongodb.com/manual/meta/aggregation-quick-reference/#aggregation-expressions) e construa queries que comparem campos no mesmo documento.

Considere os documentos abaixo na coleção monthlyBudget :

```js
{ _id: 1, category: "food", budget: 400, spent: 450 },
{ _id: 2, category: "drinks", budget: 100, spent: 150 },
{ _id: 3, category: "clothes", budget: 100, spent: 50 },
{ _id: 4, category: "misc", budget: 500, spent: 300 },
{ _id: 5, category: "travel", budget: 200, spent: 650 }
```

A query abaixo utiliza o operador $expr para buscar os documentos em que o valor de spent exceda o valor de budget :


```js
db.monthlyBudget.find(
  {
    $expr: { $gt: [ "$spent", "$budget" ] }
  }
);
```

Apenas os seguintes documentos serão retornados:


```js
{ "_id" : 1, "category" : "food", "budget" : 400, "spent" : 450 }
{ "_id" : 2, "category" : "drinks", "budget" : 100, "spent" : 150 }
{ "_id" : 5, "category" : "travel", "budget" : 200, "spent" : 650 }
```

Note que, na query , nenhum valor foi especificado explicitamente. O que acontece é que o operador $expr entende que deve comparar os valores dos dois campos. Por isso o $ é utilizado, indicando que a string entre aspas referencia um campo.

Mais à frente no curso, você verá muito mais aplicações para o operador $expr dentro do tópico sobre Aggregation Framework , e verá que suas queries ficarão muito mais poderosas!

<br>

## Operador $regex

O operador $regex fornece os "poderes" das expressões regulares ( regular expressions ) para seleção de strings . MongoDB utiliza expressões regulares compatíveis com Perl ( PCRE ), versão 8.42, e com suporte a UTF-8 .
Um uso muito comum para o operador $regex é fazer consultas como o LIKE do SQL . Considere os seguintes documentos na coleção products :


```js
{ _id: 100, sku: "abc123", description: "Single line description." },
{ _id: 101, sku: "abc789", description: "First line\nSecond line" },
{ _id: 102, sku: "xyz456", description: "Many spaces before     line" },
{ _id: 103, sku: "xyz789", description: "Multiple\nline description" }
```

A query abaixo seleciona todos os documentos em que o campo sku termine com "789" :


```js
db.products.find({ sku: { $regex: /789$/ } });

```

O exemplo acima equivale ao comando LIKE do SQL :


```js
SELECT * FROM products WHERE sku LIKE "%789";

```

Você pode especificar opções na regex. Por exemplo, você pode especificar a opção case-insensitive , fazendo com que o MongoDB ignore letras maiúsculas ou minúsculas. Veja:


```js
db.products.find({ sku: { $regex: /^ABC/i } });

```

O caractere i ao lado da expressão indica a opção case-insensitive . Dessa forma, apenas os documentos que contenham ABC no campo sku serão retornados, sem se importar se está em maiúsculo ou minúsculo:

```js
{ "_id" : 100, "sku" : "abc123", "description" : "Single line description." }
{ "_id" : 101, "sku" : "abc789", "description" : "First line\nSecond line" }
```

Basicamente, tudo o que você pode construir com expressões regulares em outras linguagens de programação funcionará também em suas queries no MongoDB . Saiba mais sobre o operador $regex clicando [aqui](https://docs.mongodb.com/manual/reference/operator/query/regex/index.html).

<br>

## Operador $text

O operador $text faz uma busca "textual" em um campo indexado por um text index. A expressão para utilizar o $text tem a seguinte sintaxe:


```js
{
  $text:
    {
      $search: <string>,
      $language: <string>,
      $caseSensitive: <boolean>,
      $diacriticSensitive: <boolean>
    }
}
```

Em que:
  - $search : Uma string com os termos que o MongoDB utilizará para fazer o parse e utilizará como filtro. Internamente, o MongoDB faz uma busca lógica ( OR ) sobre os termos, a menos que seja especificado como uma frase inteira;
  - $language : Opcional. Esse campo determina a lista de stop words que será utilizada na tokenização da busca. Veja a [lista de idiomas suportados](https://docs.mongodb.com/manual/reference/text-search-languages/#text-search-languages). Se você passar o valor none , a busca utilizará uma tokenização simples sem utilizar nenhuma lista de stop words ;
  >Stop word: Também conhecido como palavra vazia , é uma palavra que é removida antes ou após o processamento de um texto em linguagem natural.
  - $caseSensitive : Opcional. Recebe um valor booleano para habilitar ou desabilitar buscas case sensitive . O valor default é false , o que faz com que as buscas sejam case-insensitive . Veja mais informações sobre case-insensitive [aqui](https://docs.mongodb.com/manual/reference/operator/query/text/index.html#text-operator-case-sensitivity);
  - $diacriticSensitive : Opcional. Recebe um valor booleano para habilitar ou desabilitar busca [diacritic sensitive](https://docs.mongodb.com/manual/reference/operator/query/text/index.html#text-operator-diacritic-sensitivity) . O valor default também é false .

O operador $text , por padrão, não retorna os resultados ordenados pelas pontuações ( score ). Veja mais informações sobre ordenação por scores [aqui](https://docs.mongodb.com/manual/reference/operator/query/text/index.html#text-operator-text-score).

O score é atribuído a cada documento que contenha o termo procurado no campo. Esse score representa a relevância do documento para a busca textual aplicada. O score pode ser parte do método sort() ou parte de uma projeção .

Hora de ver alguns exemplos considerando a coleção articles e um índice textual no campo subject .

Primeiro, o comando para criar o índice do tipo text :

```js
db.articles.createIndex({ subject: "text" });

```

Tendo os seguintes documentos na coleção articles :


```js
{ _id: 1, subject: "coffee", author: "xyz", views: 50 },
{ _id: 2, subject: "Coffee Shopping", author: "efg", views: 5 },
{ _id: 3, subject: "Baking a cake", author: "abc", views: 90  },
{ _id: 4, subject: "baking", author: "xyz", views: 100 },
{ _id: 5, subject: "Café Com Leite", author: "abc", views: 200 },
{ _id: 6, subject: "Сырники", author: "jkl", views: 80 },
{ _id: 7, subject: "coffee and cream", author: "efg", views: 10 },
{ _id: 8, subject: "Cafe com Leite", author: "xyz", views: 10 }
```

### Exemplo 1: Procurando um único termo

A query abaixo utiliza os operadores $text e $search para buscar todos os documentos que contenham o termo coffee :


```js
db.articles.find({ $text: { $search: "coffee" } });

```

### Exemplo 2: Procurando qualquer um dos termos especificados

Você pode procurar por vários termos passando uma string delimitada por espaços . O operador $text fará uma busca lógica OR por cada um desses termos, retornando os documentos que contenham qualquer um deles.

A query abaixo especifica três termos ( "bake coffee cake" ) para a string $search :

```js
db.articles.find({ $text: { $search: "bake coffee cake" } });

```

### Exemplo 3: Procurando por uma frase

Procurar por frases também é possível. A query abaixo procura pela frase "coffee shop" :


```js
db.articles.find({ $text: { $search: "\"coffee shop\"" } });

```

Você verá mais exemplos e utilizações para o $text nos exercícios. Verá também como esse operador se comporta muito bem com o Português do Brasil !


<br>

## Operador $mod

Saindo um pouco dos operadores textuais, existe o operador $mod , que seleciona todos os documentos em que o valor do campo dividido por um divisor seja igual ao valor especificado (ou seja, executa a operação matemática módulo).

>Operação módulo: encontra o resto da divisão de um número por outro.

Considere os seguintes documentos na coleção inventory :


```js
{ _id: 1, item: "abc123", qty: 0 },
{ _id: 2, item: "xyz123", qty: 5 },
{ _id: 3, item: "ijk123", qty: 12 }
```

A query a seguir seleciona todos os documentos da coleção em que o valor do campo qty módulo 4 seja 0 :


```js
db.inventory.find({ qty: { $mod: [4, 0] } });

```

Então, apenas os seguintes documentos serão retornados:


```js
{ "_id" : 1, "item" : "abc123", "qty" : 0 }
{ "_id" : 3, "item" : "ijk123", "qty" : 12 }
```

<br>

# EXERCÍCIOS
>Você continuará utilizando o mesmo dataset de filmes do dia anterior. Se você fez todos os exercícios corretamente, apenas siga para o primeiro exercício de hoje. Caso contrário, conecte-se à sua instância e utilize o trecho de código abaixo para inserir os documentos e ficar na mesma página!:

<details>
<summary>Mostrar query contendo o banco</summary>

<br>

```js

db.movies.drop();
db.movies.insertMany([
  {
    title: "Batman",
    category: [
      "action",
      "adventure",
    ],
    imdbRating: 7.7,
    budget: 35,
  },
  {
    title: "Godzilla",
    category: [
      "action",
      "adventure",
      "sci-fi",
    ],
    imdbRating: 6.6,
    budget: 1,
  },
  {
    title: "Home Alone",
    category: [
      "family",
      "comedy",
    ],
    imdbRating: 7.4,
  },
]);

```

</details>

<br>


**Exercício 1**: Utilizando o operador $all , retorne todos os filmes que contenham action e adventure no array category .

<details>
<summary>Mostrar resposta</summary>

<br>

```js

```

</details>

<hr>
<br>

**Exercício 2**: Agora retorne os filmes que contenham action no array category e possuem nota do IMDB maior do que 7 .

<details>
<summary>Mostrar resposta</summary>

<br>

```js

```

</details>

<hr>
<br>

**Exercício 3**: Adicione um array chamado ratings ao filme Batman com os seguintes valores: [85, 100, 102, 105] . Dica: lembre-se do operador $each visto no dia anterior.

<details>
<summary>Mostrar resposta</summary>

<br>

```js

```

</details>

<hr>
<br>

**Exercício 4**: Adicione um array chamado ratings ao filme Godzilla com os seguintes valores: [78, 52, 95, 102] .

<details>
<summary>Mostrar resposta</summary>

<br>

```js

```

</details>

<hr>
<br>

**Exercício 5**: Adicione um array chamado ratings ao filme Home Alone com os seguintes valores: [200, 99, 65] .

<details>
<summary>Mostrar resposta</summary>

<br>

```js

```

</details>

<hr>
<br>

**Exercício 6**: Retorne todos os filmes com ratings maior do que 103 , exibindo apenas os campos title e ratings .

<details>
<summary>Mostrar resposta</summary>

<br>

```js

```

</details>


<hr>
<br>

**Exercício 7**: Retorne todos os filmes com ratings entre 100 e 105 , exibindo apenas os campos title e ratings .

<details>
<summary>Mostrar resposta</summary>

<br>

```js

```

</details>


<hr>
<br>

**Exercício 8**: Retorne todos os filmes com ratings entre 64 e 105 e divisíveis por 9 , exibindo apenas os campos title e ratings .

<details>
<summary>Mostrar resposta</summary>

<br>

```js

```

</details>


<hr>
<br>

**Exercício 9**: Retorne os filmes da categoria adventure e com ratings maior do que 103 , exibindo apenas os campos title , ratings e category .

<details>
<summary>Mostrar resposta</summary>

<br>

```js

```

</details>


<hr>
<br>

**Exercício 10**: Retorne somente o título de todos os filmes com dois elementos no array category .

<details>
<summary>Mostrar resposta</summary>

<br>

```js

```

</details>


<hr>
<br>

**Exercício 11**: Retorne somente o título de todos os filmes com quatro elementos no array ratings .

<details>
<summary>Mostrar resposta</summary>

<br>

```js

```

</details>


<hr>
<br>

**Exercício 12**: Busque os filmes em que o módulo 5 do campo budget seja 0 e que o array category tenha tamanho 2 .

<details>
<summary>Mostrar resposta</summary>

<br>

```js

```

</details>


<hr>
<br>

**Exercício 13**: Retorne os filmes da categoria "sci-fi" ou que possua o ratings maior do que 199 , exibindo apenas os campos title , ratings e category .

<details>
<summary>Mostrar resposta</summary>

<br>

```js

```

</details>


<hr>
<br>

**Exercício 14**: Retorne os filmes em que o ratings possua tamanho 4 e que seja da category "adventure" ou "family" , mas que não tenha o imdbRating menor que 7.


<details>
<summary>Mostrar resposta</summary>

<br>

```js

```

</details>


<hr>
<br>


**Exercício 15**: Adicione o campo description no filme Batman com o seguinte valor: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker." .

<details>
<summary>Mostrar resposta</summary>

<br>

```js

```

</details>


<hr>
<br>

**Exercício 16**: Adicione o campo description no filme Godzilla com o seguinte valor: "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity." .

<details>
<summary>Mostrar resposta</summary>

<br>

```js

```

</details>


<hr>
<br>

**Exercício 17**: Adicione o campo description no filme Home Alone com o seguinte valor: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation." .


<details>
<summary>Mostrar resposta</summary>

<br>

```js

```

</details>


<hr>
<br>

**Exercício 18**: Utilizando o operador $regex , retorne todos os filmes em que a descrição comece com a palavra "The" .

<details>
<summary>Mostrar resposta</summary>

<br>

```js

```

</details>


<hr>
<br>

**Exercício 19**: Utilizando o operador $regex , retorne todos os filmes em que a descrição termine com a palavra "humanity." .

<details>
<summary>Mostrar resposta</summary>

<br>

```js

```

</details>


<hr>
<br>

**Exercício 20**: Crie um índice do tipo text no campo description .


<details>
<summary>Mostrar resposta</summary>

<br>

```js

```

</details>


<hr>
<br>

**Exercício 21**: Utilizando o operador $text , busque por filmes que contenham o termo "vacation" .

<details>
<summary>Mostrar resposta</summary>

<br>

```js

```

</details>


<hr>
<br>

**Exercício 22**: Utilizando o operador $text , busque por filmes que contenham os termos "monstrous" e "criminal" .

<details>
<summary>Mostrar resposta</summary>

<br>

```js

```

</details>


<hr>
<br>

**Exercício 23**: Utilizando o operador $text , busque por filmes que contenham a frase "when he is accidentally" .

<details>
<summary>Mostrar resposta</summary>

<br>

```js



```

</details>
