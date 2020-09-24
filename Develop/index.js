// array of questions for user
const questions = [

];

var fs = require("fs");

var generateMd = require("./utils/generateMarkdown.js");
console.log(generateMd);

// function to write README file
fs.appendFile("README.md", process.argv[2] + '\n', function(err) {
    if (err) {
        return console.log(err);
    }
    else {
        console.log("wrote to README");
    }
});

//function writeToFile(fileName, data) {
//}

// function to initialize program
function init() {

}

// function call to initialize program
init();
