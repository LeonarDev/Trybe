/* 1. Crie uma view chamada film_with_categories utilizando as tabelas category, film_category 
    e film do banco de dados sakila. 
    Essa view deve exibir 
      - o título do filme, 
      - o id da categoria 
      - e o nome da categoria. 
    Os resultados devem ser ordenados pelo título do filme. */
    
USE sakila;

CREATE VIEW film_with_categories AS
  SELECT 
    F.title, 
    C.category_id, 
    C.`name`
  FROM 
    film F
      INNER JOIN
    film_category FC ON F.film_id = FC.film_id
      INNER JOIN
    category C ON C.category_id = FC.category_id
  ORDER BY F.title;
  
  SELECT * FROM film_with_categories;
  