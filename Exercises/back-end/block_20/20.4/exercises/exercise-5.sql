-- 1) Altere a classificação da tabela BoxOffice para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.
UPDATE BoxOffice
SET rating = 9.0
WHERE domestic_sales > 400000000;

/* 2) Altere a classificação da tabela BoxOffice para 6.0 de todos os filmes que lucraram menos de 300 milhões no mercado internacional */
      e mais de 200 milhões no mercado interno.
UPDATE BoxOffice
SET rating = 6.0
WHERE domestic_sales > 200000000 AND international_sales < 300000000;

-- 3) Exclua da tabela Movies todos os filmes com menos de 100 minutos de duração.
SELECT id, length_minutes FROM Movies
WHERE length_minutes < 100; -- primeiro é utilizada essa query para selecionar os ids dos filmes a serem excluídos

 DELETE FROM BoxOffice
 WHERE movie_id IN (1, 6, 7, 8, 12);
 
DELETE FROM Movies
WHERE length_minutes < 100;