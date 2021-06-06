# 22.3 Transforming ideas into a database model - Part 2

> ### :warning: Translation to **English** under construction :construction:

### Habilidades desenvolvidas neste repositório:
- Clonar tabelas existentes;
- Lidar com `VIEWs`;
- Alterar tabelas existentes;
- Deletar uma tabela;
- Usar um `INDEX`.

<br>


### Clonar tabelas existentes

```sql

-- Sintaxe:
CREATE TABLE nome_para_nova_tabela LIKE tabela_a_ser_clonada;

-- Exemplo:
CREATE TABLE actor_clone LIKE sakila.actor;

```

- Esse comando não copia os dados, apenas a estrutura;
- Caso não especifique qual banco de dados utilizar, a nova tabela será inserida no banco que estiver ativo no momento da execução. Sendo assim, sempre especifique o banco de dados antes.

```sql

USE nome_do_banco_de_dados;

CREATE TABLE nome_para_nova_tabela LIKE tabela_a_ser_clonada;

```

<br>

### Anatomia de uma `VIEW`

```sql

-- Defina em qual banco a view será criada
USE nome_do_banco_de_dados;

-- Comando para criar a view
CREATE VIEW nome_da_view AS query;

```

#### Exemplo de uso

Suponha que a gerência quer ter uma maneira simples para sempre saber quem são os top 10 clientes que mais compram com a empresa. Pode-se criar uma view para resolver isso!

```sql

CREATE VIEW top_10_customers AS
  SELECT c.customer_id, c.first_name, SUM(p.amount) AS total_amount_spent
  FROM sakila.payment p
    INNER JOIN 
      sakila.customer c ON p.customer_id = c.customer_id
  GROUP BY customer_id
  ORDER BY total_amount_spent DESC
  LIMIT 10;

```


Agora, caso alguém precise ter acesso a essa informação, você pode consultar a tabela temporária (`VIEW`) diretamente, sem a necessidade de montar uma nova query:

```sql

SELECT * FROM top_10_customers;

```

<img src='./img/1.png'>

<br>

Para excluir uma `VIEW`, use o seguinte comando: 

```sql

DROP VIEW nome_da_view;

```

<br>

### Tudo que você deve saber sobre o `ALTER TABLE`
Algo extremamente comum durante o ciclo de desenvolvimento de software é a necessidade constante de fazer melhorias na estrutura do banco de dados. As tabelas são uma dessas estruturas que podem sofrer alterações.

Ao executar o bloco de código abaixo, a tabela `noticia` será criada. Essa tabela será utilizada como exemplo para testar modificações em sua estrutura.

```sql

USE sakila;
CREATE TABLE noticia(
    noticia_id INT PRIMARY KEY,
    titulo VARCHAR(100),
    historia VARCHAR(300)
) engine = InnoDB;

```

Abaixo, algumas das alterações que podem ser feitas em uma tabela.

```sql

-- Adicionar uma nova coluna
ALTER TABLE noticia ADD COLUMN data_postagem date NOT NULL;

-- Modificar o tipo e propriedades de uma coluna
ALTER TABLE noticia MODIFY noticia_id BIGINT;

-- Adicionar incremento automático a uma coluna
-- (especifique o tipo da coluna + auto_increment)
ALTER TABLE noticia MODIFY noticia_id BIGINT auto_increment;

-- Alterar o tipo e nome de uma coluna
ALTER TABLE noticia CHANGE historia conteudo_postagem VARCHAR(1000) NOT NULL;

-- Dropar/Excluir uma coluna
ALTER TABLE noticia DROP COLUMN data_postagem;

-- Adicionar uma nova coluna após outra
ALTER TABLE noticia ADD COLUMN data_postagem DATETIME NOT NULL AFTER titulo;

```

Com os comandos acima, foram cobertas as operações mais comuns que você deve saber para alterar uma tabela. Para confirmar se a estrutura da sua tabela foi alterada corretamente, você pode usar o comando `SHOW COLUMNS FROM nome_da_tabela`. 
Veja o exemplo abaixo:

```sql

SHOW COLUMNS FROM sakila.noticia;


```

<img src='./img/2.png'>

<br>

### `INDEX`

#### Pontos positivos:
- Acelera as queries (SELECT);
- Permite tornar uma coluna com valores únicos (UNIQUE);
- Permite buscar em grandes pedaços de textos (FULLTEXT INDEX);
- Aceleram as operações de update que usam WHERE.

#### Pontos negativos:
- Ocupam espaço em disco;
- Tornam lentas as operações de INSERT, UPDATE E DELETE, porque cada índice precisa ser atualizado junto com os dados.


#### 1. Criando um index após ter criado uma tabela:


```sql

--VALORES NUMÉRICOS
CREATE INDEX nome_index ON tabela(coluna);


--VALORES GRANDES
CREATE FULLTEXT INDEX nome_index ON tabela(coluna);

```
<br>

