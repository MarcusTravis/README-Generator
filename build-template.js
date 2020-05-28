
module.exports = function (user) {
    return` 
# ${user.title}

${user.description}

## Table of Contents

* Getting Started
* prerequisites
* Installing
* Running the tests
* Deployment
* Built With
* Contributing
* Versioning
* Authors
* Licensing
* Acknowledgements

## Getting Started

${user.gettingStarted + " See deployment for notes on how to deploy the project on a live system."}


### Prerequisites

${user.preReqs}

\`\`\` 
Give examples
\`\`\`

### Installing

${user.install}


\`\`\`
Give the example
End with an example of getting some data out of the system or using it for a little demo
\`\`\`

## Running the tests

${user.tests}

## Deployment

${user.deploy}

## Built With

${user.buildWith}

## Contributing

${user.contributers}

## Versioning
(Update this as needed)
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

${user.authors}


## License

${user.license}

## Acknowledgments

${user.acknowledge}
* Hat tip to anyone whose code was used
* Inspirations:${" " + user.inspirations}
`};