// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
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

  ## License
  ${data.license}

  ## Author
  ${data.author} 

`;
}



module.exports = generateMarkdown;
