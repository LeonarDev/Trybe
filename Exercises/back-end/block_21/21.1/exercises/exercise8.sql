/* 1. Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. 
      Além disso, dê um alias (apelido) à coluna gerada por AVG(length), de forma que deixe a query mais legível.
      Finalize ordenando os resultados de forma decrescente. */
SELECT rating, AVG(length) AS `Duração média`
  FROM sakila.film
GROUP BY rating
HAVING `Duração média` BETWEEN 115.0 AND 121.50
ORDER BY `Duração média` DESC;
      
/* 2. Usando a query a seguir, exiba apenas os valores de total de substituição de custo que estão acima de $3950.50. 
      Dê um alias que faça sentido para SUM(replacement_cost), de forma que deixe a query mais legível. 
      Finalize ordenando os resultados de forma crescente. */
SELECT rating, SUM(replacement_cost) AS `Soma dos custos de reposição`
  FROM sakila.film
GROUP by rating
HAVING `Soma dos custos de reposição` > 3950.50
ORDER BY `Soma dos custos de reposição`;