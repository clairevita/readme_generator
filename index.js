const generateMarkdown = require('./utils/generateMarkdown');

const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptUser() {
    return inquirer.prompt([
      //What is the title?
      //Provide a description of your project
      //Prompt for installation instructions
      //Prompt usage information
      //provide contribution guidelines
      //Provide test instructions
      //Choose a license from a list of licenses
      //Provide github user name (creates a link)
      //provide email address
      //Links in the table of contents should work
      
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
      }
    ]);
  }

//Initializing the program
async function init() {
    console.log("hi")
    try {
      const answers = await promptUser();
  
      const md = generateMarkdown(answers);
  
      await writeFileAsync("README.md", md);
  
      console.log("Successfully wrote to README.md");
    } catch(err) {
      console.log(err);
    }
  }
  
  init();
  
