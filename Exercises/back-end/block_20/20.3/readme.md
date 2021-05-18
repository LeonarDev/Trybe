# Filtrando dados de forma específica

### TRADUÇÃO PRO INGLÊS EM CONSTRUÇÃO :construction:

- Filtrar resultados de consultas com o `WHERE`.
- Utilizar operadores booleanos e relacionais em consultas.
- Criar consultas mais dinâmicas e maleáveis com `LIKE`.
- Fazer consultas que englobam uma faixa de resultados com `IN` e `BETWEEN`.
- Encontrar e separar resultados que incluem datas.

Precedência dos operadores no `WHERE`:
<img src='./precedencia.png'>

Sendo assim, quando se faz a seguinte query:

```sql
SELECT * FROM sakila.payment
WHERE amount = 0.99 OR amount = 2.99 AND staff_id = 2;
```
Como o operador `AND` tem preferência sobre o operador `OR`, ele é avaliado primeiro. 

Então os registros buscados são aqueles nos quais `amount = 2.99` e `staff_id = 2`. Na sequência, são buscados os registros nos quais `amount = 0.99`, independente do valor de `staff_id`. 

Os valores retornados serão os resultados dessas duas buscas. Ou seja, a query é executada como se tivesse os seguintes parênteses: `amount = 0.99 OR (amount = 2.99 AND staff_id = 2)`.

<br>

Agora, quando executar a seguinte query:

```sql
SELECT * FROM sakila.payment
WHERE (amount = 0.99 OR amount = 2.99) AND staff_id = 2;

```

Primeiramente, a expressão dentro dos parênteses é avaliada, e todos os resultados que satisfazem a condição `amount = 0.99 OR amount = 2.99` são retornados. 

Na sequência, a expressão do lado direito do `AND` é avaliada, e todos os resultados que satisfazem a condição `staff = 2` são retornados. O `AND` então compara o resultado de ambos os lados e faz com que somente os resultados que satisfazem ambas as condições sejam retornados.

<br>

# EXERCICIOS

#### [Part 1] Entre no banco de dados `sakila` e siga as instruções (e guarde as queries para conferir posteriormente):

Guia de como a **classificação indicativa** é usada no banco de dados `sakila`. Consulte-a ao fazer os desafios propostos.

**G** = permitido para todos
**PG** = permitido para crianças menores de 13 anos
**PG-13** = permitido para pessoas com mais de 13 anos
**R** = permitido para pessoas com mais de 17 anos
**NC-17** = permitido apenas para adultos

1. Precisamos identificar os dados do cliente com o e-mail `LEONARD.SCHOFIELD@sakilacustomer.org`.
2. Precisamos de um relatório dos nomes dos clientes, em **ordem alfabética**, que não estão mais ativos no nosso sistema e pertencem à loja com o `id = 2`, e não inclua o cliente `KENNETH` no resultado.
3. O setor financeiro quer saber título, descrição, ano de lançamento e valor do custo de substituição ( replacement_cost ), dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em **ordem alfabética** pelo título.
4. Quantos clientes estão **ativos** na loja `1`?
5. Mostre todos os detalhes dos clientes que **não** estão ativos na loja `1`.
6. Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a **menor** taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em **ordem alfabética** pelo título.

<br>

#### [Part 2] 
1. 
2. 
3. 
4. 
5. 

<br>

#### [Part 3] 
1. 
2. 
3. 

<br>

#### [Part 4]
1. 
2. 
3. 
4. 
5. 
6. 

<br>

#### [Part 5] `COUNT`
Na tabela `sakila.staff`:
1. Monte uma query para encontrar a quantidade de **senhas** cadastradas;
2. Monte uma query para encontrar a quantidade de **pessoas** trabalhando;
3. Monte uma query para encontrar a quantidade de **emails** cadastrados

<br>

#### [Part 6] `LIMIT` e `OFFSET`
1. Monte uma query para limitar o resultado da seleção da tabela `rental` em 10 linhas;
2. Monta uma query para limitir o resultado da seleção da tabela `rental` em 10 linhas, porém pule as 3 primeiras;

<br>

#### [Part 7] Misturando tudo com ORDER BY
1. Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
2. Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação .
3. Escreva uma query que exiba apenas os sobrenomes únicos cadastrados na tabela actor .
Crie queries para descobrir o seguinte:
4. Quantos **filmes** temos cadastrados?
5. Quantos **clientes** temos registrados?
6. Quantos **sobrenomes únicos** temos na tabela `actor`;
7. Quantas **categorias** de filmes o banco `sakila` possui?
8. Quantos países são atendidos pela `sakila`?
9. Vá até a tabela `language` do `sakila` e crie uma pesquisa que mostre os **5 idiomas cadastrados**, mas não mostre o idioma `english`.
10. Vá até a tabela `film` e selecione **todos** os dados da tabela. Pronto, fez isso?
11. Agora vamos tentar fazer o seguinte: Crie uma query para encontrar os **20 primeiros filmes**, incluindo o **título**, o **ano de lançamento**, a **duração**, a **classificação indicativa** e o **custo de substituição**. **Ordene** os resultados pelos filmes com a *maior duração* e depois pelo *menor custo de substituição*.

