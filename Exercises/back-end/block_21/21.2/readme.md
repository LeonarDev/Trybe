# 21.2 JOINs, UNIONs e Subqueriesd
> ### :warning: Translation to **English** under construction :construction:

### Habilidades desenvolvidas neste repositório:
- Utilizar INNER JOIN para combinar dados de duas ou mais tabelas
- Utilizar LEFT JOIN e RIGHT JOIN para combinar dados de duas ou mais tabelas
- Utilizar SELF JOIN para fazer join de uma tabela com ela própria
- Unir resultados com UNION e UNION ALL
- Utilizar SUBQUERIES
- Criar queries mais eficientes através do EXISTS

<br>

<!--
## Manipulação de strings
Uma das responsabilidades das pessoas que lidam com o registro de informações em um banco de dados é se certificar de que esses dados estão coerentes, normalizados e cadastrados no formato correto. O MySQL possui algumas funções de manipulação de string que facilitam essas tarefas.
As principais podem ser vistas a seguir:

```sql
-- Converte o texto da string para CAIXA ALTA
SELECT UCASE('Oi, eu sou uma string');

-- Converte o texto da string para caixa baixa
SELECT LCASE('Oi, eu sou uma string');

-- Substitui as ocorrências de uma substring em uma string
SELECT REPLACE('Oi, eu sou uma string', 'string', 'cadeia de caracteres');

-- Retorna a parte da esquerda de uma string de acordo com o
-- número de caracteres especificado
SELECT LEFT('Oi, eu sou uma string', 3);

-- Retorna a parte da direita de uma string de acordo com o
-- número de caracteres especificado
SELECT RIGHT('Oi, eu sou um string', 6);

-- Exibe o tamanho, em caracteres, da string
SELECT LENGTH('Oi, eu sou uma string');

-- Extrai parte de uma string de acordo com o índice de um caractere inicial
-- e a quantidade de caracteres a extrair
SELECT SUBSTRING('Oi, eu sou uma string', 5, 2);

-- Se a quantidade de caracteres a extrair não for definida,
-- então a string será extraída do índice inicial definido, até o seu final
SELECT SUBSTRING('Oi, eu sou uma string', 5);
```

<br>

## Condicionais

```sql
-- Sintaxe:
SELECT IF(condicao, valor_se_verdadeiro, valor_se_falso);

SELECT IF(idade >= 18, 'Maior de idade', 'Menor de Idade')
FROM pessoas;

SELECT IF(aberto, 'Entrada permitida', 'Entrada não permitida')
FROM estabelecimentos;

-- Exemplo utilizando o banco sakila:
SELECT first_name, IF(active, 'Cliente Ativo', 'Cliente Inativo') AS status
FROM sakila.customer
LIMIT 20;
```

Em situações em que é preciso comparar mais de uma condição, é preferível utilizar o `CASE`.

```sql
-- Sintaxe:
SELECT CASE
  WHEN condicao THEN valor
  ELSE valor padrao
END;

SELECT
    nome,
    nivel_acesso,
    CASE
        WHEN nivel_acesso = 1 THEN 'Nível de acesso 1'
        WHEN nivel_acesso = 2 THEN 'Nível de acesso 2'
        WHEN nivel_acesso = 3 THEN 'Nível de acesso 3'
        ELSE 'Usuário sem acesso'
    END AS nivel_acesso
FROM permissoes_usuario;

-- Exemplo utilizando a tabela sakila.film:
SELECT
    first_name,
    email,
    CASE
        WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
        WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
        WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
        ELSE 'não classificado'
    END AS valor
FROM sakila.customer
LIMIT 10;
```

<br>

## Adição, Subtração, Multiplicação e Divisão

```sql
SELECT 5 + 5;
SELECT 5 - 5;
SELECT 5 * 5;
SELECT 5 / 5;
```

Podemos, também, usar as colunas diretamente como base para os cálculos, caso necessário.

```sql
SELECT rental_duration + rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration - rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration / rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration * rental_rate FROM sakila.film LIMIT 10;
```

## Divisão de inteiros com DIV e como encontrar seus restos com o MOD
O DIV retorna o resultado inteiro de uma divisão, ignorando as casas decimais de um número. Veja os exemplos abaixo:


