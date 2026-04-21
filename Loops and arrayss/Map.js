let prices = [10, 20, 30];

// The map method "maps" each number (n) to (n * 2)
let doubledPrices = prices.map(n => n * 2);

console.log(doubledPrices); // [20, 40, 60]

let names = ["ali", "sara", "ahmed"];

// We tell map: "Take each 'n', and return n.toUpperCase()"
let uppercaseNames = names.map(n => n.toUpperCase());

console.log(uppercaseNames); // ["ALI", "SARA", "AHMED"]

let scores = [30, 85, 45, 92, 60];

// We tell filter: "Only keep 's' if s is greater than or equal to 50"
let passingScores = scores.filter(s => s >= 50);

console.log(passingScores); // [85, 92, 60]

