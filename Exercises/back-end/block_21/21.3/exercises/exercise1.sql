/* 1. Utilize o banco de dados sakila.
      Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. 
      Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram. */
USE sakila;
DELIMITER $$

CREATE PROCEDURE Mostra10AtoresMaisPopulares()
BEGIN
  SELECT actor_id, COUNT(*) AS 'QTD FILMES'
  FROM film_actor
  GROUP BY actor_id
  LIMIT 10;
END $$

DELIMITER ;


-- Como usar:
CALL ShowTop10Actors();