// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  [![License: ${answers.license}](https://img.shields.io/badge/license-${answers.license}-blue.svg)](https://opensource.porg/licenses${answers.license})
  # ${answers.title}
  ## Table of Contents
  ${answers.description}
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## Testing
  ${answers.tests}
  ## Questions
  Have a question? You can reach me at:
  Github: ${answers.conGit} 
  Email: ${answers.conMail}
  
  `;
}

module.exports = generateMarkdown;
