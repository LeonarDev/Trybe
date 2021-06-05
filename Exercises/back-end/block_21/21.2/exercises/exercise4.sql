/* 1. Usando o EXISTS na tabela books_lent e books, exiba o id e título dos livros que ainda não foram emprestados. */  
SELECT id, title
FROM hotel.Books AS b
WHERE NOT EXISTS(
    SELECT *
    FROM hotel.Books_Lent
    WHERE b.Id = book_id
);

SELECT * FROM hotel.Books;
SELECT * FROM hotel.Books_Lent;

/* 2. Usando o EXISTS na tabela books_lent e books, exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título. */
SELECT id, title
FROM hotel.Books AS b
WHERE EXISTS(
  SELECT * 
  FROM hotel.Books_Lent
  WHERE b.Id = book_id 
    AND title LIKE '%lost%'
);

/* 3. Usando a tabela carsales e customers, exiba apenas o nome dos clientes que ainda não compraram um carro. */
SELECT * FROM hotel.CarSales;
SELECT * FROM hotel.Customers;

SELECT `Name`
FROM hotel.Customers AS c
WHERE NOT EXISTS(
  SELECT * FROM hotel.CarSales
  WHERE c.CustomerID = CustomerID
);

/* 4. Usando o comando EXISTS em conjunto com JOIN e as tabelas cars, customers e carsales,
      exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros. */
SELECT * FROM hotel.Cars;
SELECT * FROM hotel.Customers;
SELECT * FROM hotel.CarSales;

SELECT hotel.Customers.`Name`, hotel.Cars.`Name`
FROM  hotel.Cars
INNER JOIN hotel.Customers
WHERE EXISTS(
  SELECT * FROM hotel.CarSales
  WHERE CarID = hotel.Cars.Id
    AND CustomerID = hotel.Customers.CustomerID
);