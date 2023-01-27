# Team-Profile-Generator

## Technology Used

- Git  [https://git-scm.com/](https://git-scm.com/)
- JavaScript[https://www.w3schools.com/js/default.asp]
(https://www.w3schools.com/js/default.asp)
- Node.JS [https://nodejs.org/en/](https://nodejs.org/en/)
- Inquirer [https://www.npmjs.com/package/inquirer](https://www.npmjs.com/package/inquirer)
-Jest [https://www.npmjs.com/package/jest](https://www.npmjs.com/package/jest)

## Description

This app will generate a new webpage with several cards that have information of your team and contact informations.

## Usage Instruction

First download node.js, once finished open terminal in your code editor, then enter:
```npm install```
This allows your to run proper commands in the terminal. Next type in the command:
```node index.js```
so you can begin answering a questionaire to fill in your cards.

Below is a video walk through of how the app runs.

https://youtu.be/_KNajXNw5OA

## Learning Point

I was stuck for two hours trying to figure out why my code was ran and ended before I could even type the first answer. I figured out the issue was that I didnt have a 'return' typed in my inquirer code.

```return inquirer```

Without the 'return' code, the code kept running and ending right away. Another issue I ran into was that my template.js was not calling the right code. I got my prompt code and template code callback mixed up. I fixed the issue by rewriting the template code to call on the roles file which is the correct syntax.

```${data.managerName} >>> ${data.name}```

Testing was also an issue at one point where I was running into a 'script not found issue'. So I manually typed out a script in package.json file. Also the test would not find my test code unless the folder was written as __tests__.

## Author Info

Milton Ly

Github https://github.com/MiltonLy