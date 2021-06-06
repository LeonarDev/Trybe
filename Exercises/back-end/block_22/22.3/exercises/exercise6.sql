/* 6. Verifique o impacto de um INDEX na tabela address (sakila) adicionando-o na coluna postal_code.
      Após ter adicionado o índice, mensure o custo da query utilizando o execution plan.
      Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo. */
USE sakila;

ALTER TABLE address
ADD INDEX postal_code_index(postal_code);

-- Mensure o custo com a seguinte query:
SELECT *
FROM sakila.address
WHERE postal_code = '36693';

DROP INDEX postal_code_index ON address;
