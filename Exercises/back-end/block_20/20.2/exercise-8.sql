SELECT 'This is a SQL Exercise, Practice and Solution';
SELECT 1 AS Column1, 2 AS Column2, 3 AS Column3;
SELECT 10 + 15;
SELECT 2 * 5;
SELECT * FROM Scientists;
SELECT Name as 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;
SELECT Name FROM Scientists ORDER BY Name;
SELECT Name FROM Projects ORDER BY Name DESC;
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') FROM Projects;
SELECT Name, Hours FROM Projects ORDER BY Hours DESC LIMIT 3;
SELECT DISTINCT Project FROM AssignedTo;
SELECT Name FROM Projects ORDER BY Hours DESC LIMIT 1;
SELECT Name FROM Projects ORDER BY Hours LIMIT 1 OFFSET 1;
SELECT * FROM Projects ORDER BY Hours LIMIT 5;
SELECT CONCAT(
	'Existem ', 
    (SELECT COUNT(Scientist) FROM AssignedTo),
    ' cientistas na tabela Scientists.'
);