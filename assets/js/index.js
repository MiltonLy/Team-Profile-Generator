const inquirer = require('inquirer');
const fs = require('fs');

inquirer 
    .prompt([
        {
            message: "What is your name?",
            name: 'name',
        },
        {
            type: 'list',
            message: 'What is your role?',
            name: 'job',
            choices: ['Employee', 'Engineer', 'Intern', 'Manager'],
        },
        {
            message: 'What is your Email?',
            name: 'email',
        }
    ])
    .then((response) => {
        console.log(response);
    })