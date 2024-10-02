DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

\c employee_tracker_db;

-- Create departments table
CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);

-- Create roles table
CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL REFERENCES department(id)

 );

-- CREATE TABLE employee 
CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL REFERENCES role(id),
    manager_id INTEGER REFERENCES employee(id) 
);
INSERT INTO department (name) 
VALUES ('Engineering'), ('Sales'), ('HR');

-- INSERT INTO role
INSERT INTO role (title, salary, department_id) 
VALUES ('Sales Manager', 60000, 1), 
       ('Sales Associate', 40000, 1), 
       ('Software Engineer', 80000, 2), 
       ('HR Specialist', 50000, 3);

-- INSERT INTO employee
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('Alice', 'Johnson', 1, NULL),
       ('Bob', 'Smith', 2, NULL), 
       ('Charlie', 'Brown', 3, NULL),
       ('David', 'Wilson', 4, NULL);

       SELECT * FROM department;
       SELECT * FROM role;
       SELECT * FROM employee;