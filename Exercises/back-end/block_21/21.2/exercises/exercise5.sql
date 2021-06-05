USE Pixar;

SELECT * FROM BoxOffice;
SELECT * FROM Movies;
SELECT * FROM Theater;
/* 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( internationa_sales ) de cada filme. */
SELECT 
  m.title 'Filme', 
  b.domestic_sales 'Vendas Nacionais', 
  b.international_sales 'Vendas Internacionais'
FROM Movies AS m
INNER JOIN BoxOffice AS b
ON b.movie_id = m.id;

/* 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( internationa_sales )
      do que vendas nacionais ( domestic_sales ). */
SELECT 
  m.title 'Filme', 
  b.domestic_sales 'Vendas Nacionais', 
  b.international_sales 'Vendas Internacionais'
FROM Movies AS m
INNER JOIN BoxOffice AS b
ON b.movie_id = m.id
WHERE b.international_sales > b.domestic_sales;

/* 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente. */
SELECT 
  m.title 'Filme', 
  b.rating 'Avaliação'
FROM Movies AS m
INNER JOIN BoxOffice AS b
ON b.movie_id = m.id;

/* 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente,
      os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética. */
SELECT * FROM BoxOffice;
SELECT * FROM Movies;
SELECT * FROM Theater;

SELECT * 
FROM Theater AS t
LEFT JOIN Movies AS m
ON t.id = m.theater_id
ORDER BY t.name;

/* 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, 
      adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética. */
SELECT * 
FROM Theater AS t
RIGHT JOIN Movies AS m
ON t.id = m.theater_id
ORDER BY t.name;

/* 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5. */
SELECT * FROM BoxOffice;
SELECT * FROM Movies;

SELECT m.title, b.rating
FROM Movies AS m
INNER JOIN BoxOffice AS b
ON m.id = b.movie_id
WHERE b.rating > 7.5
ORDER BY b.rating DESC;

SELECT title FROM Movies
WHERE Id IN (
  SELECT movie_id FROM BoxOffice
  WHERE rating > 7.5
);

/* 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009. */
SELECT * FROM BoxOffice;
SELECT * FROM Movies;

SELECT rating FROM BoxOffice
WHERE movie_id IN (
  SELECT id FROM Movies
  WHERE year > 2009
);

SELECT 
  m.title, 
  b.rating,
  m.year
FROM Movies as m
INNER JOIN BoxOffice AS b
ON m.id = b.movie_id
WHERE m.year > 2009;

/* 8: Utilizando o EXISTS, selecione o nome e localização dos cinemas que possuem filmes em cartaz. */
SELECT * FROM Theater;
SELECT * FROM Movies;

SELECT 
  `name`, location
FROM Theater AS t
WHERE EXISTS (
  SELECT * FROM Movies AS m
  WHERE m.theater_id = t.id
);

/* 9: Utilizando o EXISTS, selecione o nome e localização dos cinemas que não possuem filmes em cartaz. */
SELECT 
  `name`, location
FROM Theater AS t
WHERE NOT EXISTS (
  SELECT * FROM Movies AS m
  WHERE m.theater_id = t.id
);

/* 10. Utilizando o INNER JOIN , selecione todas as informações dos filmes que estão em cartaz (possuem theater_id diferente de NULL ) com avaliação maior que 8. */
SELECT * FROM BoxOffice;
SELECT * FROM Theater;
SELECT * FROM Movies;

SELECT * FROM Movies AS m
INNER JOIN BoxOffice AS b
ON m.id = b.movie_id
WHERE b.rating > 8;

/* 11. Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor. */
SELECT m1.title, m1.length_minutes, m2.title, m2.length_minutes
FROM Movies m1, Movies m2
WHERE m1.director = m2.director AND m1.title <> m2.title;

/* 12. Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título dos filmes que arrecadaram 500 milhões ou mais, 
       e que possuem duração maior que 110 minutos. */
SELECT * From BoxOffice;
SELECT * From Movies;

SELECT m.title FROM Movies AS m
INNER JOIN BoxOffice as b
ON b.movie_id = m.id
WHERE b.international_sales >= 500000000
  AND m.length_minutes > 110;
  
  SELECT m.title FROM Movies AS m
  WHERE m.id IN (
    SELECT b.movie_id FROM BoxOffice AS b
    WHERE b.international_sales >= 500000000
  )
    AND m.length_minutes > 110;