/**Imagine you want to create a secure "Gatekeeper" script for your page:

Use prompt() to ask the user for a secret password.

Use an if statement to check if the password is "JavaScript123".

If it's correct, use alert() to say "Access Granted".

If it's wrong, use confirm() to ask "Wrong password. Would you like to try again?" */

let x = prompt("Enter the secret password:");
if (x === "JavaScript123") {
    alert("Access Granted");
}else {
    let tryAgain = confirm("Wrong password. Would you like to try again? (yes/no)");
    if (tryAgain) {
        // You can call the function again or implement a loop to allow multiple attempts
    } else {
        alert ("Access Denied. Please try again later.");
    }  } 

let y = prompt("Enter the secret password:");
while (y !== "JavaScript123") {
    let tryAgain = confirm("Wrong password. Would you like to try again? (yes/no)");
    if (tryAgain) {
        y = prompt("Enter the secret password:");
        alert("Access Granted");
        break;
    } else {
        alert ("Access Denied. Please try again later.");
        break;
    }  }

let movies = ["Inception", "The Matrix", "Interstellar"];
console.table(movies);

/**Imagine we want to see which is faster:
A standard for loop.
A while loop doing the exact same task.
If we want to measure the while loop, what should the label inside 
console.timeEnd() be to make sure it matches the timer we started for that loop? */

console.time("whileLoopTimer");
let i = 0;
while (i < 1000000) {
    i++;
}
console.timeEnd("whileLoopTimer");

console.time("forLoopTimer");
for (let j = 0; j < 1000000; j++) {
}
console.timeEnd("forLoopTimer");