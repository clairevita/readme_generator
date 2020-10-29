//This function seperates the location of markdown generation to a seperate file, located in the /utls folder.
const generateMarkdown = require('./utils/generateMarkdown');

//These packages are required for the app to function. Run an `npm install` before executing a node index.js in the command line.
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

//This variable enables us to swiftly create a file.
const writeFileAsync = util.promisify(fs.writeFile);

// The promptUser function initiates the series of prompts that the user undergoes, and returns it to the asychronous function.
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

      //Here we are creating a formatted markdown file. For visual simplicity we export this to a separate Javascript file.
      const md = generateMarkdown(answers);
      //Here we call our writeFileAsync function, titling the file README.md and containing our formatted markdown.
      await writeFileAsync("README.md", md);

      //Once this is successfull we log to the user they were successfull.
      console.log("Successfully wrote to README.md");
    } catch(err) {
      //If there was an error, we log it to the user.
      console.log(err);
    }
  }
  //Here we initiate our application.
  init();
  
