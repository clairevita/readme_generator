// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}
  ## ${answers.description}
  ## ${answers.installation}
  ## ${answers.usage}
  ## ${answers.conGit}, ${answers.conMail}
  ## ${answers.tests}
  `;
}

module.exports = generateMarkdown;
