# 23.2 Filter Operators

> ### :warning: Translation to **English** under construction :construction:

### Habilidades desenvolvidas:
- Utilizar os operadores de comparação
  - $lt ( less than , menor que, <)
  - $lte ( less than or equal , menor ou igual a, <=)
  - $gt ( greater than , maior que, >)
  - $gte ( greater than or equal , maior ou igual a, >=)
  - $eq ( equal , igual a, =)
  - $ne ( not equal , diferente de, !=, <>)
  - $in ( in , dentro de)
  - $nin ( not in , não está dentro de)

- Utilizar os operadores lógicos
  - $and ( and , se todas as condições forem verdadeiras retorna true )
  - $or ( or , se apenas uma condição for verdadeira retorna true )

- Compor filtros avançados com
  - $not ( not , inverte o resultado da expressão)
  - $nor ( not or , semelhante ao or , porém trabalha com a condição false )

- Utilizar o operador
  - $exists ( exists , verifica a existência de um atributo)

- Utilizar o método
  - sort() ( sort , ordenar)

- Remover documentos

<br>


- [Exercícios](#exercícios)

<br>

### Operadores de Comparação

Os operadores de comparação servem para que você execute consultas comparando os valores de atributos dos documentos de uma coleção.

Esses operadores são utilizados como parte do filtro de alguns métodos para leitura de documentos do MongoDB . Por exemplo, o find() e o count() , que vimos no dia anterior, ou o update() e o distinct() , que veremos mais adiante, aceitam filtros de comparação.

Vale lembrar que, para comparações de BSON types diferentes, você deve entender a ordem de [comparação](https://docs.mongodb.com/manual/reference/bson-type-comparison-order/#bson-types-comparison-order).

Os operadores seguem uma sintaxe padrão que é composta por um subdocumento, como no exemplo abaixo.

```js
{ <campo>: { <operador>: <valor> } }
```

Além disso, os operadores são identificados pelo prefixo $ .

<br>

#### Operador $lt
O operador $lt seleciona os documentos em que o valor do atributo filtrado é menor do que (<) o valor especificado.

Veja o exemplo abaixo:

```js
db.inventory.find({ qty: { $lt: 20 } })
```

Essa consulta selecionará todos os documentos na coleção inventory cujo valor do atributo qty é menor do que 20 .

<br>

#### Operador $lte

O operador $lte seleciona os documentos em que o valor do atributo filtrado é menor ou igual (<=) ao valor especificado.

Veja o exemplo abaixo:

```js
db.inventory.find({ qty: { $lte: 20 } })
```

Essa query selecionará todos os documentos na coleção inventory cujo valor do atributo qty é menor ou igual a 20 .

<br>

#### Operador $gt
O operador $gt seleciona os documentos em que o valor do atributo filtrado é maior do que (>) o valor especificado.

Veja o exemplo abaixo:

```js
db.inventory.find({ qty: { $gt: 20 } })
```

Essa query selecionará todos os documentos na coleção inventory cujo valor do atributo qty é maior do que 20 .

<br>

#### 

Operador $gte
O operador $gte seleciona os documentos em que o valor do atributo filtrado é maior ou igual (>=) ao valor especificado.

Veja o exemplo abaixo:

```js
db.inventory.find({ qty: { $gte: 20 } })
```

Essa query selecionará todos os documentos na coleção inventory cujo valor do atributo qty é maior ou igual a 20 .


<br>

#### Operador $eq
O operador $eq seleciona os documentos em que o valor do atributo filtrado é igual ao valor especificado. Esse operador é equivalente ao filtro { campo: <valor> } e não tem nenhuma diferença de performance.

Veja o exemplo abaixo:

```js
db.inventory.find({ qty: { $eq: 20 } })
```

A operação acima é exatamente equivalente a:

```js
db.inventory.find({ qty: 20 })
```

Durante a aula você verá mais exemplos que mostrarão que o $eq é apenas uma maneira de explicitar o operador.

<br>

#### Operador $ne
Esse operador é o contrário do anterior. Ao utilizar o $ne , o MongoDB seleciona os documentos em que o valor do atributo filtrado não é igual ao valor especificado.

```js
db.inventory.find({ qty: { $ne: 20 } })
```

A query acima retorna os documentos da coleção inventory cujo valor do atributo qty é diferente de 20 , incluindo os documentos em que o atributo qty não existe.

<br>

#### Operador $in
A consulta abaixo retorna todos os documentos da coleção inventory em que o valor do atributo qty é 5 ou 15 . E embora você também possa executar essa consulta utilizando o operador $or , que você verá mais à frente no conteúdo, escolha o operador $in para executar comparações de igualdade com mais de um valor no mesmo atributo.

```js
db.inventory.find({ qty: { $in: [ 5, 15 ] } })
```

<br>

#### Operador $nin
O operador $nin seleciona os documentos em que o valor do atributo filtrado não é igual ao especificado no array , ou o campo não existe.

```js
db.inventory.find( { qty: { $nin: [ 5, 15 ] } } )
```

Essa consulta seleciona todos os documentos da coleção inventory em que o valor do atributo qty é diferente de 5 e 15 . Esse resultado também inclui os documentos em que o atributo qty não existe.

<br>
<br>

### Operadores Lógicos

Assim como os operadores de comparação, os operadores lógicos também podem ser utilizados nos mesmos métodos para leitura e atualização de documentos do MongoDB . Eles também ajudam a elaborar consultas mais complexas, juntando cláusulas para retornar documentos que satisfaçam os filtros.

<br>

#### Operador $not
Sintaxe:

```js
{ campo: { $not: { <operador ou expressão> } } }
```

O operador $not executa uma operação lógica de NEGAÇÃO no < operador ou expressão > especificado e seleciona os documentos que não correspondam ao < operador ou expressão > . Isso também inclui os documentos que não contêm o atributo .

Veja o exemplo abaixo:

```js
db.inventory.find({ price: { $not: { $gt: 1.99 } } })
```

Essa consulta seleciona todos os documentos na coleção inventory em que o valor do atributo price é menor ou igual a 1.99 (em outras palavras, não é maior que 1.99), ou em que o atributo price não exista.

É importante destacar que a expressão { $not: { $gt: 1.99 } } retorna um resultado diferente do operador $lte . Ao utilizar { $lte: 1.99 } , os documentos retornados serão somente aqueles em que o campo price existe e cujo valor é menor ou igual a 1.99.

<br>

#### Operador $or
O operador $or executa a operação lógica OU em um array de uma ou mais expressões e seleciona os documentos que satisfaçam ao menos uma das expressões.

Sintaxe:

```js
{ $or: [{ <expression1> }, { <expression2> }, ... , { <expressionN> }] }
```

Considere o exemplo a seguir:


```js
db.inventory.find({ $or: [{ qty: { $lt: 20 } }, { price: 10 }] })
```

Essa consulta seleciona todos os documentos da coleção inventory em que o valor do atributo qty é menor do que 20 ou o valor do atributo price é igual a 10 .

<br>

#### Operador $nor

O operador $nor também executa uma operação lógica de NEGAÇÃO , porém, em um array de uma ou mais expressões, e seleciona os documentos em que todas essas expressões falhem , ou seja, seleciona os documentos em que todas as expressões desse array sejam falsas.

Sintaxe:

```js
{ $nor: [ { <expressão1> }, { <expressão2> }, ...  { <expressãoN> } ] }
```

Veja o exemplo abaixo:


```js
db.inventory.find({ $nor: [{ price: 1.99 }, { sale: true }] })
```

Essa query retorna todos os documentos da coleção inventory que:
- Contêm o atributo price com o valor diferente de 1.99 e o atributo sale com o valor diferente de true;
- Ou contêm o atributo price com valor diferente de 1.99 e não contêm o atributo sale;
- Ou não contêm o atributo price e contêm o atributo sale com valor diferente de true;
- Ou não contêm o atributo price e nem o atributo sale .

Pode parecer complexo, mas você fará mais exercícios para praticar esse operador.

<br>

#### Operador $and
O operador $and executa a operação lógica E num array de uma ou mais expressões e seleciona os documentos que satisfaçam todas as expressões no array. O operador $and usa o que chamamos de avaliação em curto-circuito ( short-circuit evaluation). Se alguma expressão for avaliada como falsa, o MongoDB não avaliará as expressões restantes, pois o resultado final sempre será falso independentemente do resultado delas.

Sintaxe:


```js
{ $and: [{ <expressão1> }, { <expressão2> } , ... , { <expressãoN> }] }
```

<br>

#### Múltiplas expressões especificando o mesmo atributo

Considere o exemplo abaixo:


```js
db.inventory.find({
  and: [
    { price: { $ne: 1.99 } },
    { price: { $exists: true } }
  ]
})
```

Essa consulta seleciona todos os documentos da coleção inventory em que o valor do atributo price é diferente de 1.99 e o atributo price existe.

<br>

#### Múltiplas expressões especificando o mesmo operador

Considere o exemplo abaixo:

```js
db.inventory.find({
  and: [
        { price: { $gt: 0.99, $lt: 1.99 } },
        {
          or: [
            { sale : true },
            { qty : { $lt : 20 } }
          ]
        }
  ]
})
```

Essa consulta seleciona todos os documentos da coleção inventory em que o valor do campo price é maior que 0.99 e menor que 1.99 , E o valor do atributo sale é igual a true , OU o valor do atributo qty é menor do que 20 . Ou seja, essa expressão é equivalente a (price > 0.99 E price < 1.99) (onde o E está implícito na vírgula aqui { $gt: 0.99, $lt: 1.99 } ) E (sale = true OU qty < 20) .

<br>

### Operador $exists


```js
{ campo: { $exists: <boolean> } }
```

Quando o <boolean> é verdadeiro ( true ), o operador $exists encontra os documentos que contêm o atributo , incluindo os documentos em que o valor do atributo é igual a null . Se o <boolean> é falso ( false ), a consulta retorna somente os documentos que não contêm o atributo.
Veja o exemplo abaixo:

```js
db.inventory.find({ qty: { $exists: true } })
```

Essa consulta retorna todos os documentos da coleção inventory em que o atributo qty existe.
Você também pode combinar operadores, como no exemplo abaixo:

```js
db.inventory.find({ qty: { $exists: true, $nin: [ 5, 15 ] } })
```

Essa consulta seleciona todos os documentos da coleção inventory em que o atributo qty existe E seu valor é diferente de 5 e 15 .

<br>

### Método sort()


```js
db.colecao.find().sort({ "campo": "1 ou -1"})
```

Quando existe a necessidade de ordenar os documentos por algum atributo, o método sort() se mostra muito útil. Usando um valor positivo ( 1 ) como valor do atributo, os documentos da consultas são ordenados de forma crescente ou alfabética (também ordena por campos com strings ). Em complemento, usando um valor negativo ( -1 ), os documentos de saída estarão em ordem decrescente ou contra alfabética.
Ele pode ser combinado com o método find() :

```js
db.example.find({}, { value, name }).sort({ value: -1 }, { name: 1 })
```

O sort() só pode ser usado se tiver algum resultado de busca antes:


```js
db.colecao.find().sort({ nomeDoAtributo: 1 }) // certo
db.colecao.sort({ nomeDoAtributo: 1 }) // errado
```

Vamos ver um exemplo?


```js
db.example.insertMany([
    { "name": "Mandioquinha Frita", "price": 14 },
    { "name": "Litrão", "price": 8 },
    { "name": "Torresmo", "price": 16 }
])
```


```js
db.example.find().sort({ "price": 1 }).pretty()

```


```js
// Resultado esperado:
{
        "_id" : ObjectId("5f7dd0582e2738debae74d6c"),
        "name" : "Litrão",
        "price" : 8
}
{
        "_id" : ObjectId("5f7dd0582e2738debae74d6b"),
        "name" : "Mandioquinha Frita",
        "price" : 14
}
{
        "_id" : ObjectId("5f7dd0582e2738debae74d6d"),
        "name" : "Torresmo",
        "price" : 16
}
```


```js
db.example.find().sort({ "price": -1 }, { "name" : 1 }).pretty()
```


```js
// Resultado esperado:
{
        "_id" : ObjectId("5f7dd0582e2738debae74d6d"),
        "name" : "Torresmo",
        "price" : 16
}
{
        "_id" : ObjectId("5f7dd0582e2738debae74d6b"),
        "name" : "Mandioquinha Frita",
        "price" : 14
}
{
        "_id" : ObjectId("5f7dd0582e2738debae74d6c"),
        "name" : "Litrão",
        "price" : 8
}
```

<br>

### Removendo documentos

Para remover documentos de uma coleção temos dois métodos que são utilizados para níveis de remoção diferentes: o deleteOne() e o deleteMany(). Os dois métodos aceitam um documento como parâmetro, que pode conter um filtro simples ou até mesmo um conjunto de expressões para atender aos critérios de seleção.

<br>

#### deleteOne()
Esse método remove apenas um documento, que deve satisfazer o critério de seleção, mesmo que muitos outros documentos também se enquadrem no critério de seleção. Se nenhum valor for passado como parâmetro, a operação removerá o primeiro documento da coleção.

O exemplo abaixo remove o primeiro documento da coleção inventory em que o atributo status é igual a D:

```js
db.inventory.deleteOne({ status: "D" })
```

<br>

#### deleteMany()
Esse método remove todos os documentos que satisfaçam o critério de seleção.
O exemplo abaixo remove todos os documentos da coleção inventory em que o atributo status é igual a A:

```js
db.inventory.deleteMany({ status : "A" })
```

Para remover todos os documentos da coleção, basta não passar nenhum parâmetro para o método deleteMany() :

```js
db.inventory.deleteMany({})

```

<br>

### Removendo um banco de dados

```js
used <nome_do_banco>
db.dropDatabase()

```

### 
### 

```js

```

<br>

# EXERCÍCIOS

>Utilizando a coleção [restaurants](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/exercise-filter-operators-e8e55183a5af1418a8f0d355ad895d13.js), do banco business, construa queries para retornar os seguintes itens:

<br>

**Exercício 1**: Selecione e faça a contagem dos restaurantes presentes nos bairros Queens, Staten Island e Bronx. (utilizando o atributo borough).

<details>
<summary>Mostrar resposta</summary>

<br>

```js
db.restaurants.count(
  { 
    borough: 
      { 
        $in: ['Queens', 'Staten Island', 'Bronx'] 
      } 
  } 
);

```

</details>

<hr>
<br>

**Exercício 2**: Selecione e faça a contagem dos restaurantes que não possuem culinária do tipo American. (utilizando o atributo cuisine).

<details>
<summary>Mostrar resposta</summary>

<br>

```js
db.restaurants.count(
  {
    cuisine: { $ne: 'American' }
  }
);
```

</details>

<hr>
<br>

**Exercício 3**: Selecione e faça a contagem dos restaurantes que possuem avaliação maior ou igual a 8. (utilizando o atributo rating).

<details>
<summary>Mostrar resposta</summary>

<br>

```js
db.restaurants.count(
  {
    rating: { $gte: 8 }
  }
);
```

</details>

<hr>
<br>

**Exercício 4**: Selecione e faça a contagem dos restaurantes que possuem avaliação menor que 4.

<details>
<summary>Mostrar resposta</summary>

<br>

```js
db.restaurants.count(
  {
    rating: { $lt: 4 }
  }
);
```

</details>

<hr>
<br>

**Exercício 5**: Selecione e faça a contagem dos restaurantes que não possuem as avaliações 5, 6 e 7.

<details>
<summary>Mostrar resposta</summary>

<br>

```js
db.restaurants.count(
  {
    rating: { $nin: [5, 6, 7] }
  }
);
```

</details>

<hr>
<br>

**Exercício 6**: Selecione e faça a contagem dos restaurantes que não possuem avaliação menor ou igual a 5, essa consulta também deve retornar restaurantes que não possuem o campo avaliação.

<details>
<summary>Mostrar resposta</summary>

<br>

```js

db.restaurants.count(
  { rating: { $not: { $lte: 5 } } }
);

```

</details>


<hr>
<br>

**Exercício 7**: Selecione e faça a contagem dos restaurantes em que a avaliação seja maior ou igual a 6, ou restaurantes localizados no bairro Brooklyn.

<details>
<summary>Mostrar resposta</summary>

<br>

```js

db.restaurants.find({
  $or: [
    {rating: { $gte: 6 } },
    { borough: 'Brooklyn' }
  ]
}).count();

```

</details>


<hr>
<br>

**Exercício 8**: Selecione e faça a contagem dos restaurantes localizados nos bairros Queens, Staten Island e Brooklyn e possuem avaliação maior que 4.

<details>
<summary>Mostrar resposta</summary>

<br>

```js

db.restaurants.find({ 
  $and: [
    { borough: { $in: ['Queens', 'Staten Island', 'Brooklyn'] } }, 
    { rating: { $gt: 4 } },
  ],
}).count();

```

</details>


<hr>
<br>

**Exercício 9**: Selecione e faça a contagem dos restaurantes onde nem o campo avaliação seja igual a 1, nem o campo culinária seja do tipo American.

<details>
<summary>Mostrar resposta</summary>

<br>

```js

db.restaurants.count(
  { 
    $nor: [
      { rating: 1 }, 
      { cuisine: 'American' }
    ] 
  }
);

```

</details>


<hr>
<br>

**Exercício 10**: Selecione e faça a contagem dos resturantes em que a avaliação seja maior que 6 ou menor que 10, E esteja localizado no bairro Brooklyn, OU não possuem culinária do tipo Delicatessen.

<details>
<summary>Mostrar resposta</summary>

<br>

```js

db.restaurants.count({
  and: [
    { $or: [{ rating: { $gte: 6, $lt: 10 } }] },
    { $or: [{ borough: 'Brooklyn' }, { cuisine: { $ne: 'Delicatessen' } }] },
    ],
});

```

</details>


<hr>
<br>

**Exercício 11**: Ordene alfabeticamente os restaurantes pelo nome (atributo name).

<details>
<summary>Mostrar resposta</summary>

<br>

```js

db.restaurants.find({}, { _id: 0, name: 1 }).sort({ name: 1 });

```

</details>


<hr>
<br>

**Exercício 12**: Ordene os restaurantes de forma descrescente baseado nas avaliações.

<details>
<summary>Mostrar resposta</summary>

<br>

```js

db.restaurants.find({}, { _id: 0, name: 1, rating: 1 }).sort({ rating: -1 });


```

</details>


<hr>
<br>

**Exercício 13**: Remova o primeiro restaurante que possua culinária do tipo Ice Cream, Gelato, Yogurt, Ices.

<details>
<summary>Mostrar resposta</summary>

<br>

```js

db.restaurants.deleteOne({ cuisine: "Ice Cream, Gelato, Yogurt, Ices" });

```

</details>


<hr>
<br>

**Exercício 14**: Remova todos os restaurantes que possuem culinária do tipo American

<details>
<summary>Mostrar resposta</summary>

<br>

```js

db.restaurants.deleteMany({ cuisine: 'American'});

```

</details>


<hr>
<br>

> Para os exercícios a seguir, utilizaremos um banco de dados de super-heróis. Faça o download do arquivo JSON [aqui](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/superheroes-957c961ea234d06d7cfdae73c87d47a6.json).

Após fazer o download do arquivo, importe-o para o MongoDB através da ferramenta `mongoimport`: 
No seu terminal, utilize o seguinte comando (lembre-se de substituir <caminho do arquivo> pelo caminho do arquivo na sua máquina):

```js
mongoimport --db class --collection superheroes <caminho_do_arquivo>
```

Pronto! Você já tem uma base de dados com 734 super-heróis.

<br>

**Exercício 15**: Inspecione um documento para que você se familiarize com a estrutura. Entenda os atributos e os níveis existentes.

<details>
<summary>Mostrar resposta</summary>

<br>

```js



```

</details>


<hr>
<br>

**Exercício 16**: Selecione todos os super-heróis com menos de 1.80m de altura. Lembre-se de que essa informação está em centímetros.

<details>
<summary>Mostrar resposta</summary>

<br>

```js



```

</details>


<hr>
<br>

**Exercício 17**: Retorne o total de super-heróis menores que 1.80m.

<details>
<summary>Mostrar resposta</summary>

<br>

```js



```

</details>


<hr>
<br>

**Exercício 18**: Retorne o total de super-heróis com até 1.80m.

<details>
<summary>Mostrar resposta</summary>

<br>

```js



```

</details>


<hr>
<br>

**Exercício 19**: Selecione um super-herói com 2.00m ou mais de altura.

<details>
<summary>Mostrar resposta</summary>

<br>

```js



```

</details>


<hr>
<br>

**Exercício 20**: Retorne o total de super-heróis com 2.00m ou mais.

<details>
<summary>Mostrar resposta</summary>

<br>

```js



```

</details>


<hr>
<br>

**Exercício 21**: Selecione todos os super-heróis que têm olhos verdes.

<details>
<summary>Mostrar resposta</summary>

<br>

```js



```

</details>


<hr>
<br>

**Exercício 22**: Retorne o total de super-heróis com olhos azuis.

<details>
<summary>Mostrar resposta</summary>

<br>

```js



```

</details>


<hr>
<br>

**Exercício 23**: Utilizando o operador $in , selecione todos os super-heróis com cabelos pretos ou carecas ( "No Hair" ).

<details>
<summary>Mostrar resposta</summary>

<br>

```js



```

</details>


<hr>
<br>

**Exercício 24**: Retorne o total de super-heróis com cabelos pretos ou carecas ( "No Hair" ).

<details>
<summary>Mostrar resposta</summary>

<br>

```js



```

</details>


<hr>
<br>

**Exercício 25**: Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.

<details>
<summary>Mostrar resposta</summary>

<br>

```js



```

</details>


<hr>
<br>

**Exercício 26**: Utilizando o operador $not , retorne o total de super-heróis que não tenham mais de 1.80m de altura.

<details>
<summary>Mostrar resposta</summary>

<br>

```js



```

</details>


<hr>
<br>

**Exercício 27**: Selecione todos os super-heróis que não sejam humanos ou que não sejam maiores do que 1.80m.

<details>
<summary>Mostrar resposta</summary>

<br>

```js



```

</details>


<hr>
<br>

**Exercício 28**: Selecione todos os super-heróis com 1.80m ou 2.00m de altura e que sejam publicados pela Marvel Comics.

<details>
<summary>Mostrar resposta</summary>

<br>

```js



```

</details>


<hr>
<br>

**Exercício 29**: Selecione todos os super-heróis que pesem entre 80kg e 100kg , sejam Humanos ou Mutantes e não sejam publicados pela DC Comics.

<details>
<summary>Mostrar resposta</summary>

<br>

```js



```

</details>


<hr>
<br>

**Exercício 30**: Retorne o total de documentos que não contêm o campo race .

<details>
<summary>Mostrar resposta</summary>

<br>

```js



```

</details>


<hr>
<br>

**Exercício 31**: Retorne o total de documentos que contêm o campo hairColor.

<details>
<summary>Mostrar resposta</summary>

<br>

```js



```

</details>


<hr>
<br>

**Exercício 32**: Remova apenas um documento publicado pela Sony Pictures.

<details>
<summary>Mostrar resposta</summary>

<br>

```js



```

</details>


<hr>
<br>

**Exercício 33**: Remova todos os documentos publicados pelo George Lucas.

<details>
<summary>Mostrar resposta</summary>

<br>

```js



```

</details>


<hr>
<br>
