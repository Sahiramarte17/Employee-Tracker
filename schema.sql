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

-- );

-- CREATE TABLE employee (

-- );