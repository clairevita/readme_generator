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
        name: "name",
        message: "What is your name?"
      },
      {
        type: "input",
        name: "location",
        message: "Where are you from?"
      },
      {
        type: "input",
        name: "hobby",
        message: "What is your favorite hobby?"
      },
      {
        type: "input",
        name: "food",
        message: "What is your favorite food?"
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username"
      },
      {
        type: "input",
        name: "linkedin",
        message: "Enter your LinkedIn URL."
      }
    ]);
  }

// function to write README file
function generateHTML(answers) {
    return ``;
  }


//Initializing the program
async function init() {
    console.log("hi")
    try {
      const answers = await promptUser();
  
      const html = generateHTML(answers);
  
      await writeFileAsync("README.md", html);
  
      console.log("Successfully wrote to README.md");
    } catch(err) {
      console.log(err);
    }
  }
  
  init();
  