<br>

#### [Part 8] Para realizar os próximos exercícios, restaure o seguinte banco de dados:

```sql
DROP SCHEMA IF EXISTS Scientists;
CREATE SCHEMA Scientists;
USE Scientists;

CREATE TABLE Scientists (
  SSN INT,
  Name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);

CREATE TABLE Projects (
  Code CHAR(4),
  Name CHAR(50) NOT NULL,
  Hours INT,
  PRIMARY KEY (Code)
);

CREATE TABLE AssignedTo (
  Scientist INT NOT NULL,
  Project CHAR(4) NOT NULL,
  PRIMARY KEY (Scientist, Project),
  FOREIGN KEY (Scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (Project) REFERENCES Projects (Code)
);

INSERT INTO Scientists(SSN,Name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');

 INSERT INTO Projects (Code, Name, Hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);

 INSERT INTO AssignedTo (Scientist, Project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');
```
>Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos deste [link](https://creativecommons.org/licenses/by-sa/3.0/).

1. Escreva uma query para ****exibir**** a string **"This is SQL Exercise, Practice and Solution"**.
2. Escreva uma query para ****exibir**** três números em três colunas.
3. Escreva uma query para **exibir** a soma dos números 10 e 15.
4. Escreva uma query para **exibir** o resultado de uma expressão aritmética qualquer.
5. Escreva uma query para **exibir** todas as informações de todos os **cientistas**.
6. Escreva uma query para **exibir** o **nome** como "Nome do Projeto" e as **horas** como "Tempo de Trabalho" de cada projeto.
7. Escreva uma query para **exibir** o **nome** dos cientistas em **ordem alfabética**.
8. Escreva uma query para **exibir** o **nome** dos **Projetos** em **ordem alfabética descendente**.
9. Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.
10. Escreva uma query para **exibir** o **nome** e as **horas** dos três **projetos** com a maior quantidade de horas.
11. Escreva uma query para **exibir** o **código** de todos os projetos da tabela `AssignedTo` sem que haja repetições.
12. Escreva uma query para **exibir** o **nome** do **projeto** com maior quantidade de horas.
13. Escreva uma query para **exibir** o **nome** do segundo **projeto** com menor quantidade de horas.
14. Escreva uma query para **exibir** todas as informações dos cinco **projetos** com a menor quantidade de horas.
15. Escreva uma query que exiba a string **"Existem Number cientistas na tabela Scientists."**, em que `Number` se refira a quantidade de **cientistas**.

<br>

#### [Part 9] Para realizar os próximos exercícios, restaure o seguinte banco de dados:

```sql
DROP SCHEMA IF EXISTS PiecesProviders;
CREATE SCHEMA PiecesProviders;
USE PiecesProviders;

CREATE TABLE Pieces (
  Code INTEGER PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);

CREATE TABLE Providers (
  Code VARCHAR(40) PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);

CREATE TABLE Provides (
  Piece INTEGER,
  FOREIGN KEY (Piece) REFERENCES Pieces (Code),
  Provider VARCHAR(40),
  FOREIGN KEY (Provider) REFERENCES Providers (Code),
  Price INTEGER NOT NULL,
  PRIMARY KEY (Piece , Provider)
);

INSERT INTO Providers(Code, Name)
  VALUES ('HAL', 'Clarke Enterprises'),
    ('RBT', 'Susan Calvin Corp.'),
    ('TNBC', 'Skellington Supplies');

INSERT INTO Pieces(Code, Name)
  VALUES (1, 'Sprocket'),
    (2, 'Screw'),
    (3, 'Nut'),
    (4, 'Bolt');

INSERT INTO Provides(Piece, Provider, Price)
  VALUES (1, 'HAL', 10),
    (1, 'RBT', 15),
    (2, 'HAL', 20),
    (2, 'RBT', 25),
    (2, 'TNBC', 14),
    (3, 'RBT', 50),
    (3, 'TNBC', 45),
    (4, 'HAL', 5),
    (4, 'RBT', 7);
```

>Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos deste [link](https://creativecommons.org/licenses/by-sa/3.0/).

1. Escreva uma query para **ordenar** o **nome** das empresas de forma alfabética descendente e que retorne somente o código e o nome da primeira empresa.

2. Escreve uma query para **exibir** todas as informações das cinco peças com os maiores preços.

3. Escreva uma query para **exibir** o **nome** das empresas e **preço** das peças, começando a lista a partir do 3º item, e exibindo o preço das quatro peças mais caras.

4. Escreva uma query para **exibir** a string **"A peça mais cara é a: *Piece* , provida pela empresa *Provider* e custa *Price* reais."**, essa query deve retornar somene uma única string, sendo que Price se refere ao maior preço.

