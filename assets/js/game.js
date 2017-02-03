var numWins = 0;
var numLooses = 0;
var guessLeft = 10;
var guessUsed = [];
var myletter = ["D", "E", "L"];
var randltr = myletter [Math.floor(Math.random ()* myletter.length)];

window.onkeypress = function(event){
	var usersGuess = String.fromCharCode(event.keyCode).toUpperCase();
    guessUsed.push(usersGuess);
    console.log(randltr);
    if (usersGuess == randltr){
    	numWins ++;
    	alert("you won the correct letter was:" + randltr);
    	document.getElementById("numUserWins").innerHTML = "Win: " + numWins;
    	restart();

    	
	}else{

		if (guessLeft == 0) {
			alert("You lost");
			numLooses ++;
			document.getElementById("numUserLosses").innerHTML = "Loss : " + numLooses;
			restart();


		} else {
			alert("Opps try again");
			document.getElementById("usersGuess").innerHTML = "You guess: " + usersGuess;
			guessLeft --;
			document.getElementById("numGuessesRemaining").innerHTML = "Guesses left: " + guessLeft;
			document.getElementById("numGuessesUsed").innerHTML = "Guesses so far : " + guessUsed.join(" ");
		}
	}

} 
function restart(){
	document.getElementById("numGuessesUsed").innerHTML = "Guesses so far : " ;
	document.getElementById("usersGuess").innerHTML = "You guess: " ;
	document.getElementById("numGuessesRemaining").innerHTML = "Guesses left: 10 " ;
	randltr = myletter [Math.floor(Math.random ()* myletter.length)];
	guessUsed = [];
	guessLeft = 10;
}