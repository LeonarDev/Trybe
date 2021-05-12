# Finding data in a Database

### TRADUÇÃO PRO INGLÊS EM CONSTRUÇÃO :construction:

*O que é uma query e quais são os principais tipos de queries*

>Inquirir, ou query , em inglês, é o nome dado aos comandos que você digita dentro de uma janela ou linha de comando com a intenção de interagir de alguma maneira com uma base de dados. No mundo de banco de dados, você pode tanto trazer dados quanto alterá-los, atribuir permissões de acesso e manipulação e muito mais. Vamos dar um olhada nos principais tipos de queries a seguir:

**DDL** : Data Definition Language - todos os comandos que lidam com o esquema, a descrição e o modo como os dados devem existir em um banco de dados:
- `CREATE`: Para criar bancos de dados, tabelas, índices, views, procedures, functions e triggers
- `ALTER`: Para alterar a estrutura de qualquer objeto
- `DROP`: Permite deletar objetos
- `TRUNCATE`: Apenas esvazia os dados dentro de uma tabela, mas a mantém no banco de dados

**DML**: Data Manipulation Language - Comandos que são usados para manipular dados. São utilizados para armazenar, modificar, buscar e excluir dados em um banco de dados. Os comandos e usos mais comuns nesta categoria são:
- `SELECT`: usado para buscar dados em um banco de dados
- `INSERT`: insere dados em uma tabela
- `UPDATE`: altera dados dentro de uma tabela
- `DELETE`: exclui dados de uma tabela

**DCL**: Data Control Language - Focado mais nos comandos que concedem direitos, permissões e outros tipos de controle ao sistema de banco de dados.
- `GRANT`: concede acesso a um usuário
- `REVOKE`: remove acessos concedidos através do comando GRANT

**TCL**: Transactional Control Language - Lida com as transações dentro de suas pesquisas.
- `COMMIT`: muda suas alterações de temporárias para permanentes no seu banco de dados
- `ROLLBACK`: desfaz todo o impacto realizado por um comando
- `SAVEPOINT`: define pontos para os quais uma transação pode voltar. É uma maneira de voltar para pontos específicos de sua query
- `TRANSACTION`: comandos que definem onde, como e em que escopo suas transações são executadas

<!--
> He who controls information, controls the world - Stephen Franklin

When we work with backend and database, in general, the flow works like this: 
- The frontend makes the request for the backend, 
- The backend makes the connection and queries the database. 
- Then the db returns some information to the backend, 
- Then the API (Application Programming Interface) enters, 

*The API is responsible for processing this information, receiving requests, sending responses and, in turn, feeding the frontend.*

<br>

### How is this information (tables) stored?

All searches performed within a database are done in tables. Tables have rows and columns. Lines represent an example, or instance, of what you want to represent, whereas columns describe some aspect of the represented entity.

<img src="http://4.bp.blogspot.com/-5MzMOvds7ks/Vk1LfGkD7OI/AAAAAAAABCI/Hcl6kHgxRNQ/s1600/Difference-between-Column-based-and-Row-based-Tables.png">

<br>

### SQL Database

One of the great advantages of storing your data in a database is that it is possible to create rules and constraints (constraints), which dictate exactly how the data can or cannot be inserted into your tables.

*To manually verify that the MySQL service is running correctly on your computer, enter the following code on the command line (Linux):*

```Linux
sudo systemctl status mysql

```

<br>

*If the service is stopped, you can use the following command to start it:*

```
systemctl start mysql
```

<br>

*To stop the **MySQL** service, you can use the stop command:*

```
systemctl stop mysql
```

<br>

### Configuring the MYSQL server startup and password

By default, after installation, your server will be configured to start with the system. If you do not want this to happen, to save RAM, you can disable automatic start using the command:

```
sudo systemctl disable mysql
```

A primeira vez que for utilizar após iniciar o computador, será necessário iniciar o servidor com o comando:

```
sudo systemctl start mysql
```

If you want to enable it to start again at the computer, just use the command:

```
sudo systemctl enable mysql
```
<br>

### Set a password for accessing the database

Both for **security and for use in the workbench** (soon), you will need to enter the password you define. Note that we are talking about your **mysql server password** here, not your superuser password (root). To do this, you will run the following command:

```
mysql -u root -p
```

Since there is no password set yet, no password must be entered. Keep hitting 'Enter'.
Here, you are browsing the **MySQL monitor** which is the **standard mysql interface on the terminal**. And from here, you already have mysql installed on your computer and can execute the course commands on that interface.

<img src="https://course.betrybe.com//back-end/sql/images/mysqlinstallation9.png">

<br>

Run the command, paying attention to the `'your_password'` part, which must be changed to the password you define (it can also be empty `''`, assuming a testing and development environment):

```
 ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password'; flush privileges;
 -- EX: ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234'; flush privileges;
```

### Uninstalling MySQL Server

First remove all installed packages:

```
sudo apt-get remove mysql-server mysql-client mysql-common
```

Now remove the dependency files that are no longer needed and then remove the old versions of the package files.

```
sudo apt-get autoremove
```

```
sudo apt-get autoclean
```

