/* 2. Utilize o banco de dados sakila.
      Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme, seu titulo, 
      o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure. */
USE sakila;
DELIMITER $$

CREATE PROCEDURE BuscaFilmePorCategoria(IN categoria VARCHAR(100))
BEGIN
  SELECT 
    f.film_id, 
    f.title, 
    fc.category_id, 
    c.name
  FROM sakila.film f
  INNER JOIN film_category fc
    ON f.film_id = fc.film_id
  INNER JOIN category c
    ON fc.category_id = c.category_id
  WHERE c.name = categoria;
END $$

DELIMITER ;


-- Como usar:
CALL FindMovieByCategory('Action');