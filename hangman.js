prompt = require("prompt-sync")();

console.log("Welcome to Hangman!");
console.log("Guess the music instrument.");
//Array que guarda las palabras para el juego.
var words = ["guitar", "piano", "maracas"];
//Escoge una palabra al azar del Array.
var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];

//Crea el loop
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

var remainingLetters = word.length;

while (remainingLetters > 0) {
  console.log(answerArray.join(" "));
  var guess = prompt("Guess a letter");
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    console.log("Please enter a single letter.");
  } else {
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
}

console.log(answerArray.join(" "));
console.log("Good job! The answer was " + word);
