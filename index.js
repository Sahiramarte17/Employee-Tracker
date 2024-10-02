const inquirer = require("inquirer");
const pg = require("pg");

// Configure PostgreSQL client
const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'employee_tracker_db',
    password: 'sun',
    port: 5432,
});

async function startApp() {
    const { action } = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit'
        ]
    });

    switch (action) {
        case 'View all departments':
            return viewDepartments();
        case 'View all roles':
            return viewRoles();
        case 'View all employees':
            return viewEmployees();
        case 'Add a department':
            return addDepartment();
        case 'Add a role':
            return addRole();
        case 'Add an employee':
            return addEmployee();
        case 'Update an employee role':
            return updateEmployeeRole();
        case 'Exit':
            pool.end();
            return;
    }
}

// Function to view all departments
async function viewDepartments() {
    const res = await pool.query('SELECT * FROM department');
    console.table(res.rows);
    startApp();
}

async function viewRoles() {
    const res = await pool.query(`
        SELECT e.id, e.first_name, e.last_name, r.title AS role, d.name AS department, r.salary, m.first_name AS manager
        FROM employee e
        JOIN role r ON e.role_id = r.id
        JOIN department d ON r.department_id = d.id
        LEFT JOIN employee m ON e.manager_id = m.id`);
    console.table(res.rows);
    startApp();
}

async function viewEmployees() {
    const res = await pool.query(`
        SELECT e.id, e.first_name, e.last_name, r.title AS role, d.name AS department, r.salary, m.first_name AS manager
        FROM employee e
        JOIN role r ON e.role_id = r.id
        JOIN department d ON r.department_id = d.id
        LEFT JOIN employee m ON e.manager_id = m.id`);
    console.table(res.rows);
    startApp();
}

// Function to add a department
async function addDepartment() {
    const { name } = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'Enter the name of the department:'
    });
    await pool.query('INSERT INTO department (name) VALUES ($1)', [name]);
    console.log(`Department ${name} added!`);
    startApp();
}

// Function to add a role
async function addRole() {
    const departments = await pool.query('SELECT * FROM department');
    const departmentChoices = departments.rows.map(dept => ({
        name: dept.name,
        value: dept.id
    }));

    const { title, salary, department_id } = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the role title:'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary for this role:',
            validate: value => !isNaN(value) || 'Please enter a number.'
        },
        {
            type: 'list',
            name: 'department_id',
            message: 'Select the department for this role:',
            choices: departmentChoices
        }
    ]);

    await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, department_id]);
    console.log(`Role ${title} added!`);
    startApp();
}

// Function to add an employee
async function addEmployee() {
    const roles = await pool.query('SELECT * FROM role');
    const roleChoices = roles.rows.map(role => ({
        name: role.title,
        value: role.id
    }));

    const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Enter the first name of the employee:'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Enter the last name of the employee:'
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'Select the role for this employee:',
            choices: roleChoices
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'Enter the manager ID (leave blank if none):',
            validate: value => value === '' || !isNaN(value) || 'Please enter a number.'
        }
    ]);

    await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [first_name, last_name, role_id, manager_id || null]);
    console.log(`Employee ${first_name} ${last_name} added!`);
    startApp();
}

// Function to update an employee role
async function updateEmployeeRole() {
    const employees = await pool.query('SELECT * FROM employee');
    const employeeChoices = employees.rows.map(emp => ({
        name: `${emp.first_name} ${emp.last_name}`,
        value: emp.id
    }));

    const roles = await pool.query('SELECT * FROM role');
    const roleChoices = roles.rows.map(role => ({
        name: role.title,
        value: role.id
    }));

    const { employee_id, role_id } = await inquirer.prompt([
        {
            type: 'list',
            name: 'employee_id',
            message: 'Select an employee to update their role:',
            choices: employeeChoices
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'Select the new role for this employee:',
            choices: roleChoices
        }
    ]);

    await pool.query('UPDATE employee SET role_id = $1 WHERE id = $2', [role_id, employee_id]);
    console.log(`Employee role updated!`);
    startApp();
}

// Start the application
startApp();