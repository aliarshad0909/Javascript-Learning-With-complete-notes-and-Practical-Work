/** 
The Supermarket Challenge 🛒
You have an array of prices: let prices = [5, 12, 8, 25, 7, 40];
We want to:
Filter: Keep only the items that cost more than 10.
Map: Apply a discount by subtracting 2 from each of those items.
Reduce: Find the total sum of those discounted items.
**/

let prices = [5, 12, 8, 25, 7, 40];
let budgetFriendlyItems = prices.filter(p => p >= 10);
let discountedPrices = budgetFriendlyItems.map(p => p - 2);
let totalCost = discountedPrices.reduce((acc, curr) => acc + curr, 0);
console.log("Budget-friendly items: " + budgetFriendlyItems); // Budget-friendly items: 12,25,40
console.log("Discounted prices: " + discountedPrices); // Discounted prices: 10,23,38
console.log("Total cost after discount: " + totalCost); // Total cost after discount: 71
