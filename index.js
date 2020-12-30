//Node Modules
const fs = require("fs");
const util = require("util");

//NPM Packages
const inquirer = require("inquirer");

//Local Modules
const buildTemplate = require("./build-template");

//Promisify
const writeFile = util.promisify(fs.writeFile);


inquirer.prompt([
    {
        name:"title",
        type:"input",
        message:"What is the project title?",
    },
    {
        name:"githubUserName",
        type:"input",
        message:"What is your Github user name??",
    },
    {
        name:"repoName",
        type:"input",
        message:"What is the name of this Github repository?",
    },
    {
        name:"description",
        type:"input",
        message:"One Paragraph of project description goes here:",
    },
    {
        name: "preReqs",
        type: "input",
        message: "What software does the user need to install and how do you install them?",
    },
    {
        name: "install",
        type: "input",
        message: "Give me a step by step series of examples that tell you how to install anything required to get repository running on user screen. (Yse <br> to make line breaks between steps i.g.: Step 01. Install<br> Step 02. Next step):",
    },
    {
        name: "deploy",
        type: "input",
        message: "Add notes on how to deploy this on a live system:",
    },
    {
        name: "builtWith",
        type: "input",
        message: "Give list of coding languages and frameworks etc.. i.g.:* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used * [Maven](https://maven.apache.org/) - Dependency Management * [ROME](https://rometools.github.io/rome/) - Used to make repository:",
    },
    {
        name: "contributers",
        type: "input",
        message: "Tell me any and all contributers to project:",
    },
    {
        name: "authors",
        type: "input",
        message: "Who were the Authors? (please use this format:* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)):",
    },
    {
        name: "license",
        type: "input",
        message: "Input lisences:",
    },
    {
        name: "acknowledge",
        type: "input",
        message: "Acknowledgements:",
    },
    {
        name: "inspirations",
        type: "input",
        message: "Inspirations:",
    },
])
.then(function (user){
    console.log(user);

    writeFile("newREADME.md", buildTemplate(user));
});