#### 2. Criando um index junto com a criação da tabela:

```sql

CREATE DATABASE IF NOT EXISTS pizzaria;

USE pizarria;

CREATE TABLE pizzas(
  pizza_id INT PRIMARY KEY,
  sabor VARCHAR(100),
  preco DECIMAL(5,2),
  INDEX sabor_index(sabor)
) ENGINE=InnoDB;

```

<br>

#### 3. Criando um index alterando uma tabela:

```sql

ALTER TABLE nome_tabela
ADD INDEX nome_index(nome_coluna);

```

<br>

#### Resumo de opções:

```sql

-- Criando um índice em uma coluna
CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
ON tabela (coluna);

-- Criando um índice composto, em duas ou mais colunas
CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
ON tabela (coluna1, coluna2);

-- Excluindo índices
DROP INDEX nome_do_indice ON tabela;

```

<br>



<!--


```sql
```

<br>





# EXERCÍCIOS

### [Part 1] Manipulação de strings
1. Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.

2. Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?'.

3. Utilizando uma query , encontre quantos caracteres temos em 'Uma frase qualquer' .

4. Extraia e retorne a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas' .

5. Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.

<br>

### [Part 2] Condicionais
1. Usando o IF na tabela sakila.film , exiba o id do filme , o título e uma coluna extra chamada 'conheço o filme?' , em que deve-se avaliar se o nome do filme é ' ACE GOLDFINGER '. Caso seja, exiba "Já assisti a esse filme". Caso contrário, exiba "Não conheço o filme". Não esqueça de usar um alias para renomear a coluna da condicional.

2. Usando o CASE na tabela sakila.film , exiba o título , a classificação indicativa ( rating ) e uma coluna extra que vamos chamar de 'público-alvo' , em que classificaremos o filme de acordo com as seguintes siglas:
- G: "Livre para todos";
- PG: "Não recomendado para menores de 10 anos";
- PG-13: "Não recomendado para menores de 13 anos";
- R: "Não recomendado para menores de 17 anos";
- Se não cair em nenhuma das classificações anteriores: "Proibido para menores de idade".

<br>

### [Part 3] DIV e MOD
1. Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar. Chame essa coluna de 'Par ou Ímpar' , onde ela pode dizer 'Par' ou 'Ímpar'.

2. Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?

3. Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?

<b3>

### [Part 4] Arredondando Valores
1. Monte uma query que gere um valor entre 15 e 20.

2. Monte uma query que exiba o valor arredondado de 15.75 com uma precisão de 5 casas decimais.

3. Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?

4. Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?

<br>

### [Part 5] Trabalhando com datas
1. Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.

2. Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00' .

<br>

### [Part 6] Funções de agregação
1. Monte uma query que exiba a média de duração dos filmes e dê o nome da coluna de 'Média de Duração';

2. Monte uma query que exiba a duração mínima dos filmes como 'Duração Mínima';

3. Monte uma query que exiba a duração máxima dos filmes como 'Duração Máxima';

4. Monte uma query que exiba a soma de todas as durações como 'Tempo de Exibição Total';

5. Monte uma query que exiba e finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.

<br>

### [Part 7] GROUP BY
1. Monte uma query que exiba a quantidade de clientes cadastrados na tabela `sakila.customer` que estão ativos e a quantidade que estão inativos.

2. Monte uma query para a tabela `sakila.customer` que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID da loja, o status dos clientes (ativos ou inativos) e a quantidade de clientes por status.

3. Monte uma query que exiba a média de duração por classificação indicativa (`rating`) dos filmes cadastrados na tabela `sakila.film` . Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.

4. Monte uma query para a tabela `sakila.address` que exiba o nome do distrito e a quantidade de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.

<br>

### [Part 8] HAVING
1. Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.

```sql
    SELECT rating, AVG(length)
    FROM sakila.film
    GROUP BY rating;
```

2. Usando a query a seguir, exiba apenas os valores de total de substituição de custo que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.

```sql
    SELECT rating, SUM(replacement_cost)
    FROM sakila.film
    GROUP by rating;
```

<br>

### [Part 9] Todas as funções deste bloco
Para realizar os exercícios propostos para o dia, faremos uso da tabela `employees` do banco de dados `hr`. O banco de dados deve ser gerado e restaurado usando este [arquivo SQL](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/hr-cebf8bc2a5bb252bc470ae28943604c6.sql).


1. Escreva uma query que exiba o maior salário da tabela.

2. Escreva uma query que exiba a diferença entre o maior e o menor salário.

3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.

4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.

5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.

6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).

7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ).

8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).

9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( IT_PROG ).

10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .

11. Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777 .

12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.

13. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e ano no qual foi contratado (exiba somente o ano).

14. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).

15. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e mês no qual foi contratado (exiba somente o mês).

16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.

17. Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.

18. Escreva uma query que exiba as seguintes informações de cada funcionário: nome , sobrenome , tempo que trabalha na empresa (em dias).