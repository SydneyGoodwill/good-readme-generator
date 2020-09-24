var inquirer = require("inquirer");
var fs = require("fs");
var generateMd = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description of the project?",
        name: "description"
    },
    {
        type: "input",
        message: "Who contributed on this project?",
        name: "contributors"
    },
    {
        type: "input",
        message: "Project installation?",
        name: "install"
    },
    {
        type: "input",
        message: "How do you use your application?",
        name: "usage"
    },
    {
        type: "input",
        message: "What tests were run while making this application?",
        name: "test"
    },
    {
        type: "input",
        message: "Please provide email if user has any questions:",
        name: "questions"
    },
    {
        type: "input",
        message: "Who is the author of this application?",
        name: "author"
    },
    {
        type: "list",
        message: "Please choose a license from the following options:",
        name: "license",
        choices: ["MIT", "GNU GPLv3", "Apache 2.0"]
    }
];



// function to write README file
fs.writeFile("README.md", questions.response, "utf8", (error) => {
    if (error) throw error;
    console.log("Data appended to file!");

});


// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        const markdown = generateMd(data);
        fs.appendFile("README.md", markdown, (err) => {
            if (err) throw err;
            console.log("README written successfully");
        });
    })

}

// function call to initialize program
init();
