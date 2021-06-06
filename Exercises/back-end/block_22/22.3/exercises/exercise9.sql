/* 9.Escreva uma query para alterar o nome da coluna country_name para country, 
      mantendo o mesmo tipo e tamanho de dados.  */
USE hr;

ALTER TABLE countries
  CHANGE COUNTRY_NAME
    COUNTRY VARCHAR(40);

SELECT * FROM countries;