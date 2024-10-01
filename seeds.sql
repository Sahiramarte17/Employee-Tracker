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
       ('Bob', 'Smith', 2, 1),
       ('Charlie', 'Brown', 3, NULL),
       ('David', 'Wilson', 4, NULL);