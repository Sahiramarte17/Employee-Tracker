DROP DATABASE IF EXISTS employee Cascade;
CREATE DATABASE employee Cascade;

\c employee_tracker_db;

-- Create departments table
CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);

-- Create roles table
CREATE TABLE role (
    id SERIAL PRIMARY KEY
    tittle VARCHAR(30) UNIQUE NOT NULL
    salary DECIMAL NOT NULL
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

