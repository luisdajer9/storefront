CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  itemId INT AUTO_INCREMENT NOT NULL,
  productName VARCHAR(50) NOT NULL,
  productSales DECIMAL(10,2) NOT NULL,
  departmentName VARCHAR(50) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stockQuantity INT(10) NOT NULL,
  primary key(itemId)
);

select * from products;

INSERT INTO products (productName, productSales, departmentName, price, stockQuantity)
VALUES ("Mario Kart", 0, "Video Games", 49.95, 150),
  ("Counter-Strike:GO", 0, "Video Games", 59.99, 200),
  ("Milk", 0, "Food and Drink", 24.50, 50),
  ("Sandals", 0, "Apparel", 75.00, 5),
  ("T-shirt", 0, "Apparel", 54.25, 35),
  ("Toothbrush", 0, "Necessities", 42.42, 42),
  ("Django", 0, "Films", 15.00, 25),
  ("The Matrix", 0, "Films", 25.50, 57),
  ("Monopoly", 0, "Board Games", 30.50, 35),
  ("Yahtzee", 0, "Board Games", 19.95, 23);

  CREATE TABLE departments(
  departmentId INT AUTO_INCREMENT NOT NULL,
  departmentName VARCHAR(50) NOT NULL,
  costs DECIMAL(10,2) NOT NULL,
  totalSales DECIMAL(15,2) NOT NULL,
  primary key(departmentId)
);

select * from departments;

INSERT INTO departments (departmentName, costs, totalSales)
VALUES ("Video Games", 200, 300),
  ("Food and Drink", 100, 200),
  ("Apparel", 50, 90),
  ("Necessities", 300, 100),
  ("Films", 35, 0),
  ("Board Games", 0, 100);