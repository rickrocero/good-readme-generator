// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Write a short description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "What are the instructions for use? Include screenshots as needed.",
        name: "usage"
    },
    {
        type: "input",
        message: "What are the guidelines on how to contribute?",
        name: "contributing"
    },
    {
        type: "input",
        message: "Write tests for your application. Provide examples of how to run them.",
        name: "tests"
    },
    {
        type: "list",
        message: "Choose a license for your application.",
        choices: ["IBM Public License Version 1.0", "The MIT License", "Mozilla Public License 2.0"],
        name: "license"
    },
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
        message: "Provide instructions on how to be reached for questions",
        name: "contact"
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt(questions).then(answers => {

        const renderReadme = data => {
            const readmeOutput = `
# ${data.title}
![Github license]()
            
## Description
${data.description}
            
## Table of Contents
            
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
            
## Installation
${data.installation}
            
## Usage
${data.usage}
            
## License
${data.license}
            
## Contributing
${data.contributing}
            
## Tests
${data.tests}
            
## Questions
Github: [${data.github}](https://github.com/${data.github})
Email: ${data.email}
How to contact me: ${data.contact}
    `
return readmeOutput
}
        const readmeOutput = renderReadme(answers);
        
            fs.writeFile("generator.md", readmeOutput, (err) => {
                if (err) {
                    throw err;
                }
                console.log("README generated!")
            })
        })
}

writeToFile();

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
