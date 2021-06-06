/* 2. Crie uma view chamada film_info 
      utilizando as tabelas actor, film_actor e film (sakila). 
      Sua view deve exibir o 
        - actor_id,
        - o nome completo do ator com o ALIAS actor e
        - o título dos filmes. 
      Os resultados devem ser ordenados pelos nomes de atores e atrizes */
USE sakila;
      
CREATE VIEW film_info AS
  SELECT
    A.actor_id,
    CONCAT(A.first_name, ' ', A.last_name) `actor`,
    F.title    
  FROM 
    actor A
      INNER JOIN
    film_actor FA ON A.actor_id = FA.actor_id
      INNER JOIN
    film F ON F.film_id = FA.film_id
  ORDER BY `actor`;

SELECT * FROM film_info;
