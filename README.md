### Hexlet tests and linter status:

[![Actions Status](https://github.com/Rema04Dev/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Rema04Dev/frontend-project-lvl2/actions)

[![jest-test](https://github.com/Rema04Dev/frontend-project-lvl2/actions/workflows/jest-test.yml/badge.svg)](https://github.com/Rema04Dev/frontend-project-lvl2/actions/workflows/jest-test.yml)

[![Linter Status](https://github.com/Rema04Dev/frontend-project-lvl2/actions/workflows/linter.yml/badge.svg)](https://github.com/Rema04Dev/frontend-project-lvl2/actions/workflows/linter.yml)

<!-- Codeclimate links -->
[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/Rema04Dev/frontend-project-lvl2)

[![Test Coverage](https://api.codeclimate.com/v1/badges/7f4267c8623d9f28cddd/test_coverage)](https://codeclimate.com/github/Rema04Dev/frontend-project-lvl2/test_coverage)

## Description
This is utility that determines the difference between two data structures. A similiar mechanism is used when outputting tests or when automatically tracking changes in configuration files.

Utility features:
 - Support for different input formats: ```yaml```, ```json```, ```ini```
 - Generation a report in the form of ```plain text```, ```stylish```, ```json```

### Usage example:
```bash
# plain format
gendiff --format plain path/to/file.yml another/path/file.json

Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed

# stylish format
gendiff filepath1.json filepath2.json

{
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: {
        key: value
    }
  + setting4: blah blah
  + setting5: {
        key5: value5
    }
}

```
## Install
###### system requirements:
Node 14.x version at least
```bash
#clone this repository on your machine
$git clone git@github.com:Rema04Dev/cli-gendiff.git

#go to directory where you downloaded it
$cd cli-gendiff

# run the one of these command to install all necessary dependencies
$make install
or
$npm ci

# this command is responsible for linking commands from package.json to "./bin" directory
$npm link

#run utility
$ gendiff <filepath1> <filepath2>
```
### Usage Demonstration
<a href="https://asciinema.org/a/fR1ZptVRn8ISi6ucnvSAhIszP" target="_blank"><img src="https://asciinema.org/a/fR1ZptVRn8ISi6ucnvSAhIszP.svg" width="300"/></a>

#### Different outcoming types
<a href="https://asciinema.org/a/Iv08mlLDbBzc32Y9410yE8SYp" target="_blank"><img src="https://asciinema.org/a/Iv08mlLDbBzc32Y9410yE8SYp.svg" width="300"/></a>