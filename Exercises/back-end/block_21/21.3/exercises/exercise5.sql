/* Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id */

USE sakila.

DELIMITER $$

CREATE FUNCTION RetornaNomeDoFilmeApartirDoID(id INT)
RETURNS VARCHAR(500) READS SQL DATA
BEGIN
  DECLARE nomeDoFilme VARCHAR(500);
  SELECT DISTINCT F.title
  FROM sakila.inventory I
  INNER JOIN sakila.film F
    ON F.film_id = I.film_id
  WHERE I.inventory_id = id
    INTO nomeDoFilme;
  RETURN nomeDoFilme;
END $$

DELIMITER ;

-- Como usar:
SELECT RetornaNomeDoFilmeApartirDoID(3);
