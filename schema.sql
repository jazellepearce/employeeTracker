DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role_employee;
DROP TABLE IF EXISTS employee;

CREATE DATABASE employees;
USE employees;

CREATE TABLE department (
    id INTEGER UNSIGNED AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role_employee (
    id INTEGER UNSIGNED AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INTEGER UNSIGNED,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department
    (id),
    primary key (id)
);

CREATE TABLE employee (
    id INTEGER UNSIGNED AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER UNSIGNED,
    manager_id INTEGER UNSIGNED,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role_employee(id), 
    primary key(id)
);