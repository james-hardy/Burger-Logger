DROP DATABASE IF EXISTS burger_bd;

CREATE DATABASE burger_db;

USE burgers_db

CREATE TABLE burgers (
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(30),
devoured BOOLEAN,
PRIMARY KEY (id)
);



