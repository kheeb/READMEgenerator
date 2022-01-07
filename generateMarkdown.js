// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license == 'GNU General Public') {
        return `[![GNU License](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    } else if (license == 'MIT') {
        return `![MIT License](https://img.shields.io/badge/license-MIT-blue)`
    } else if (license == 'The Unlicense') {
        return `![Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`
    } else if (license == 'Creative Commons') {
        return `![CC-0 License](https://img.shields.io/badge/License-CC--0-blue.svg)`
    } else if (license == 'None') {
        return ''
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license == 'GNU Generasl Public') {
        return `https://www.gnu.org/licenses/gpl-3.0.en.html`
    } else if (license == 'MIT') {
        return `https://opensource.org/licenses/MIT`
    } else if (license == 'The Unlicense') {
        return `https://unlicense.org/`
    } else if (license == 'Creative Commons') {
        return `https://creativecommons.org/licenses/by/4.0/legalcode`
    } else if (license == 'None') {
        return ''
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
        return license + ` is the chosen license for this project.`
    } else {
        return ''
    }
}

// TODO: Create a function to generate markdown for README
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
  
  ##License
  ${renderLicenseSection(data.license)}
  * ${renderLicenseLink9(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.contact}
  ${data.email}
`;
}

module.exports = generateMarkdown;
