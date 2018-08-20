var inquirer = require("inquirer");
var Word = require("./word");

//array of possible words and random computer choice from the list
var currentWord = ["miss saigon", "les mis", "cabaret", "a bronx tale", "anastasia", "the addams family", "dear evan hansen", "hamilton", "annie", "the king and i", "chicago", "beauty and the beast", "the book of mormon", "little shop of horrors", "the phantom of the opera", "cats", "once on this island", "sweeney todd", "hedwig and the angry inch", "matilda the musical", "newsies", "pippin", "the pirates of penzance", "avenue q", "school of rock", "something rotten"];
var compChoice = word[Math.floor(Math.random() * (word.length))];
console.log(compChoice);

function gamePlay() {
    inquirer.prompt([
        {
            type: "input",
            name: "guess",
            message: "Guess a letter"
        }
    ]).then(function(letter) {
        console.log("Yay, it works so far");
    })
};

gamePlay();