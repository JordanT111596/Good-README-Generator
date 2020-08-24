// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title.toUpperCase()}
  
  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  To install the necessary dependencies, run the following command in the terminal:
  ---
  ${data.install}
  ---

  ## Usage

  ${data.usage}

  ## License

  This project is licensed under the ${data.license} license

  ## Contributing

  ${data.contribute}

  ## Tests

  To run tests, run the following command in the terminal:
  ---
  ${data.test}
  ---

  ## Questions
  
  If you have any questions about the repository, open an issue or contact me directly at ${data.email}. You can find more of my work at ${data.username}.
  
`;
}

module.exports = generateMarkdown;
