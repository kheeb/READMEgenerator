// packages needed for this application
const fs = require('fs');    
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');

// array of questions for user input to fill out README template
const questions = [
    {
        type: 'input',
        name: 'email',
        message: "What is your email?"
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What would you like to name your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description to explain the what, why, and how of your project.'

    },
    {
        type: 'checkbox',
        name: 'contents',
        message: 'Check the boxes to choose what to include in your README.md',
        choices: [ 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions']
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Check the box to select your license of choice.',
        choices: ['GNU General Public', 'MIT', 'The Unlicense', 'None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines for how other developers may contribute to your project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide tests for your application and how to run them.'
    },
    {
        type: 'input',
        name: 'contact',
        message: "Please provide instructions for how to contact you with any questions."
    },
];

// function to write README file and alert when successful, otherwise throws error
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('README.md generated successfully!')
    );
}

// function to initialize app to run through inquirer questions and add user answers to the new README file
function init() {
    inquirer
        .prompt(questions)
        .then((response) => { console.log(response);
            const fileNew = generateMarkdown(response);
            const fileName = 'README.md';
            writeToFile(fileName, fileNew)
        })
}

// Function call to initialize app
init();