```sql
SELECT 10 DIV 3; -- 3
SELECT 10 DIV 2; -- 5
SELECT 14 DIV 3; -- 4
SELECT 13 DIV 2; -- 6
```

Já o operador MOD retorna o resto de uma divisão como resultado. Por exemplo:

```sql
SELECT 10 MOD 3; -- 1
SELECT 10 MOD 2; -- 0
SELECT 14 MOD 3; -- 2
SELECT 13 MOD 2; -- 1
SELECT 10.5 MOD 2; -- 0.5, ou seja, 2 + 2 + 2 + 2 + 2 = 10, restando 0.5
```

<br>

## Arredondando Valores
Ter a capacidade de encontrar aproximações de valores é algo extremamente valioso na criação de relatórios e gráficos, que são utilizados por softwares de todos os tipos. O MySQL tem algumas funções que te ajudam a resolver isso. Vamos conhecê-las agora.
O ROUND arredonda os números de acordo com sua parte decimal. Se for maior ou igual a 0.5, o resultado é um arredondamento para cima. Caso contrário, ocorre um arredondamento para baixo. Veja os exemplos abaixo:

```sql
-- Podemos omitir ou especificar quantas casas decimais queremos
SELECT ROUND(10.4925); -- 10
SELECT ROUND(10.5136); -- 11
SELECT ROUND(-10.5136); -- -11
SELECT ROUND(10.4925, 2); -- 10.49
SELECT ROUND(10.4925, 3); -- 10.493
```

O arredondamento sempre para cima pode ser feito com o CEIL :
```sql
SELECT CEIL(10.51); -- 11
SELECT CEIL(10.49); -- 11
SELECT CEIL(10.2); -- 11
```

O arredondamento sempre para baixo pode ser feito com o FLOOR :
```sql
SELECT FLOOR(10.51); -- 10
SELECT FLOOR(10.49); -- 10
SELECT FLOOR(10.2); -- 10
```

<br>

## Exponenciação e Raiz Quadrada
Para cálculos de exponenciação e raiz quadradas, podemos utilizar as funções POW e SQRT , respectivamente.
Elevando um número X à potência Y usando a função `POW`:

```sql
SELECT POW(2, 2); -- 4
SELECT POW(2, 4); -- 16
```

Encontrando a raiz quadrada de um valor usando `SQRT`:

```sql
SELECT SQRT(9); -- 3
SELECT SQRT(16); -- 4
```

<br>

## Gerando valores aleatórios

```sql
-- Para gerar um valor aleatório entre 0 e 1:
SELECT RAND();

-- Para gerar um valor entre 7 e 13:
SELECT ROUND(7 + (RAND() * 6));

-- O cálculo que é feito é o seguinte: (7 + (0.0 a 1.0 * 6))
```

<br>

## Trabalhando com datas
Conseguimos fazer algumas coisas legais, como por exemplo consultar a data e hora atuais usando as seguintes funções:

```sql
SELECT CURRENT_DATE(); -- YYYY-MM-DD
SELECT NOW(); -- YYYY-MM-DD HH:MM:SS
```


Também podemos calcular a diferença em dias entre duas datas usando o `DATEDIFF` e a diferença de tempo entre dois horários usando o `TIMEDIFF`. Em ambos os casos, o segundo valor é subtraído do primeiro para calcular o resultado.

```sql
-- 30, ou seja, a primeira data é 30 dias depois da segunda
SELECT DATEDIFF('2020-01-31', '2020-01-01');

-- -30, ou seja, a primeira data é 30 dias antes da segunda
SELECT DATEDIFF('2020-01-01', '2020-01-31');

-- -01:00:00, ou seja, há 1 hora de diferença entre os horários
SELECT TIMEDIFF('08:30:10', '09:30:10');
```

E por fim, podemos extrair qualquer parte de uma data de uma coluna:

```sql
SELECT DATE(data_cadastro); -- YYYY-MM-DD
SELECT YEAR(data_cadastro); -- Ano
SELECT MONTH(data_cadastro); -- Mês
SELECT DAY(data_cadastro); -- Dia
SELECT HOUR(data_cadastro); -- Hora
SELECT MINUTE(data_cadastro); -- Minuto
SELECT SECOND(data_cadastro); -- Segundo
```

Outro ponto interessante, é que também podemos usar `CURRENT_DATE()` e `NOW()` em conjunto com os comandos acima para encontrar resultados dinâmicos da seguinte maneira:

