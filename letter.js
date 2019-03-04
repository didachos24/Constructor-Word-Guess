function Letter(letter, log) {
    // Store underlying character for letter
    this.letter = letter;
    // Boolean for guessed letter
    this.log = false;

    this.letterGuessed = function() {
        if(guess == this.letter) {
            letterDisplay = this.letter;
        } else{
            letterDisplay = "_";
        };
    };
    this.check = function() {
        if(guess == this.letter) {
            this.log = true;
        };
    };
};

// export {Letter};