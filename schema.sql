DROP DATABASE IF EXISTS employee Cascade;
CREATE DATABASE employee Cascade;

\c employee_tracker_db;

CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role (
    id SERIAL PRIMARY KEY
    tittle VARCHAR(30) UNIQUE NOT NULL
    salry

-- );

-- CREATE TABLE employee (

-- );