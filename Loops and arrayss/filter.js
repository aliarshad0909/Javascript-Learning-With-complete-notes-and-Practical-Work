let scores = [30, 85, 45, 92, 60];
// We tell filter: "Only keep 's' if s is greater than or equal to 50"
let passingScores = scores.filter(s => s >= 50);
console.log(passingScores); // [85, 92, 60]


let prices = [5, 20, 50, 80, 120];
let budgetfriendlyitems = prices.filter( s => s <= 50);
console.log(budgetfriendlyitems);