var letter = require("./letter.js");

var wordDisplay = [];
var display = [];

function Word(arg) {

    this.arr = function() {
        var argument = arg.split('');

        for(var j = 0; j < argument.length; j++) {
            var a = new Letter(argument[i]);
            wordDisplay.push(a);
        };
    };

    this.str = function(wordDisplay) {
        for(var i = 0; i < wordDisplay.length; i++) {
            wordDisplay[i].letterGuessed();
            display[i].push(wordDisplay[i]);
        };
        console.log(display);
    };

    this.logic = function() {
        for(var j = 0; j < wordDisplay.length; j++) {
            wordDisplay[j].check();
        };
    };
};

// export {Word};