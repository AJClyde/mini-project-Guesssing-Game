  
 let min = 1;
 let max = 100;
 let secretNumber;
 let attempts;
 
 startGame();
 
 function startGame() {
 secretNumber = 
 Math.floor(Math.random() * (max - min + 1)) + min;
 attempts = 0;

document.getElementById("attempts").textContent = attempts;

document.getElementById("message").textContent = "";

document.getElementById("range").textContent = `${min} - ${max}`;

document.getElementById("guess").value = "";

Console.log("Secret number:", secretNumber);
}

function checkGuess() {
 let guessInput = document.getElementById("guess");
 let guess = Number(guessInput.value);
 let message = document.getElementById("message");
 
/* if (!guess) {
  message.textContent = "Enter a number!";
 return;
 } */
 
 if (guess < min || guess > max ) {
  message.textContent = "Out of range!";
  return;
 }
 
 attempts++;
 
 document.getElementById("attempts").textContent = attempts;
 
 let difference = Math.abs(secretNumber - guess);
 
if (guess === secretNumber) {
 message.textContent = `Correct! You got it in ${attempts} tries!`;
} else if (difference <= 5) {
 message.textContent = "Very hot!";
} else if (difference <= 10) {
 message.textContent = "Warm!";
} else {
 message.textContent = "Cold!";
}

guessInput.value = "";
}

function restartGame() {
 startGame();
}


 /* function checkNum() {
  let userGuess =
  Number(document.getElementById("Num").value);
 let message = 
 document.getElementById("message");
 
if (userGuess < min || userGuess > max) {
 message.textContent = "Out of range!";
} else if (userGuess < secretNumber) {
 message.textContent = "Too low!";
} else if (userGuess > secretNumber) {
 message.textContent = "Too high!";
} else {
 message.textContent = "Correct! You guessed it!"; 
  }
}
*/