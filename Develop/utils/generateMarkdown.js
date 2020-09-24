

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## License
  [![License: ${data.license}](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)

  ## Title
  ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#install)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Test](#test)
  * [Questions](#questions)
  * [License](#license)
  * [Author](#author)
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## Test
  ${data.test}

  ## Questions
  ${data.questions}

  ## Author
  ${data.author} 

`;
}



module.exports = generateMarkdown;
