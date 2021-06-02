/*  Crie um Trigger na tabela movies que, ao ter algum de seus registros excluídos, deve enviar uma informação para a tabela movies_logs, onde devem ser guardados 
    - a data da exclusão, 
    - a executed_action 'DELETE' e
    - o id do filme excluído. */
USE BeeMovies;

DELIMITER $$

CREATE TRIGGER trigger_movie_delete
  BEFORE DELETE ON movies
  FOR EACH ROW
BEGIN
  INSERT INTO movies_logs(log_date, executed_action, movie_id)
    VALUES(NOW(), 'DELETE', OLD.movie_id);
END $$

DELIMITER ;