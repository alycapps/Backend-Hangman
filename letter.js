//temp parameters to test Letter object
var compChoice = "les mis";
var currentWord = "___ ___";

// Constructor object
var Letter = function(l) {
    this.guess = l;
    this.guessed = false;
    //a is the computers word choice
    this.display = function() {
        if (compChoice.includes(l)) {
            // if correct guess fill in blanks with guessed letters
            var rewriteword = "_"; 
            for (var w=0; w < compChoice.length; w++) {
                if (l == compChoice[w]) {
                    rewriteword += l;
                }
                else {
                    rewriteword += currentWord[w];
                }
            }
            console.log(rewriteword);
        }
    };
};

var e = new Letter("e");
console.log(e.display());
module.exports = Letter;