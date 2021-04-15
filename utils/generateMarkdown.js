// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT") {
    return "MIT license";
  } else if(license === "APACHE 2.0") {
    return "APACHE 2.0 license";
  } else if(license === "GPL 3.0") {
    return "GPL 3.0 license";
  } else if(license === "BSD 3") {
    return "BSD 3 license";
  } else {
    return "";
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "MIT") {
    return "https://img.shields.io/badge/License-MIT-brightgreen";
  } else if(license === "APACHE 2.0") {
    return "https://img.shields.io/badge/License-APACHE%203.0-yellow";
  } else if(license === "GPL 3.0") {
    return "https://img.shields.io/badge/License-GPL%203.0-red";
  } else if(license === "BSD 3") {
    return "https://img.shields.io/badge/License-BSD%203-blue";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

![${renderLicenseBadge(data.license)}](${renderLicenseLink(data.license)})

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
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github})
`;
}


module.exports = generateMarkdown;
