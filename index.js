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
    inquirer.prompt({
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
            switch (answer.action) {
                case ("Add a department"):
                    addDept();
                    break;
                case ("Add a role"):
                    addRole();
                    break;
                case ("Add an employee"):
                    addEmployee();
                    break;
                case ("View all departments"):
                    viewDepartments();
                    break;
                case ("View all roles"):
                    viewRoles();
                    break;
                case ("View all employees"):
                    viewEmployees();
                    break;
                case ("Update Employee"):
                    updateEmployee();
                    break;
            };
        })
    };

    function addDept() {
        inquirer
        .prompt([
        {
          name: "deptID",
          type: "input",
          message: "What is the ID of the new department?",
        },
        {
        name: "deptName",
        type: "input",
        message: "What is the name of the new department?",
        }
        ])
  
        .then(function(response) {
            connection.query("INSERT INTO departments SET ?", {
                    id: response.deptID,
                    department_name: response.deptName,
            },
            function(err) {
                if (err) throw err;
                console.log("Your department was created successfully!");
                prompt();
                }
            );
        });
    };

    function addRole() {
        inquirer
        .prompt([
        {
          name: "roleID",
          type: "input",
          message: "What is the ID of the new role?",
        },
        {
        name: "roleTtile",
        type: "input",
        message: "What is the title of the new role?",
        },
        {
        name: "roleSalary",
        type: "input",
        message: "What is the salary of the new role?",
        },
        {
        name: "roleDepartment",
        type: "input",
        message: "What is the department ID of the new role?",
        }
        ])
  
        .then(function(response) {
            connection.query("INSERT INTO roles SET ?", {
                    id: response.roleID,
                    title: response.roleTtile,
                    salary: response.roleSalary,
                    department_id: response.roleDepartment,
            },
            function(err) {
                if (err) throw err;
                console.log("Your new role was created successfully!");
                prompt();
                }
            );
        });
    };

    function addEmployee() {
        inquirer
        .prompt([
        {
          name: "employeeID",
          type: "input",
          message: "What is the ID of the new employee?",
        },
        {
        name: "empFirstName",
        type: "input",
        message: "What is the first name of the new employee?",
        },
        {
        name: "empLastName",
        type: "input",
        message: "What is the last name of the new employee?",
        },
        {
        name: "empRole",
        type: "input",
        message: "What is the role ID for the new employee?",
        },
        {
        name: "empManager",
        type: "input",
        message: "What is id of the new employee's manager?",
        }
        ])
  
        .then(function(response) {
            connection.query("INSERT INTO employee SET ?", {
                    id: response.employeeID,
                    first_name: response.empFirstName,
                    last_name: response.empLastName,
                    role_id: response.empRole,
                    manager_id: response.empManager,
            },
            function(err) {
                if (err) throw err;
                console.log("Your new employee was created successfully!");
                prompt();
            });
        });
    };

    function viewDepartments() {
        let query = "SELECT * FROM  departments";
        connection.query(query, function(err, res) {
                console.table(res);
                prompt();
        });
    };

    function viewEmployees() {
        let query = "SELECT * FROM  employee";
        connection.query(query, function(err, res) {
            console.table(res);
            prompt();
        });
    };

    function viewRoles() {
        let query = "SELECT * FROM  roles";
        connection.query(query, function(err, res) {
            console.table(res);
            prompt();
        });
    };

    function updateEmployee() {
            let choices = [];
    
            connection.query("SELECT first_name FROM  employee", function(err, res) {
               res.forEach(row => {
                   choices.push(row.first_name);
                   return choices;
               });
            
            inquirer
            .prompt([{
              name: "employeeName",
              type: 'list',
              message: "Which employee you would like to update?",
              choices: choices
             },
            {
            name: "empNewRole",
            type: "input",
            message: "What is the new role ID of the employee?",
            }])
                .then(function(response) {
                    connection.query(
                        `UPDATE employee SET role_id = ${response.empNewRole} WHERE first_name = "${response.employeeName}"`, {
                    },
                    function(err) {
                        if (err) throw err;
                        console.log("Employee Updated!");
                        prompt();
                    }
                )}
            )}
    )};
    