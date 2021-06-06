/* 3. Crie uma view chamada address_info
      que faça uso das tabelas 
        address e 
        city (sakila). 
      Sua view deve exibir 
        - o address_id, 
        - o address, 
        - o district, 
        - o city_id e 
        - a city. 
      Os resultados devem ser ordenados pelo nome das cidades */
USE sakila;

CREATE VIEW address_info AS
  SELECT
    A.address_id,
    A.address,
    A.district,
    A.city_id,
    C.city
  FROM
    address A
      INNER JOIN
    city C ON C.city_id = A.city_id
  ORDER BY C.city;
    
SELECT * FROM address_info;
