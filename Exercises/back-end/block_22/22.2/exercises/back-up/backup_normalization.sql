-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: localhost    Database: normalization
-- ------------------------------------------------------
-- Server version	8.0.25-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Cadastro_Funcionario`
--

DROP TABLE IF EXISTS `Cadastro_Funcionario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Cadastro_Funcionario` (
  `Funcionario_id` int DEFAULT NULL,
  `DataCadastro` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `Funcionario_id` (`Funcionario_id`),
  CONSTRAINT `Cadastro_Funcionario_ibfk_1` FOREIGN KEY (`Funcionario_id`) REFERENCES `Funcionario` (`Funcionario_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Cadastro_Funcionario`
--

LOCK TABLES `Cadastro_Funcionario` WRITE;
/*!40000 ALTER TABLE `Cadastro_Funcionario` DISABLE KEYS */;
/*!40000 ALTER TABLE `Cadastro_Funcionario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Contato_Funcionario`
--

DROP TABLE IF EXISTS `Contato_Funcionario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Contato_Funcionario` (
  `Funcionario_id` int DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Telefone` varchar(15) DEFAULT NULL,
  KEY `Funcionario_id` (`Funcionario_id`),
  CONSTRAINT `Contato_Funcionario_ibfk_1` FOREIGN KEY (`Funcionario_id`) REFERENCES `Funcionario` (`Funcionario_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Contato_Funcionario`
--

LOCK TABLES `Contato_Funcionario` WRITE;
/*!40000 ALTER TABLE `Contato_Funcionario` DISABLE KEYS */;
INSERT INTO `Contato_Funcionario` VALUES (12,'jo@gmail.com','(35)998552-1445'),(13,'andre1990@gmail.com	','(47)99522-4996'),(14,'cindy@outlook.com	','(33)99855-4669'),(15,'fernandamendes@yahoo.com	','(33)99200-1556');
/*!40000 ALTER TABLE `Contato_Funcionario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Funcionario`
--

DROP TABLE IF EXISTS `Funcionario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Funcionario` (
  `Funcionario_id` int NOT NULL,
  `Nome` varchar(50) NOT NULL,
  `Sobrenome` varchar(100) NOT NULL,
  PRIMARY KEY (`Funcionario_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Funcionario`
--

LOCK TABLES `Funcionario` WRITE;
/*!40000 ALTER TABLE `Funcionario` DISABLE KEYS */;
INSERT INTO `Funcionario` VALUES (12,'Joseph','Rodrigues'),(13,'André','Freeman'),(14,'Cíntia','Duval'),(15,'Fernanda','Mendes');
/*!40000 ALTER TABLE `Funcionario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Funcionario_Setor`
--

DROP TABLE IF EXISTS `Funcionario_Setor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Funcionario_Setor` (
  `Funcionario_id` int DEFAULT NULL,
  `Setor_id` int DEFAULT NULL,
  KEY `Funcionario_id` (`Funcionario_id`),
  KEY `Setor_id` (`Setor_id`),
  CONSTRAINT `Funcionario_Setor_ibfk_1` FOREIGN KEY (`Funcionario_id`) REFERENCES `Funcionario` (`Funcionario_id`),
  CONSTRAINT `Funcionario_Setor_ibfk_2` FOREIGN KEY (`Setor_id`) REFERENCES `Setor` (`Setor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Funcionario_Setor`
--

LOCK TABLES `Funcionario_Setor` WRITE;
/*!40000 ALTER TABLE `Funcionario_Setor` DISABLE KEYS */;
INSERT INTO `Funcionario_Setor` VALUES (12,1),(12,2),(13,3),(14,4),(14,2),(15,5);
/*!40000 ALTER TABLE `Funcionario_Setor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Setor`
--

DROP TABLE IF EXISTS `Setor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Setor` (
  `Setor_id` int NOT NULL AUTO_INCREMENT,
  `Setor_nome` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Setor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Setor`
--

LOCK TABLES `Setor` WRITE;
/*!40000 ALTER TABLE `Setor` DISABLE KEYS */;
INSERT INTO `Setor` VALUES (1,'Administração'),(2,'Vendas'),(3,'Operacional'),(4,'Estratégico'),(5,'Marketing');
/*!40000 ALTER TABLE `Setor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-05 19:47:17
