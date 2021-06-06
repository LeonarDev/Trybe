/* 5. Verifique o impacto de um FULLTEXT INDEX na tabela category (sakila), 
      adicionando-o na coluna name. 
      Após ter adicionado o índice, mensure o custo da query utilizando o execution plan. 
      Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo. */
USE sakila;

ALTER TABLE category
ADD FULLTEXT INDEX name_index(name);

-- Após ter criado o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

DROP INDEX name_index ON category;

-- Após ter excluído o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE name LIKE '%action%';
