
module.exports = function (user) {
    return` 
# ${user.title}

![GitHub](https://img.shields.io/github/repo-size/${user.githubUserName}/${user.repoName}?style=plastic) ![GitHub](https://img.shields.io/github/last-commit/${user.githubUserName}/${user.repoName}?style=plastic) ![GitHub](https://img.shields.io/github/languages/top/${user.githubUserName}/${user.repoName}?style=plastic) ![GitHub](https://img.shields.io/github/license/${user.githubUserName}/${user.repoName}?style=plastic) ![GitHub](https://img.shields.io/github/followers/${user.githubUserName}?style=social)

## Table of Contents

* [Prerequisites](#prerequisites)
* [Installing](#Installing)
* [Deployment](#deployment)
* [Built With](#built-with)
* [Contributing](#contributing)
* [Version](#version)
* [Authors](#authors)
* [License](#license)
* [Acknowledgements](#acknowledgements)

## Description

${user.description}

### Prerequisites

${user.preReqs}

### Installing

${user.install}


## Deployment

${user.deploy}

## Built With

${user.builtWith}

## Contributing

${user.contributers}

## Version
(Update this as needed)
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

${user.authors}

## License

${user.license}

## Acknowledgements

${user.acknowledge}
* Hat tip to all open-source frameworks, libraries, and anyone whose code was used!
* Inspirations:${" " + user.inspirations}
`};