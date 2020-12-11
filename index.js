const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Lukenelson12!",
    database: "employee_db"
});

connection.connect(function(err) {
    if (err) throw err;
    prompt();
});

function prompt() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What task would you like to complete?",
            choices: [
                "Add a department",
                "Add a role",
                "Add an employee",
                "View all departments",
                "View all roles",
                "View all employees",
                "Update employee",
                
            ]
        })
        .then(function (answer) {
            if (answer.action === 'Add a department') {
                addDepartment();
            }
            else if(answer.action === 'Add a role') {
                addRole();
            }
            else if(answer.action === 'Add an employee') {
                addEmployee();
            }
            else if(answer.action === 'View all departments') {
                viewDepartments();
            }
            else if(answer.action === 'View all roles') {
                viewRoles();
            }
            else if(answer.action === 'View all employees') {
                viewEmployees();          
            }
            else if(answer.action === "Update employee") {
                updateEmployee();
            }     
        
            else{
              connection.end();
            }
          });
    }