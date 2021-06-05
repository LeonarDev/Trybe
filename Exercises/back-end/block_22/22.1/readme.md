# 22.1 Transforming ideas into a database model - Part 1

> ### :warning: Translation to **English** under construction :construction:

### Habilidades desenvolvidas neste repositório:
- Modelar um banco de dados;
- Identificar entidades , atributos e relacionamentos ;
- Construir um diagrama entidade-relacionamento (diagrama ER);
- Criar um banco de dados;
- Criar e modelar tabelas com base em um diagrama ER. 

<br>

### Criando um banco de dados para conter suas tabelas

```sql
-- Cria um banco de dados com o nome especificado.
CREATE DATABASE nome_do_banco_de_dados;

-- Sinônimo de CREATE DATABASE, também cria um banco de dados.
CREATE SCHEMA nome_do_banco_de_dados;

-- Verifica se o banco de dados ainda não existe.
-- Essa verificação é comumente utilizada junto ao CREATE DATABASE para evitar
-- a tentativa de criar um banco de dados duplicado, o que ocasionaria um erro.
IF NOT EXISTS nome_do_banco_de_dados;

-- Lista todos os bancos de dados existentes.
SHOW DATABASES;

-- Define o banco de dados ativo para uso no momento.
USE nome_do_banco_de_dados;
```

Os comandos `CREATE DATABASE` ou `CREATE SCHEMA` fazem a mesma coisa, no entanto eles normalmente são utilizados em conjunto com o comando `IF NOT EXISTS`. Essa verificação é feita para evitar a tentativa de criar um banco de dados duplicado, o que ocasionaria um erro.

<br>

# EXERCÍCIOS

1. Faça o banco de dados `albuns`:
- Álbum
- Artista
- Estilo Musical
- Música

2. Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são:
- Nome;
- Espécie;
- Sexo;
- Idade;
- Localização. 

Cada animal também possui vários cuidadores, e cada cuidador pode ser responsável por mais de um animal. Além disso, cada cuidador possui um gerente, sendo que cada gerente pode ser responsável por mais de um cuidador. Siga os passos aprendidos no dia de hoje para modelar essa base de dados.
