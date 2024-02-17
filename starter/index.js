const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  // Prompt the user for input using inquirer
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate README content based on user answers
      const readmeContent = generateMarkdown(answers);

      // Write README file
      writeToFile("README.md", readmeContent);
    })
    .catch((err) => {
      console.error("Error occurred:", err);
    });
}

// function call to initialize program
init();
