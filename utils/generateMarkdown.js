// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  - Description
  - Installation
  - Usage
  - License
  - Contribution
  - Tests
  - Questions

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contribution
  ${data.contribution}

  ## Tests
${data.test}

## Questions
If you have any question, Please email me at ${data.email}.

`;
}

module.exports = generateMarkdown;
