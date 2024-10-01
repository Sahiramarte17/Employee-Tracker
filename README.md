# Employee-Tracker
The Employee Tracker is a command-line application that allows business owners to manage their company's employee database efficiently. Users can view and manage departments, roles, and employee information, which aids in organizing and planning business operations.

User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business.

Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.

WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids.

WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role.

WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to.

WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database.

WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database.

WHEN I choose to add an employee
THEN I am prompted to enter the employee's first name, last name, role, and manager, and that employee is added to the database.

WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role, and this information is updated in the database.

# Installation

1.Clone this repository to your local machine.

Copy code: git clone https://github.com/yourusername/employee-tracker.git

2.Navigate to the project directory.

Copy code: cd employee-tracker

3.Install the necessary dependencies.

Copy code: npm install

# Usage

1.Ensure you have PostgreSQL installed and running.

2.Create a database and run the schema.sql and seeds.sql files to set up the database schema and initial data.

3.Run the application : node index.js
