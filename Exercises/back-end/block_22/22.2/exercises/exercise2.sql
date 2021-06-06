DROP DATABASE IF EXISTS Empresa;

CREATE DATABASE Empresa;

USE Empresa;

CREATE TABLE Funcionario(
  Funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
  Nome VARCHAR(50) NOT NULL,
  Sobrenome VARCHAR(100) NOT NULL
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

CREATE TABLE Contato_Funcionario(
  Funcionario_id INT,
  Email VARCHAR(50),
  Telefone VARCHAR(15),
  FOREIGN KEY (Funcionario_id) REFERENCES Funcionario (Funcionario_id)
);

CREATE TABLE Cadastro_Funcionario(
  Funcionario_id INT,
  DataCadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (Funcionario_id) REFERENCES Funcionario (Funcionario_id)
);
