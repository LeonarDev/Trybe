/* 4. Crie uma view chamada movies_languages, 
      usando as tabelas 
        - film e 
        - language (sakila). 
      Sua view deve exibir 
        - o título do filme, 
        - o id do idioma e 
        - o idioma do filme */

USE sakila;

CREATE VIEW movies_languages AS
  SELECT 
    F.title,
    F.language_id,
    L.`name`
  FROM
    film F
      INNER JOIN
    `language` L ON L.language_id = F.language_id;

SELECT * FROM movies_languages;
