/* Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror') 
      e retorna a quantidade total de filmes registrados nessa categoria. */
USE sakila.

DELIMITER $$

CREATE FUNCTION QuantidadeDeFilmesPorCategoria(categoria VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
  DECLARE totalPorCategoria INT;
  SELECT COUNT(*)
  FROM sakila.category c
  INNER JOIN sakila.film_category fc
    ON fc.category_id = c.category_id
  WHERE c.name = categoria
    INTO totalPorCategoria;
  RETURN totalPorCategoria;
END $$

DELIMITER ;

-- Como usar:
SELECT QuantidadeDeFilmesPorCategoria('Action');