const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template.js");

init();

let employeeTeam = [];

function init() {


    inquirer.prompt([
        {
            type: "input",
            name: "fullname",
            message: "Enter full name"
        },
        {
            type: "input",
            name: "id",
            message: "Enter Employee ID "
        },
        {
            type: "input",
            name: "email",
            message: "Enter Employee Email"
        },
        {
            type: "input",
            name: "office",
            message: "Enter Manager Office Number"
        },
    ]).then(response => {
        console.log(response);
        // create new object Instance (Manager Instance)
        let newManager = new Manager(response.fullname, response.id, response.email, response.office)
        console.log(newManager);
        employeeTeam.push(newManager);

        // run a function to decide what happens next
        userChoice();
    })
}


function userChoice() {
    inquirer.prompt({
        type: "list",
        name: "choice",
        choices: ["Add Engineer", "Add Intern", "Build Team"]
    }).then(res => {
        if (res.choice === "Add Engineer") {
            addEngineer();
        }
        if (res.choice === "Add Intern") {
            addIntern();
        }
        if (res.choice === "Build Team") {
            addBuildTeam();
        }
    })
}

function addEngineer() {

    inquirer.prompt([
        {
            type: "input",
            name: "fullname",
            message: "Enter full name"
        },
        {
            type: "input",
            name: "id",
            message: "Enter Employee ID "
        },
        {
            type: "input",
            name: "email",
            message: "Enter Employee Email"
        },
        {
            type: "input",
            name: "GitHub",
            message: "Enter Github Username"
        },
    ]).then(response => {
        console.log(response);
        // create new object Instance (Manager Instance)
        let newEngineer = new Engineer(response.fullname, response.id, response.email, response.GitHub)
        console.log(newEngineer);
        employeeTeam.push(newEngineer);
        // run a function to decide what happens next
        userChoice();
    })
}

function addIntern() {

    inquirer.prompt([
        {
            type: "input",
            name: "fullname",
            message: "Enter full name"
        },
        {
            type: "input",
            name: "id",
            message: "Enter Employee ID "
        },
        {
            type: "input",
            name: "email",
            message: "Enter Employee Email"
        },
        {
            type: "input",
            name: "school",
            message: "Enter Current University"
        },
    ]).then(response => {
        console.log(response);
        // create new object Instance (Manager Instance)
        let newIntern = new Intern(response.fullname, response.id, response.email, response.school)
        console.log(newIntern);
        employeeTeam.push(newIntern);
        // run a function to decide what happens next
        userChoice();
    })
}

function addBuildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(employeeTeam), "utf-8");
}
