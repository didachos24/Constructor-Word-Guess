function Letter(letter, log) {
    // Store underlying character for letter
    this.letter = letter;
    // Boolean for guessed letter
    this.log = false;

    this.letterGuessed = function() {
        for(var i = 0; i < this.word.length; i++) {
            if(word[i] == guess) {
                wordGuess = guess;
            } else{
                wordGuess = "_";
            };
        };
    };
    this.check = function(guess) {
        if(wordGuess == guess) {
            this.log = true;
        }
    };
}