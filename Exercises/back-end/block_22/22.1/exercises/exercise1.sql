CREATE DATABASE IF NOT EXISTS Albuns;

USE Albuns;

CREATE TABLE Artista(
  artista_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL
);

CREATE TABLE EstiloMusical(
  estilo_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL
);

CREATE TABLE Album(
  album_id INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(100) NOT NULL,
  preco DOUBLE,
  artista_id INT,
  estilo_id INT,
  FOREIGN KEY (artista_id) REFERENCES Artista (artista_id),
  FOREIGN KEY (estilo_id) REFERENCES EstiloMusical (estilo_id) 
);

CREATE TABLE Musica(
  musica_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  album_id INT,
  FOREIGN KEY (album_id) REFERENCES Album (album_id)
);
