# Finding data in a Database

### TRADUÇÃO PRO INGLÊS EM CONSTRUÇÃO :construction:

*O que é uma query e quais são os principais tipos de queries*

>Inquirir, ou query , em inglês, é o nome dado aos comandos que você digita dentro de uma janela ou linha de comando com a intenção de interagir de alguma maneira com uma base de dados. No mundo de banco de dados, você pode tanto trazer dados quanto alterá-los, atribuir permissões de acesso e manipulação e muito mais. Vamos dar um olhada nos principais tipos de queries a seguir:

**DDL** : Data Definition Language - todos os comandos que lidam com o esquema, a descrição e o modo como os dados devem existir em um banco de dados:
- `CREATE`: Para criar bancos de dados, tabelas, índices, views, procedures, functions e triggers
- `ALTER`: Para alterar a estrutura de qualquer objeto
- `DROP`: Permite deletar objetos
- `TRUNCATE`: Apenas esvazia os dados dentro de uma tabela, mas a mantém no banco de dados

**DML**: Data Manipulation Language - Comandos que são usados para manipular dados. São utilizados para armazenar, modificar, buscar e excluir dados em um banco de dados. Os comandos e usos mais comuns nesta categoria são:
- `SELECT`: usado para buscar dados em um banco de dados
- `INSERT`: insere dados em uma tabela
- `UPDATE`: altera dados dentro de uma tabela
- `DELETE`: exclui dados de uma tabela

**DCL**: Data Control Language - Focado mais nos comandos que concedem direitos, permissões e outros tipos de controle ao sistema de banco de dados.
- `GRANT`: concede acesso a um usuário
- `REVOKE`: remove acessos concedidos através do comando GRANT

**TCL**: Transactional Control Language - Lida com as transações dentro de suas pesquisas.
- `COMMIT`: muda suas alterações de temporárias para permanentes no seu banco de dados
- `ROLLBACK`: desfaz todo o impacto realizado por um comando
- `SAVEPOINT`: define pontos para os quais uma transação pode voltar. É uma maneira de voltar para pontos específicos de sua query
- `TRANSACTION`: comandos que definem onde, como e em que escopo suas transações são executadas

<br>

# EXERCICIOS

#### [Part 1] `SELECT`
1. Monte uma query que exiba seu nome na tela;
2. Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
3. Monte uma query que, além de **exibir** todas as informações já mencionadas, identifique cada coluna usando o `AS`, que é chamado de `alias` na linguagem **SQL** (**alias** é como um apelido no português);
4. Qual é o resultado de 13 * 8 ? Descubra usando apenas o `SELECT`;
5. Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".

<br>

#### [Part 2] `SELECT`
Vamos agora entrar no banco de dados `sakila` e encontrar as seguintes informações, montando uma query para cada uma:
1. Escreva uma query que selecione todas as colunas da tabela `city` ;
2. Escreva uma query que exiba apenas as colunas `first_name` e `last_name` da tabela `customer`;
3. Escreva uma query que exiba todas as colunas da tabela `rental`;
4. Escreva uma query que exiba o **título**, a **descrição** e a **data de lançamento** dos filmes registrados na tabela `film`;
5. Utilize o `SELECT` para explorar todas as tabelas do banco de dados.

<br>

#### [Part 3] `CONCAT`
Na tabela `sakila.film`:
1. Monte uma query que exiba o **título** e o **ano de lançamento** dos filmes em uma coluna e dê a ela o nome *Lançamento do Filme*.
2. Crie uma query que exiba o **título** do filme e sua **classificação** indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome *Classificação*. (Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis);

Na tabela `sakila.address`:
3.  Monte uma query que exiba a **rua** e o **distrito** de cada registro em uma coluna apenas, e dê a essa coluna o nome *Endereço*.

<br>

#### [Part 4] `DISTINCT`
1. Crie um novo banco de dados chamado `Escola`;
2. Crie uma nova tabela chamada `Alunos`:
  a) Adicione um atributo `Nome`, limite-o com apenas 7 caracteres e configure para o formato UTF8;
  b) Adicione um atributo `Idade` como inteiro;
3. Insira 6 linhas na tabela criada:
  a) Nome: Rafael, Idade: 25 anos
  b) Nome: Amanda, Idade: 30 anos
  c) Nome: Roberto, Idade: 45 anos
  d) Nome: Carol, Idade: 19 anos
  e) Nome: Amanda, Idade: 25 anos
  f) Nome: Carol, Idade: 30 anos
4. Monte uma query para encontrar pares únicos de **nomes** e **idades**. *Quantas linhas você encontraria nesta query?*
5. Monte uma query para encontrar somente os **nomes** únicos. *Quantas linhas você encontraria nesta query?*
6. Monte uma query para encontrar somente as **idades** únicas. *Quantas linhas você encontraria nesta query?*

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

