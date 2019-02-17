DROP DATABASE IF EXISTS products_db;
create database bamazon_db;
create table products (

create table products (
id integer(10) auto_increment primary key,
name varchar(50) not null,
department varchar(50),
price integer(10) not null,
stock integer(10) not null
);
INSERT into products (name, department, price, stock)
values ("Bottled Water", "Consumables", 1, 2000);
INSERT into products (name, department, price, stock)
values ("Sunglasses", "Wearables", 25, 400);
INSERT into products (name, department, price, stock)
values ("Impact Drill", "Tools", 75, 100);
INSERT into products (name, department, price, stock)
values ("Pizza", "Consumables", 18, 300);
INSERT into products (name, department, price, stock)
values ("Kanye Slides", "Wearables", 1000, 5);
INSERT into products (name, department, price, stock)
values ("Cork Baseball Bat", "Sports", 300, 140);
INSERT into products (name, department, price, stock)
values ("Running Shoes", "Sports", 120, 700);
INSERT into products (name, department, price, stock)
values ("Brownie", "Consumables", 2, 425);
INSERT into products (name, department, price, stock)
values ("Fun Brownie", "Alternate Consumables", 9, 420);
INSERT into products (name, department, price, stock)
values ("Gloves", "Wearables", 32, 250);