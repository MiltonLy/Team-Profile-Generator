const Employee = require('./roles/employee')
const Engineer = require('./roles/engineer')
const Intern = require('./roles/intern')
const Manager = require('./roles/manager')
const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./template/template')

var employees = [];

const managerInfo = function () {
    return inquirer
        .prompt([
            {
                message: "What is your name?",
                name: 'name',
            },
            {
                type: 'list',
                message: 'What is your job?',
                name: 'managerJob',
                choices: ['Webtoon Designer', 'Walrus', 'Manager'],
            },
            {
                message: 'What is your ID number?',
                name: 'managerId',
            },
            {
                message: 'What is your office number?',
                name: 'officeNumber',
            },
            {
                message: 'What is your Email?',
                name: 'managerEmail',
            }
        ])
        .then(managerData => {
            const { name, managerJob, managerId, managerEmail, officeNumber } = managerData;
            const manager = new Manager(name, managerJob, managerId, managerEmail, officeNumber);
            employees.push(manager);
            console.log(managerData);
            return managerData;
        })
}

const engineerInfo = function () {
     return inquirer
        .prompt([
            {
                message: 'Who is your Engineer?',
                name: 'engineerName',
            },
            {
                type: 'list',
                message: 'What is their job?',
                name: 'engineerJob',
                choices: ['Engineer', 'Coal Miner', 'House Flipper'],
            },
            {
                message: ' What is your ID number?',
                name: 'engineerId',
            },
            {
                message: ' What is your Email?',
                name: 'engineerEmail',
            },
            {
                message: ' What is your github username?',
                name: 'githubUrl'
            }
        ])
        .then(engineerData => {
            const { engineerName, engineerJob, engineerId, engineerEmail, githubUrl } = engineerData;
            const engineer = new Engineer(engineerName, engineerJob, engineerId, engineerEmail, githubUrl);
            employees.push(engineer)
            console.log(engineer)
            return engineerData;
        })
}

const internInfo = function () {
    return inquirer
        .prompt([
            {
                message: 'Who is this?',
                name: 'internName',
            },
            {
                type: 'list',
                message: 'What is your job?',
                name: 'internJob',
                choices: ['Intern', 'Intern', 'Intern'],
            },
            {
                message: 'What is your ID number?',
                name: 'internId',
            },
            {
                message: 'What is your email?',
                name: 'internEmail',
            },
            {
                message: 'What school did you go to?',
                name: 'school'
            }
        ])
        .then(internData => {
            const { internName, internJob, internId, internEmail, school } = internData
            const intern = new Intern(internName, internJob, internId, internEmail, school);
            employees.push(intern);
            
        })
}

managerInfo()
    .then(engineerInfo)
    .then(internInfo)
    .then(data => {
        console.log(data)
        const pageGenerator = template(employees)

        fs.writeFile('./index.html', pageGenerator, err => {
            if (err) {
                console.log(err);
                return;
            } else {
                console.log('we did it!')
            }
        })
    })

// console.log ("wow")
//     // setTimeout(() => {
//     //     console.log("Delayed for 1 second.");
//     //   }, 1000)

// //     function sleep(ms) {
// //         return new Promise((resolve) => {
// //           setTimeout(resolve, ms);
// //         });
// //       }
// //  await sleep(1000)