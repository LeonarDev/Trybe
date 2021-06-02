/* Utilizando a tabela sakila.payment, monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id */
USE sakila.

DELIMITER $$

CREATE FUNCTION TotalDePagamentosAtehMomento(id INT)
RETURNS INT READS SQL DATA
BEGIN
  DECLARE pagamentos INT;
  SELECT COUNT(*)
  FROM sakila.payment p
  WHERE p.customer_id = id
    INTO pagamentos;
  RETURN pagamentos;
END $$

DELIMITER ;

-- Como usar:
SELECT TotalDePagamentosAtehMomento(2);
