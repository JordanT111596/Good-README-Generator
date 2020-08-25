// function to generate markdown for README
function generateMarkdown(data) {

  //The license badge (or lack thereof) amd description of the license changes based on user choice
  if (data.license === "MIT") {
    var licenseBadge = "![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)";
    var licenseText = "This project is licensed under the MIT license";
  } else if (data.license === "APACHE 2.0") {
    var licenseBadge = "![GitHub license](https://img.shields.io/badge/license-Apache--2.0-blue.svg)";
    var licenseText = "This project is licensed under the APACHE 2.0 license";
  } else if (data.license === "GPL 3.0") {
    var licenseBadge = "![GitHub license](https://img.shields.io/badge/license-GPL--3.0-blue.svg)";
    var licenseText = "This project is licensed under the GPL 3.0 license";
  } else if (data.license === "BSD 3") {
    var licenseBadge = "![GitHub license](https://img.shields.io/badge/license-BSD--3-blue.svg";
    var licenseText = "This project is licensed under the BSD 3 license";
  } else if (data.license === "None") {
    var licenseBadge = "";
    var licenseText = "This project is not currently licensed";
  }

  //returns the entire markdown document with filled in user input
  return "# " + data.title.toUpperCase() + "\n\n" + licenseBadge + "\n\n## Description\n\n" + data.description + "\n\n## Table of Contents\n\n* [Installation](#installation)\n\n* [Usage](#usage)\n\n* [License](#license)\n\n* [Contributing](#contributing)\n\n* [Tests](#tests)\n\n* [Questions](#questions)\n\n## Installation\n\nTo install the necessary dependencies, run the following command in the terminal:\n```\n" + data.install +
    "\n```\n\n## Usage\n\n" + data.usage + "\n\n## License\n\n" + licenseText + "\n\n## Contributing\n\n" + data.contribute + "\n\n## Tests\n\nTo run tests, run the following command in the terminal:\n```\n" + data.test + "\n```\n\n## Questions\n\nIf you have any questions about the repository, open an issue or contact me directly at " + data.email + ". You can find more of my work at [" + data.username + "](https://github.com/" + data.username + ").";
}

module.exports = generateMarkdown;
