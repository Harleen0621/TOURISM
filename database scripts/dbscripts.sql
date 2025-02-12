-- create database foodwaste;

-- CREATE DATABASE user_management;
create database escapeandexplore;
USE escapeandexplore;
-- SHOW databases;

 CREATE TABLE user_table (
 id INT AUTO_INCREMENT primary key,      -- Auto-incrementing ID to uniquely identify each registration
   username VARCHAR(100),                  -- Name field (maximum length 100)
   email VARCHAR(100) unique,                     -- Email field
   phone_number VARCHAR(15) unique,                -- Phone number field
   address varchar(200),                            -- Address field
   password varchar(200)   
 );
 
 
 insert into user_table(username,email,phonenumber,address) values
 ('Harsh','hp','1234','abc'), ('Harleen','HP','1234','xyz');
 
 select * from user_table;
 
