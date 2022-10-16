# OOP-TeamProfileGenerator (Using Node.js//Jest//Inquirer) :technologist: :student: :sparkles:

[![made-with-node.js](https://img.shields.io/badge/Made%20with-Node-1f425f.svg)](https://nodejs.org/en/)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-Javascript-1f425f.svg)](https://javascript.plainenglish.io)

# Description 

A node.js application that uses user input from inquirer to populate an HTML file for a companies team of engineers/interns :jigsaw:

For the video walkthrough explaining the functionality of the application go [here](https://drive.google.com/file/d/1oauOJ7ynpqJz8e9pbWeHTTxAV6IpVzQD/view) :clapper:

## User Story 
```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptence Criteria 
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Table of Contents
* Description
* User Story
* Acceptence Criteria
* Table of Contents
* Installation
* Usage
* Credits
* Contact

## Installation 

Fist off, make sure Node/NPM is installed :green_book:

```md
npm install
```

then the latest version of inquirer :card_file_box:

```md
npm inquirer@8.2.4
```

then making sure jest is installed to see the response of the test files :spiral_notepad:

```md
npm install --save-dev jest
```

## Usage 
:dna:
Run the following command at the root of the project then answer the prompted questions!!

```md
node index.js
```

![screenshot](../OOP-TeamProfileGenerator/Develop/dist/images/oopss.png)

## Credits 
No Credits for this assignment I breifly watched some walkthroughs but went about it my way. 

## Contact
[Email](mailto:jamesthomaspatmore7@gmail.com)
</br>
[Github](https://github.com/jamestpatmore)
