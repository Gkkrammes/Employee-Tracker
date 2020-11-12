INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kellen", "Frank", 100, 150);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Marie", "Denise", 200, 250 );
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kyrie", "Woolf", 300, 350);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Collins", "Lewis", 400, 450);

INSERT INTO roles (id, title, salary, department_id)
VALUES (100, "Data Analyst", 70000, 10);
INSERT INTO roles (id, title, salary, department_id)
VALUES (200, "Human Resources Manager", 50000, 20);
INSERT INTO roles (id, title, salary, department_id)
VALUES (300, "Engineer", 85000, 30);
INSERT INTO roles (id, title, salary, department_id)
VALUES (300, "CFO", 125000, 40);

INSERT INTO department (id, department_name)
VALUES (10, "Information Technology");
INSERT INTO department (id, department_name)
VALUES (20, "Human Resources");
INSERT INTO department (id, department_name)
VALUES (30, "Engineering");
INSERT INTO department (id, department_name)
VALUES (30, "Finance");