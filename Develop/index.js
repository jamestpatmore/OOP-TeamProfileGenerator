// dependencies 
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generateHTML = require("./utils/generateHTML");
const path = require("path");
const { off } = require("process");
const outputDir = path.resolve(__dirname, "output");
const outputPath = path.join(outputDir, "team.html");
const employees = [];



const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 
            `
            ==================
            Hello Manager!!!!!
            ==================
            What is your name?
            ==================
            `,
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter your name");
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your Employee ID',
            validate: employeeId => {
                if(employeeId) {
                    return true;
                } else {
                    console.log("Please enter your Employee ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your Email',
            validate: email => {
                if(email) {
                    return true;
                } else {
                    console.log("Please enter your E-mail");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your Ofiice Number',
            validate: officeNumber => {
                if(officeNumber) {
                    return true;
                } else {
                    console.log("Please enter your Office Number");
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        employees.push(manager);
        promptMenu();
    })
}

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select an option you would like to continue with:',
            choices: 
            [
                'new engineer',
                'new intern',
                'finish building the team'
            ]
        }
    ])
    .then(userChoice => {
        switch (userChoice.menu) {
            case 'new engineer':
            promptEngineer();
            break;
            case 'new intern':
            promptIntern();
            break;
            default:
                buildTeam();
        }
    })

}

const promptEngineer = () => {
    console.log(`
    ============
    New Engineer
    ============
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: engineerName => {
                if(engineerName) {
                    return true;
                } else {
                    console.log("Please enter your name");
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your Employee ID',
            validate: employeeId => {
                if(employeeId) {
                    return true;
                } else {
                    console.log("Please enter your Employee ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your Email',
            validate: email => {
                if(email) {
                    return true;
                } else {
                    console.log("Please enter your E-mail");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Enter your Github Username',
            validate: githubUsername => {
                if(githubUsername) {
                    return true;
                } else {
                    console.log("Please enter your Github Username");
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUsername);
        employees.push(engineer);
        promptMenu();
    })
}

const promptIntern = () => {
    console.log(`
    ==========
    New Intern
    ==========
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: internName => {
                if(internName) {
                    return true;
                } else {
                    console.log("Please enter your name");
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your Employee ID',
            validate: employeeId => {
                if(employeeId) {
                    return true;
                } else {
                    console.log("Please enter your Employee ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter your school',
            validate: school => {
                if(school) {
                    return true;
                } else {
                    console.log("Please enter your school");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your Email',
            validate: email => {
                if(email) {
                    return true;
                } else {
                    console.log("Please enter your E-mail");
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.school, answers.email, answers.employeeId);
        employees.push(intern);
        promptMenu();
    })
}

const buildTeam = () => {
    console.log(`
    =========================
    Finished Building my Team
    =========================
    `);

    if(!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir)
    }
    fs.writeFileSync(outputPath, generateHTML(employees), "utf-8");
}

promptManager();