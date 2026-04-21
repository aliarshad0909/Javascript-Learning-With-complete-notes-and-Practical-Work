let prices = [5, 20, 50, 80, 120];

let displayPrices = prices
    .filter(p => p < 50)     // First, we get [5, 20]
    .map(p => `$${p}`);      // Then, we change them to ["$5", "$20"]

console.log(displayPrices); // ["$5", "$20"]

let numbers = [10,20, 30];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("The sum of the numbers is: " + sum); // The sum of the numbers is: 60