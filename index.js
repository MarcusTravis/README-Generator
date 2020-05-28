const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
            name: "name",
            type: "input",
            message: "What is your name?",
    }
    {
            name: "about",
            type: "input",
            message: "Tell me about your repo...",
    }
])
.then(function (user) {
    const template = `
    # ${user.name}

    ## ${user.about}`
    fs.writeFile()
});

