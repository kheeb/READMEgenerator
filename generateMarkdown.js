// function that returns a license badge based on which license is passed in
// if there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license == 'GNU General Public') {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license == 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (license == 'The Unlicense') {
        return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    } else if (license == 'None') {
        return ''
    }
}

// function that returns the license link
// if there is no license, return an empty string
function renderLicenseLink(license) {
    if (license == 'GNU General Public') {
        return `https://www.gnu.org/licenses/gpl-3.0`
    } else if (license == 'MIT') {
        return `https://opensource.org/licenses/MIT`
    } else if (license == 'The Unlicense') {
        return `https://unlicense.org/`
    } else if (license == 'None') {
        return ''
    }
}

// function that returns the license section of README
// if there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
        return license + ` is the chosen license for this project.`
    } else {
        return ''
    }
}

// function to invite readers to follow a link to creator's github profile
// if no github entered, returns empty string
function renderGithub(username) {
    if (username) {
        return `Check out my GitHub at https://github.com/` + username
    } else {
        return ''
    }
}

// function to generate markdown for README with user's data
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ## Description
  ${data.description}

  ## Table of Contents
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [License](#License)
    * [Contributing](#Contributing)
    * [Tests](#Tests)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseSection(data.license)}
  * ${renderLicenseLink(data.license)}
  * ${renderLicenseBadge(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${renderGithub(data.username)}
  ${data.contact}
  ${data.email}
`;
}

module.exports = generateMarkdown;
