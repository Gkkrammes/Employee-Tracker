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

function addEmployee() {
    inquirer
        .prompt(
            {
                type: "list",
                name: "add",
                message: "What would you like to add?",
                choices: [
                    "department",
                    "roles",
                    "employee"
                ]
            })
        .then(function (answer) {
            switch (answer.add) {
                case ("department"):
                    inquirer.prompt(
                        {
                            type: "input",
                            name: "department_add",
                            message: "What department would you like to add?"
                        }
                    )
                    .then(function (answer) {
                        connection.query('INSERT INTO department (department_name) VALUES ("${answer.department_add}");', function(err, res) {
                            if (err) throw err;
                        })
                        console.log("Department Added")
                        prompt()
                    })
                    break;
                case ("roles"):
                    inquirer.prompt(
                        {
                            type: "input",
                            name: "title",
                            message: "What is the title of the role?"
                        },
                        {
                            type: "input",
                            name: "salary",
                            message: "What is the salary for this role?"
                        },
                        {
                            type: "input",
                            name: "department_id",
                            message: "What is the department id for this role?"
                        }
                    )
                    .then(function (answer) {
                        connection.query('INSERT INTO roles (title, salary, department_id) VALUES ("${answer.title}", "${answer.salary}", "${answer.department_id}");', function(err, res) {
                            if (err) throw err;
                        })
                        console.log("Role Added")
                        prompt()
                    })
                    break;
                case ("roles"):
                    inquirer.prompt(
                        {
                            type: "input",
                            name: "first_name",
                            message: "What is the employee's first name?"
                        },
                        {
                            type: "input",
                            name: "last_name",
                            message: "What is the employee's last name?"
                        },
                        {
                            type: "input",
                            name: "role_id",
                            message: "What is the employee's role id?"
                        },
                        {
                            type: "input",
                            name: "manager_id",
                            message: "What is the employee's manager id?"
                        }
                    )
                    .then(function (answer) {
                        connection.query('INSERT INTO roles (first_name, last_name, role_id, manager_id) VALUES ("${answer.first_name}", "${answer.last_name}", "${answer.role_id}", "${answer.manager_id}");', function(err, res) {
                            if (err) throw err;
                        })
                        console.log("Employee Added")
                        prompt()
                    })
                    break;
        }

    })
}