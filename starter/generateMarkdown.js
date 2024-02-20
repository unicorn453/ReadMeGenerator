function generateMarkdown(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

## Tests
${answers.test}

## License
This project is licensed under the ${answers.license}.

## Questions
For any questions or inquiries, please contact ${answers.GitHubName} via email at ${answers.email}.
`;
}

module.exports = generateMarkdown;
