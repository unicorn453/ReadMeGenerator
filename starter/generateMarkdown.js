function generateMarkdown(answers) {
  const licenseBadges = {
    "MIT License":
      "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    "Apache License 2.0":
      "![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)",
    "GNU General Public License v3.0":
      "![License: GPL-3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)",
    "GNU General Public License v2.0":
      "![License: GPL-2.0](https://img.shields.io/badge/License-GPL%202.0-blue.svg)",
    "BSD 2-Clause Simplified License":
      "![License: BSD-2-Clause](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)",
    "BSD 3-Clause New or Revised License":
      "![License: BSD-3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)",
    "Mozilla Public License 2.0 (MPL-2.0)":
      "![License: MPL-2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)",
    "GNU Affero General Public License v3.0 (AGPL-3.0)":
      "![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL%203.0-blue.svg)",
  };
  const licenseBadge = licenseBadges[answers.license];
  const githubLink = `https://github.com/${answers.GitHubName}`;
  const contactInfo = `For any questions or inquiries, please contact [${answers.GitHubName}](${githubLink}) via email at ${answers.email}.`;
  return `
# ${answers.title} ${licenseBadge}

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
${contactInfo}
`;
}

module.exports = generateMarkdown;
