/* 3. Utilize o banco de dados sakila.
      Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída. */
USE sakila;
DELIMITER $$

CREATE PROCEDURE VerificaClienteAtivo(
  IN clienteEmail VARCHAR(100),
  OUT estahAtivo BOOL
)
BEGIN
  SET estahAtivo = (
    SELECT `active` 
    FROM sakila.customer
    WHERE email = clienteEmail
  );
END $$

DELIMITER ;


-- Como usar:
SELECT @ActiveStatus;
CALL CheckIfActiveClient('MARY.SMITH@sakilacustomer.org', @ActiveStatus);
SELECT @ActiveStatus;