Next, remove the mysql files that may have been left behind.

```
sudo rm -rf /var/lib/mysql
```

```
sudo rm -rf /etc/mysql
```

If the uninstallation is completed successfully, the `mysql --version` command should not return your mysql version.

<br>

### MySQL on the command line

After following the previous steps, you can now access your server from the command line. To see which databases are available, you must use the command:

```
mysql -u root -p
```
<br>

You can see all the databases that are currently installed by typing the following command (don't forget the semicolon):

```
SHOW DATABASES;
```

<br>

### Most common commands

By convention, we use the SQL keywords in capital letters to differentiate from the indications of tables and columns.

1. The `USE` command is used to define the **database reference used in queries**:

```
USE name_of_database_you_want_to_connect;
-- EX: USE information_schema;
```

- Another way to refer to the bank, without having to run `SE` is in the format `database_blablabla.table`:

```
SELECT * FROM database_blablabla.table;
-- EX: SELECT * FROM information_schema.statistics;
```

<br>

2. To return all tables initialized on your server:

```sql
SHOW TABLES;
```

<br>

3. View structure of a table:

```
DESCRIBE name_of_table;
-- EX: DESCRIBE statistics;
```

<br>

4. Create a database:

```
CREATE DATABASE my_database;
```

<br>

### Installing a graphical interface (MySQL Workbench)

<img src="https://course.betrybe.com//back-end/sql/images/mysqlinstallation8.gif">

<br>

### Application launch

Okay, now open **MySQL Workbench** through your application menu. After opening it, you will be at the home screen, in which you must select the server you want to enter.

In general, the workbench identifies your installed server, returning a "Local instance" for it, in our case here, because we only have one server installed, it returns a "Local instance" on standard port 3306.

Clicking on the instance will ask for a password. You must enter your server password, previously defined, check the option *Save password in keychain* so you don't have to repeat your password again every time you connect.

<img src="https://course.betrybe.com//back-end/sql/images/mysqlinstallation16.gif">

<br>

### What is an entity?
When talking about entities in a database, we are usually talking about a table that represents some real-world concept that you want to describe (person, events, events) and their properties (height, time of the event, name of the event). The **person** entity, for example, can have the properties of height, weight and age. A **party** entity can have the event time, target audience and party date properties. Finally, a **selling** entity may own the properties sale value, day of sale, product sold, etc.

In some of these cases, the entities are individual and do not relate to each other, but sometimes they are linked with each other through relationships.

### How is the data linked?
There are four types of relationships in a database.

#### One to One
A **row in Table A** should only have one corresponding **row in Table B** or vice versa.

*This type of relationship is normally used when you want to split information from a larger table into smaller tables for performance reasons, in order to avoid tables with dozens of columns, or for various other business-specific issues.*

#### One to Many or Many to One
This is one of the most common types of relationships. In such scenarios, a **row in table A** can have several corresponding **rows in table B**, but a **row in table B** can only have one corresponding **row in table A**.


#### Many to Many
The many-to-many relationship type happens when a **row in table A** can have many corresponding **rows in table B** and vice versa.

The many-to-many relationship can also be seen as two one-to-many relationships linked by an intermediate table.

We can call this intermediate table a join table. It is used to store information about how the tables relate to each other.


<br>

### Restoring the sakila practice database
After installing the **MySQL Workbench**, download the backup file [here](https://course.betrybe.com//back-end/sakila.sql).

1. Now open the file on MySQL Workbench.


<img src="https://course.betrybe.com//back-end/sql/images/workbench1.png">

2. Run the SQL script by clicking the following button:

<img src="https://course.betrybe.com//back-end/sql/images/workbench3.png">

3. Click the following button to verify that the bank has been restored correctly:

<img src="https://course.betrybe.com//back-end/sql/images/workbench4.png">

4. If you see the following structure, then everything went correctly:

<img src="https://course.betrybe.com//back-end/sql/images/workbench5.png">

<br>

# Exercises

Now we are going to open the Workbench and do a practical analysis of the sakila database, which must already be installed, in case you have installed MySql Workbench by default. If the sakila database is not available, go back to the section Restoring the sakila practice database and follow the instructions listed. With this bench available in your Workbench installation, your mission now is to try to complete the following exercises!

**Exercise 1**: Find out how to do a search on any table without using a line of code using **MySql Workbench**.

**Exercise 2**: Discover how you can create a table without using **SQL** code using **MySql Workbench**.

**Exercise 3**: Once this is done, create a table with the following restrictions:
Table name: `Movie`

Columns:
- **FilmeId** - primary key, type int, increments by 1 each time a value is automatically inserted;
- **Description** - does not allow nulls, text type (varchar (100);
- **AnoLancamento** - does not allow nulls, type int;
- **Note** - allows nulls, type int;

**Exercise 4**: Analyze the `city` table and find the table that the `country_id` column refers to.

**Exercise 5**: After solving the previous exercise, answer: what kind of relationship does the `city` table have with the `country` table?

**Exercise 6**: What kind of relationship does the `country` table have with the city table?

**Exercise 7**: Open table by table from the `sakila` database and find at least 3 examples of a 1:N or N: 1 relationship.
