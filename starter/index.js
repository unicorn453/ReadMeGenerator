const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information:",
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter contribution guidelines:",
  },
  {
    type: "input",
    name: "test",
    message: "Enter test instructions:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your application:",
    choices: [
      "MIT License",
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "GNU General Public License v2.0",
      "BSD 2-Clause Simplified License",
      "BSD 3-Clause New or Revised License",
      "Mozilla Public License 2.0 (MPL-2.0)",
      "GNU Affero General Public License v3.0 (AGPL-3.0)",
    ],
  },
  {
    type: "input",
    name: "GitHubName",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email:",
  },
];

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
      writeToFile("README1.md", readmeContent);
    })
    .catch((err) => {
      console.error("Error occurred:", err);
    });
}

// function call to initialize program
init();
