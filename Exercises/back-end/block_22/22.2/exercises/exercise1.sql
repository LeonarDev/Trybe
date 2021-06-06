CREATE DATABASE IF NOT EXISTS Empresa;

USE Empresa;

CREATE TABLE Funcionario(
  Funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
  Nome VARCHAR(50) NOT NULL,
  Sobrenome VARCHAR(100) NOT NULL,
  Email VARCHAR(50),
  Telefone VARCHAR(15),
  DataCadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Setor(
  Setor_id INT PRIMARY KEY AUTO_INCREMENT,
  Setor_nome VARCHAR(50)
);

CREATE TABLE Funcionario_Setor(
  Funcionario_id INT,
  Setor_id INT,
  FOREIGN KEY (Funcionario_id) REFERENCES Funcionario (Funcionario_id),
  FOREIGN KEY (Setor_id) REFERENCES Setor (Setor_id)
);
