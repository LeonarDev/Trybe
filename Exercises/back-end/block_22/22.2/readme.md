# 22.2 Normalization, Normal Forms and Duḿps

> ### :warning: Translation to **English** under construction :construction:

### Habilidades desenvolvidas neste repositório:
- Entender o que é a normalização
- Saber discernir se uma tabela está ou não normalizada
- Aplicar a 1ª Forma Normal
- Aplicar a 2ª Forma Normal
- Aplicar a 3ª Forma Normal
- Aprender a criar e restaurar backups usando o MySQL Workbench e também o comando dump
<br>

### 1ª Forma Normal
Para iniciar a organização de um banco de dados, devemos nos atentar para a primeira forma normal - base de todas as outras. Seus preceitos são:
- Colunas devem possuir apenas um valor
- Valores em uma coluna devem ser do mesmo tipo de dados
- Cada coluna deve possuir um nome único
- A ordem dos dados não deve afetar a integridade do banco de dados

<br>

### 2ª Forma Normal
Para a Segunda Forma Normal , devemos atentar para o seguinte:
- A tabela deve estar na 1ª Forma Normal
- A tabela não deve possuir dependências parciais.


Uma dependência parcial pode ser considerada como qualquer coluna que não depende exclusivamente da chave primária da tabela para existir. Por exemplo, considere uma tabela `Pessoas Estudantes` que possui as seguintes colunas:

| id |	nome |	data_matricula |	curso |
|:--:|:-----:|:---------------:|:------:|
|  1 | Samuel|	  2020-09-01   |	Física |
|  2 | Joana |	  2020-08-15   |Biologia |
|  3 |	Taís |	  2020-07-14   |Contabilidade |
|  4 | André |	  2020-06-12   |Biologia |

A coluna curso pode ser considerada uma dependência parcial pois poderiámos mover os valores dessa coluna para uma outra tabela e os dados dessa tabela podem existir independente de existir uma pessoa estudante vinculada a esse curso ou não. Dessa forma depois de normalizar teríamos duas tabelas:

**Cursos**
|id |	nome|
|:-:|:---:|
| 1 |Física|
| 2	|Biologia|
| 3	|Contabilidade|

**Pessoas Estudantes**

| id |	  nome 	 |data_matricula|	curso_id |
|:--:|:---------:|:------------:|:--------:|
| 1  |	 Samuel  |	2020-09-01	|    1     |
| 2  |	 Joana   |  2020-08-15  |    2     |
| 3  |	 Taís    |	2020-07-14  |  	 3     |
| 4  |	 André   |  2020-06-12  |    2     |

Dessa forma, aplicamos a **segunda forma normal** na tabela `Pessoas Estudantes`. 
Lembre-se que a função da normalização não é necessariamente reduzir o número de colunas mas remover redundâncias e possíveis anomalias de inclusão/alteração ou remoção.

<br>

### 3ª Forma Normal
Por fim, a Terceira Forma Normal estabelece que:
- A tabela deve estar na 1ª e 2ª Formas Normais;
- A tabela não deve conter atributos (colunas) que não sejam totalmente dependentes na PK (chave primária).


<br>

[Resumo](https://docs.microsoft.com/pt-br/office/troubleshoot/access/database-normalization-description#normalizing-an-example-table) sobre cada uma das formas normais.

<br>

# EXERCÍCIOS

#### [1] Normalize a tabela a seguir para a 1ª Forma Normal.

<img src='./img/1.png'>

<br>

#### [2] Usando a estrutura (já normalizada para 1ª Forma Normal) da tabela anterior, transforme-a agora na 2ª Forma Normal.

<br>

#### [3] Monte uma query que:
- Crie um banco de dados chamado `normalization`;
- Crie todas as tabelas resultantes do exercício 2 (na 2ª Forma Normal);
- Popule todas as tabelas com os dados fornecidos nos exercícios.
