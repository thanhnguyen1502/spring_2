CREATE DATABASE tokei_store;
USE tokei_store;

CREATE TABLE role (
    id INT PRIMARY KEY,
    role_name VARCHAR(45)
);

CREATE TABLE user (
    id INT PRIMARY KEY,
    user_name VARCHAR(25),
    password VARCHAR(15),
    name VARCHAR(50),
    email VARCHAR(50),
    address VARCHAR(50),
    gender BIT(1),
    phone VARCHAR(15)
);

CREATE TABLE product_type (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE brand (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE product (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(50),
    price DOUBLE,
    description TEXT,
    img TEXT,
    amount INT,
    brand_id INT,
    product_type_id INT,
    FOREIGN KEY (brand_id) REFERENCES brand(id),
    FOREIGN KEY (product_type_id) REFERENCES product_type(id)
);

CREATE TABLE use_role (
    id INT PRIMARY KEY,
    user_id INT,
    role_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (role_id) REFERENCES role(id)
);

CREATE TABLE shop (
    id INT PRIMARY KEY,
    date DATE,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE shop_detail (
    id INT PRIMARY KEY,
    amount INT,
    shop_id INT,
    product_id INT,
    FOREIGN KEY (shop_id) REFERENCES shop(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
);
