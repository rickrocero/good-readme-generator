// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the project's name?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a short description of your project.",
        name: "description"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 3.0", "GPL 3.0", "BSD 3", "None"],
        name: "license"
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installation"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing"
    }
]
inquirer.prompt(questions).then(answers => {
console.log(answers)
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
fs.writeFile("README.md", generateMarkdown(answers), (err) => {
    if (err) {
        throw err;
    } else {
        console.log("README.md generated!")
    }
})
});

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
