const generateMarkdown = require('./utils/generateMarkdown');

const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptUser() {
    return inquirer.prompt([    
        {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
      },
      {
        type: "input",
        name: "description",
        message: "Provide a description for your project."
      },
      {
        type: "input",
        name: "installation",
        message: "Provide installation instructions for your users."
      },
      {
        type: "input",
        name: "usage",
        message: "Describe the usage of this project."
      },
      {
        type: "input",
        name: "contributions",
        message: "Describe the usage of this project."
      },
      {
        type: "input",
        name: "conGit",
        message: "Provide your Github user name for users to contact you regarding contributions."
      },
      {
        type: "input",
        name: "conMail",
        message: "Provide your email for users to contact you regarding contributions."
      },
      {
        type: "input",
        name: "tests",
        message: "Provide test instructions for your users."
      },
      {
        type: "list",
        name: "license",
        message: "Select which Open Source license you will use to protect this project.",
        choices: ["Apache-2.0", "BSD-3-Clause", "EPL-1.0", "IPL-1.0", "ISC", "MIT", "MPL-2.0", "Artistic-2.0"]
      }
    ]);
  }

//Initializing the program
async function init() {
    console.log("hi")
    try {
      const answers = await promptUser();
      if (answers.license == "Other"){
        answers.license =inquirer.prompt([{
          type: "input",
          name: "license",
          message: "Input the license you will be using to protect this project"
        }]);
      }


      const md = generateMarkdown(answers);
      
      await writeFileAsync("README.md", md);

  
      console.log("Successfully wrote to README.md");
    } catch(err) {
      console.log(err);
    }
  }
  
  init();
  
