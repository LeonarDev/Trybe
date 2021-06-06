/* 8. Escreva uma query para alterar o nome da coluna region_name para region, 
      mantendo o mesmo tipo e tamanho de dados. */
USE hr;

ALTER TABLE regions
  CHANGE REGION_NAME
    REGION VARCHAR(25);

SELECT * FROM regions;
