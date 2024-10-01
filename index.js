const inquirer = require("inquirer")
const pg = require("pg")


inquirer.prompt([
    {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "Add Employee",
            "Add Roles",
            'View All Department'
        ]
    },
   
])