const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
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
                "Add Employee",
                "Remove Employee",
                "Update Employee",
                
            ]
        })
        .then(function (answer) {
            switch (answer.main) {
                case ("View"):
                    viewEmployees();
                    break;
                case ("Add Employee"):
                    addEmployee();
                    break;
                case ("Remove Employee"):
                    removeEmployee();
                    break;
                case ("Update Employee"):
                    updateRole();
                    break;
                }
        })};
begin()

function viewEmployees() {
    inquirer
        .prompt(
            {
                type: "list",
                name: "view",
                message: "How would you like to view the employee?",
                choices: [
                    "by name",
                    "by role",
                    "by department",
                ]
            })
        .then(function (answer) {
            switch (answer.view) {
                case ("name"):
                    connection.query('SELECT * FROM name', function (err, res) {
                        if (err) throw err;
                        console.table(res)
                        prompt()
                    })
                    break;
                case ("role"):
                    connection.query('SELECT * FROM role', function (err, res) {
                        if (err) throw err;
                        console.table(res)
                        prompt()
                    })
                    break;
                case ("department"):
                    connection.query('SELECT * FROM department', function (err, res) {
                        if (err) throw err;
                        console.table(res)
                        prompt()
                    })
                    break;
            }
        })
}