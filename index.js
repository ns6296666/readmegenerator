const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  { type: "input", name: "author", message: "What is the Author's name?" },
  { type: "input", name: "username", message: "What is your github username?" },
  { type: "input", name: "email", message: "What is the your email address?" },
  { type: "input", name: "title", message: "What is the Project title?" },
  {
    type: "input",
    name: "description",
    message: "Please write brief description about your project?",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of License should your Project have?",
    choices: ["MIT", "APACHE 2.0", "BSD", "None"],
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "input",
    name: "contribution",
    message: "What does the user need to know about contributing to the repo?",
  },
  {
    type: "input",
    name: "test",
    message: "How you have tested this application?",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      fs.writeFileSync("Readme.md", generateMarkdown(answers));
    })
    .catch((error) => {
      throw error;
    });
}

// function call to initialize program
init();
