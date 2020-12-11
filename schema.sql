DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
		id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
		id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL
);

CREATE TABLE employee (
		id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT
);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kellen", "Frank", 100, 150);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Marie", "Denise", 200, 250 );
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kyrie", "Woolf", 300, 350);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Collins", "Lewis", 400, 450);

INSERT INTO roles (id, title, salary, department_id)
VALUES (100, "Data Analyst", 70, 10);
INSERT INTO roles (id, title, salary, department_id)
VALUES (200, "Human Resources Manager", 50, 20);
INSERT INTO roles (id, title, salary, department_id)
VALUES (300, "Engineer", 85, 30);
INSERT INTO roles (id, title, salary, department_id)
VALUES (400, "CFO", 12.5, 40);

INSERT INTO department (id, department_name)
VALUES (10, "Information Technology");
INSERT INTO department (id, department_name)
VALUES (20, "Human Resources");
INSERT INTO department (id, department_name)
VALUES (30, "Engineering");
INSERT INTO department (id, department_name)
VALUES (40, "Finance");