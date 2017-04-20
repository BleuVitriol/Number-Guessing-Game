var secretNumber = 14;

var stringGuess = prompt("Guess a Number");
var guess = Number(stringGuess);

if(guess === secretNumber) {
	alert("You're Correct!")
}

else if(guess > secretNumber) {
	alert("Too high, try again")
}

else {
	alert("Too low, try again")
}