USE sakila;

-- 1) Insira um novo funcionário na tabela sakila.staff
INSERT INTO `staff`
  (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
  ('Geralt', 'of Rivia', 2, 'tossacoin@gmail.com', 1, 1, 'geralt', 'theWhiteWolf');

-- 2) Insira 2 funcionários novos em apenas uma query
INSERT INTO `staff`
  (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
  ('Jeff', 'Bezos', 2, 'jeffbezos@gmail.com', 1, 1, 'jeffb', 'ImTheChamp'),
  ('Sekiro', 'Okami', 2, 'sekirowolf@gmail.com', 1, 1, 'okami', 'SekiroTheSamurai');
    
-- 3) Selecione os 5 primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor
INSERT INTO actor(first_name, last_name)
  SELECT first_name, last_name
  FROM sakila.customer
  ORDER BY customer_id
  LIMIT 5;
    
-- 4) Cadastre 3 categorias de uma vez só na tabela sakila.category
INSERT INTO category (name)
VALUES
    ('Sci-Fi'),
    ('Fantasy'),
    ('Biography');

-- 5) Cadastre 1 nova loja na tabela sakila.store
INSERT INTO store (manager_staff_id, address_id)
VALUES (3, 3);