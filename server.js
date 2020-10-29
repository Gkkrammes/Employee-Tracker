const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "Lukenelson12!",
    database: "employee_db"
});

connection.connect((err) => {
    if (err) throw err;
    begin();
})

function begin() {
    inquirer
        .prompt({
            type: "list",
            name: "action",
            message: "What task would you like to complete?",
            choices: [
                "View All Employees",
                "View All Employees by Department",
                "Vieww All Employees by Manager",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Update Employee Manager"
            ]
        })

        }