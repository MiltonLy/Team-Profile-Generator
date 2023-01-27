const Employee = require('./roles/employee')
const Engineer = require('./roles/engineer')
const Intern = require('./roles/intern')
const Manager = require('./roles/manager')
const inquirer = require('inquirer');
const fs = require('fs');

var employee = [];


inquirer
    .prompt([
        {
            message: "What is your name?",
            name: 'managerName',
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
        },
        {
            message: 'Who is your Engineer?',
            name: 'enginerName',
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
        },
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
    .then((response) => {
        //all the data received written out
        console.log (response); 
        const responseStr = `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
<main>
    <div class="flex-wrap">
        <section>
            <div class="container">
                <div class="engineer">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <div class="card-header bg-primary text-white">
                            <h4 class="card-title">${data.engineerName}</h4>
                            <h5 class="card-subtitle mb-2">${data.engineerJob}</h5>
                            </div>
                            <p></p>
                            <h6 class="card-text">ID: ${data.engineerId}</h6>
                            <h6 class="card-text">Email: <a href="mailto:${data.email}">${data.engineerEmail}</a></h6>
                            <h6 class="card-text">GitHub: <a href="https://github.com/${data.github}"></a></h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="manager">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <div class="card-header bg-primary text-white">
                            <h4 class="card-title">${data.managerName}</h4>
                            <h5 class="card-subtitle mb-2">${data.managerJob}</h5>
                            </div>
                            <p></p>
                            <h6 class="card-text">ID: ${data.managerId}</h6>
                            <h6 class="card-text">Email: <a href="mailto:${data.email}">${data.managerEmail}</a></h6>
                            <h6 class="card-text">Office Number: ${data.officeNumber}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="intern">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <div class="card-header bg-primary text-white">
                            <h4 class="card-title">${data.internName}</h4>
                            <h5 class="card-subtitle mb-2">${data.internJob}</h5>
                            </div>
                            <p></p>
                            <h6 class="card-text">ID: ${data.internId}</h6>
                            <h6 class="card-text">Email: <a href="mailto:${data.email}">${data.internEmail}</a></h6>
                            <h6 class="card-text">School: ${data.school}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</div>
</main> 
</body>
</html>`
    fs.writeFile('template.html', responseStr, function(err) {
        if (err) {
            throw err;
        }
    })
    });