```sql
SELECT YEAR(CURRENT_DATE()); -- retorna o ano atual
SELECT HOUR(NOW()); -- retorna a hora atual
```

<br>

## Utilizando as funções de agregação AVG , MIN , MAX , SUM e COUNT
Existem certos tipos de cálculos que são usados muito frequentemente e não devem ser feitos manualmente toda vez. Por isso temos as seguintes funções que analisam todos os registros de uma determinada coluna e retornam um valor depois de comparar e avaliar todos os registros.

```sql
-- Usando a coluna replacement_cost (valor de substituição) vamos encontrar:
SELECT AVG(replacement_cost) FROM sakila.film; -- 19.984000 (Média entre todos registros)
SELECT MIN(replacement_cost) FROM sakila.film; -- 9.99 (Menor valor encontrado)
SELECT MAX(replacement_cost) FROM sakila.film; -- 29.99 (Maior valor encontrado)
SELECT SUM(replacement_cost) FROM sakila.film; -- 19984.00 (Soma de todos registros)
SELECT COUNT(replacement_cost) FROM sakila.film; -- 1000 registros encontrados (Quantidade)
```

<br>

## Exibindo e filtrando dados de forma agrupada com GROUP BY e HAVING
Os resultados de uma query podem ser agrupados por uma ou mais colunas usando o `GROUP BY` , o que faz com que todos os registros que têm o mesmo valor para tais colunas sejam exibidos juntos. O `GROUP BY` também pode ser usado em conjunto com as funções de agregação que vimos anteriormente.

O `GROUP BY` pode ser construído da seguinte forma:

```sql
SELECT coluna(s) FROM tabela
GROUP BY coluna(s);
```

Uma das formas como podemos utilizar o `GROUP BY` é agrupar os registros pelo valor de uma coluna, exibindo apenas um registro de cada valor, como é feito com a coluna `first_name` a seguir.

```sql
SELECT first_name FROM sakila.actor
GROUP BY first_name;

```

<img src='./img/1.png'>

Como dito, o GROUP BY removerá duplicações, retornando apenas um valor da coluna usada no agrupamento.

Porém é mais comum utilizar o GROUP BY em conjunto com o `AVG`, `MIN`, `MAX`, `SUM` ou `COUNT`. Por exemplo, caso queiramos saber quantos registros existem na tabela de cada nome registrado, podemos usar o `COUNT()`. Assim, teremos uma informação mais fácil de ser compreendida.

```sql
SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;
```

<img src='./img/2.png'>

Tendo visto isso, agora vamos explorar como utilizar o GROUP BY em conjunto com as diversas funções de agregação que foram estudadas até aqui, através alguns exemplos feitos com o nosso banco de dados sakila.

```sql
-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;
```

<img src='./img/3.png'>

Média de duração dos filmes por classificação indicativa

<br>
<br>

<img src='./img/4.png'>

Valores mínimos de substituição dos filmes por classificação indicativa

<br>
<br>

<img src='./img/5.png'>

Valores máximos de substituição dos filmes por classificação indicativa

<br>
<br>

<img src='./img/6.png'>

Soma total do custo de substituição dos filmes por classificação indicativa

<br>
<br>

## Filtrando Resultados do `GROUP BY` com `HAVING`

Podemos usar o `HAVING` para filtrar resultados agrupados, assim como usamos o `SELECT...WHERE` para filtrar resultados individuais.

A query a seguir busca o nome e a quantidade de nomes cadastrados na tabela `sakila.actor` e os agrupa por quantidade. Por fim, filtramos os resultados agrupados usando o `HAVING`, para que somente os nomes que estão cadastrados duas ou mais vezes sejam exibidos.

```sql
SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;

-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação,
-- melhorando a leitura do resultado
SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

-- Observação: o alias não funciona com strings para o HAVING,
-- então use o underline ("_") para separar palavras
-- Ou seja, o exemplo abaixo não vai funcionar
SELECT first_name, COUNT(*) AS 'nomes cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING 'nomes cadastrados' > 2;

```

É importante entender que quando usamos o HAVING estamos filtrando somente os resultados gerados após o GROUP BY ter sido executado.



<!--
```sql

```

```
```
-->

<br>

# EXERCÍCIOS

#### [Part 1] Manipulação de strings
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