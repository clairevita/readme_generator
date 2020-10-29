// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  [![License: ${answers.license}](https://img.shields.io/badge/license-${answers.license}-blue.svg)](https://opensource.porg/licenses${answers.license})
  # ${answers.title}
  ## Table of Contents
  ${answers.description}
  ## 
  ${answers.installation}
  ## 
  ${answers.usage}
  ## 
  ${answers.tests}
  ## 
  ${answers.conGit}, ${answers.conMail}
  
  `;
}
module.exports = generateMarkdown;
