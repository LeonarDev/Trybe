CREATE DATABASE IF NOT EXISTS zoo;

USE zoo;

CREATE TABLE Animal(
  animal_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  especie VARCHAR(100) NOT NULL,
  sexo CHAR(1),
  idade INT,
  localizacao VARCHAR(100)
);

CREATE TABLE Gerente(
  gerente_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100)
);

CREATE TABLE Cuidador(
  cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  gerente_id INT,
  FOREIGN KEY (gerente_id) REFERENCES Gerente (gerente_id)
);

CREATE TABLE Cuidador_Animal(
  cuidador_id INT,
  animal_id INT,
  FOREIGN KEY (cuidador_id) REFERENCES Cuidador (cuidador_id),
  FOREIGN KEY (animal_id) REFERENCES Animal (animal_id)
);
