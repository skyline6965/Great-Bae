DROP DATABASE IF EXISTS greatbay_db;
CREATE DATABASE greatbay_db;
USE greatbay_db;

CREATE TABLE product(
id INT NOT NULL AUTO_INCREMENT,
item VARCHAR (100) NOT NULL,
price DEC (10,2) NOT NULL,
category VARCHAR (50) NULL,
item_condition INT (10) NULL,
PRIMARY KEY (id)
);

INSERT INTO product (item, price, category, item_condition)
VALUES ("Skateboard", 120, "sports", 8);

