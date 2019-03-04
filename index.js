var word = require("./word.js");

var input = process.argv[2];

var guess = "";

if(input.length < 2 && input.match(/^[a-zA-Z]+$/)) {
    var guess = input;
    console.log(guess);
    run();
} else{ 
    console.log("----Please choose just a letter----");
};

function run() {
    var capitals = ["bogota", "medellin", "cali", "barranquilla", "cartagena"];

    var myCity = capitals[Math.floor(Math.random()*capitals.length)];

    console.log(myCity);

    var wordToGuess = new Word(myCity);


};