/* 7. Escreva uma query para alterar na tabela locations
        - o nome da coluna street_address para address, 
      mantendo o mesmo tipo e tamanho de dados.  */
USE hr;

ALTER TABLE locations
  CHANGE street_address
    address VARCHAR(40);

SELECT * FROM locations;
