var Letter = function(letter) {
    this.letter = letter;
    this.guessed = false;
    this.underscores = function(a) {
        var characters = "";
        for (var i=0; i<a.length; i++) {
            //add if statement for spaces
            if (a[i] === " "){
                characters += " ";
            }
            //add else statement for spaces
            else {
                characters += "-";
            }
        }
        return characters;
    };
};