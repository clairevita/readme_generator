// This function generates our formatted markdown text.
function generateMarkdown(answers) {
  return `
  [![License: ${answers.license}](https://img.shields.io/badge/license-${answers.license}-blue.svg)](https://opensource.porg/licenses${answers.license})
  # ${answers.title}
  ## Table of Contents
  - [About](#about)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Testing](#testing)
  - [Questions](#questions)
  ## About
  ${answers.description}
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## Contributions
  ${answers.contributions}
  ## Testing
  ${answers.tests}
  ## Questions
  Have a question? You can reach me at:
  Github: ${answers.conGit} 
  Email: ${answers.conMail}
  
  `;
}

module.exports = generateMarkdown;
