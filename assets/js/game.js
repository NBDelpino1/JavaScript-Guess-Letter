var numUserWins = 0;
var numUserLosses = 0;
var numGuessesRemaining = 10;
var guessedAlready = [];
var myletter = ["D", "E", "L", "P", "I", "N", "O"];
var randltr = myletter[Math.floor(Math.random() * myletter.length)];
window.onkeypress = function(event) {
    var usersGuess = String.fromCharCode(event.keyCode).toUpperCase();
    guessedAlready.push(usersGuess);
    console.log(randltr);
    if (usersGuess == randltr) {
        numUserWins++;
        alert("you won the correct letter was:" + randltr);
        document.getElementById("numUserWins").innerHTML = "Win: " + numUserWins;
        restart();
    } else {
        if (numGuessesRemaining == 0) {
            alert("You lost");
            numUserLosses++;
            document.getElementById("numUserLosses").innerHTML = "Loss : " + numUserLosses;
            restart();
        } else {
            alert("Opps try again");
            document.getElementById("currentGuess").innerHTML = "Current Guess : " + usersGuess;
            numGuessesRemaining--;
            document.getElementById("numGuessesRemaining").innerHTML = "Guesses Remaining : " + numGuessesRemaining;
            document.getElementById("guessedAlready").innerHTML = "Guessed Already : " + guessedAlready.join(" ");
        }
    }
}

function restart() {
    // document.getElementById("guessedAlready").innerHTML = "Guesses so far : ";
    // document.getElementById("currentGuess").innerHTML = "You guess: ";
    // document.getElementById("numGuessesRemaining").innerHTML = "Guesses left: 10 ";
    randltr = myletter[Math.floor(Math.random() * myletter.length)];
    guessedAlready = [];
    numGuessesRemaining = 10;
}