
let x = randomNumber(1, 100);
let attempts = 0;
let guessedCorrectly = false;
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
while (!guessedCorrectly) {
    let guess = parseInt(prompt("Guess a number between 1 and 100:"));
    attempts++;
    if (guess === x) {
        guessedCorrectly = true;
        console.log("Congratulations! You guessed the number in " + attempts + " attempts.");
    } else if (guess < x) {
        console.log("Too low! Try again.");
    } else {
        console.log("Too high! Try again.");
    }
}