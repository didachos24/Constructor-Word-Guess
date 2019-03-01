var word = require("./word");

var capitals = ["bogota", "medellin", "cali", "barranquilla", "cartagena"];

var myCity = calpitals[Math.floor(Math.random()*capitals.length)];

var wordToGuess = new Word(myCity);