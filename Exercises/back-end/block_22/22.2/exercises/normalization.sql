CREATE DATABASE IF NOT EXISTS normalization;

USE normalization;

CREATE TABLE Funcionario(
  Funcionario_id INT PRIMARY KEY NOT NULL,
  Nome VARCHAR(50) NOT NULL,
  Sobrenome VARCHAR(100) NOT NULL
);

CREATE TABLE Cadastro_Funcionario(
  Funcionario_id INT,
  DataCadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (Funcionario_id) REFERENCES Funcionario (Funcionario_id)
);

INSERT INTO Funcionario
  (Funcionario_id, Nome, Sobrenome)
VALUES
  (12, 'Joseph', 'Rodrigues'), 
  (13, 'André', 'Freeman'),
  (14, 'Cíntia', 'Duval'),
  (15, 'Fernanda', 'Mendes');

CREATE TABLE Setor(
  Setor_id INT PRIMARY KEY AUTO_INCREMENT,
  Setor_nome VARCHAR(50)
);

INSERT INTO Setor
  (Setor_nome)
VALUES
  ('Administração'),
  ('Vendas'),
  ('Operacional'),
  ('Estratégico'),
  ('Marketing');

CREATE TABLE Funcionario_Setor(
  Funcionario_id INT,
  Setor_id INT,
  FOREIGN KEY (Funcionario_id) REFERENCES Funcionario (Funcionario_id),
  FOREIGN KEY (Setor_id) REFERENCES Setor (Setor_id)
);

SELECT * FROM Setor;

INSERT INTO Funcionario_Setor
  (Funcionario_id, Setor_id)
VALUES
  (12, 1),
  (12, 2),
  (13, 3),
  (14, 4),
  (14, 2),
  (15, 5);

CREATE TABLE Contato_Funcionario (
  Funcionario_id INT,
  Email VARCHAR(50),
  Telefone VARCHAR(15),
  FOREIGN KEY (Funcionario_id) REFERENCES Funcionario (Funcionario_id)
);

INSERT INTO Contato_Funcionario 
  (Funcionario_id, Email, Telefone) 
VALUES
  (12, 'jo@gmail.com', '(35)998552-1445'),
  (13, 'andre1990@gmail.com	', '(47)99522-4996'),
  (14, 'cindy@outlook.com', '(33)99855-4669'),
  (15, 'fernandamendes@yahoo.com', '(33)99200-1556');
