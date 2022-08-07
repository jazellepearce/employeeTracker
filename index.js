const fs = require("fs");
const inquirer = require("inquirer");
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employees'
});




let answers = [];
const questions = [
    {
        type: "list",
        name: 'options',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'View All Departments', 'View All Roles', 'Add Employee', 'Add Department', 'Add Role',  'Update Employee Role', 'Remove Employee', 'Remove Department', 'Remove Role', 'View All Employees by Department', 'View all Employees by Manager', 'Update Employee Manager', 'Total Sal']
    },
]
function onAnswer(response) {
    switch(response.options) {
        case "View All Employees":
            viewEmployees()
            break;
        case "View All Departments":
            allDeps()
            break;
        case "View All Roles":
            allRoles()
            break;
        case "Add Employee":
            addEmployee()
            break;
        case "Add Department":
            addDep()
            break;
        case "Add Role":
            addRole()
            break;
        case "Update Employee Role":
            updateRole()
            break;
        case "Remove Employee":
            removeEmployee()
            break;
        case "Remove Department":
            removeDept()
            break;
        case "Remove Role":
            removeRole()
            break;

};

function allRoles() {
    connection.query(
        'SELECT * FROM `role_employee`',
        function(err, results, fields) {
            console.log(results);
        }
    )

}
function viewEmployees() {
    connection.query(
        'SELECT * FROM `employee`',
        function(err, results, fields) {
            console.log(results);
        }
    )
}

function allDeps() {
    connection.query(
        'SELECT * FROM `department`',
        function(err, results, fields) {
            console.log(results);
        }
    )

}







function init() {
    inquirer.prompt(questions).then((data) => {
        onAnswer(data)
  
    }).catch(console.error)
  }

  init()}