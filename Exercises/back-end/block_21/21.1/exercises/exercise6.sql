SELECT * FROM sakila.film;
-- 1. Monte uma query que exiba a média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
SELECT AVG(length) AS 'Média de Duração' FROM sakila.film;

-- 2. Monte uma query que exiba a duração mínima dos filmes como 'Duração Mínima';
SELECT MIN(length) AS 'Duração Mínima' FROM sakila.film ;

-- 3. Monte uma query que exiba a duração máxima dos filmes como 'Duração Máxima';
SELECT MAX(length) AS 'Duração Máxima' FROM sakila.film;

-- 4. Monte uma query que exiba a soma de todas as durações como 'Tempo de Exibição Total';
SELECT SUM(length) AS 'Tempo de Exibição Total' FROM sakila.film;

-- 5. Monte uma query que exiba a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.
SELECT COUNT(*) AS 'Filmes Registrados' FROM sakila.film;