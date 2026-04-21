// Practice Question 1: Age Checker
let x = prompt("Enter your age:");
x = parseInt(x);
if (x >= 18) {
    console.log("You are an adult.");
}else {
    console.log("You are a minor.");
}   

// Practice Question 2: Switch Statement for age
let age = prompt("Enter your age:");
age = parseInt(age);
switch (true) {
    case (age < 13):
        console.log("You are a child.");
        break;
    case (age >= 13 && age < 20):
        console.log("You are a teenager.");
        break;
    case (age >= 20 && age < 65):
        console.log("You are an adult.");
        break;
    case (age >= 65):
        console.log("You are a senior.");
        break;  
}

// Practice Question 3: To check if the Number is divisable by 2 & 3 
let num = prompt("Enter a number:");
num = parseInt(num);
if (num % 2 === 0 && num % 3 === 0) {
    console.log(`${num} is divisible by both 2 and 3. The answers are ${num/2} and ${num/3}.`);

} else if (num % 2 === 0) {
    console.log(`${num} is divisible by 2 and the answer is ${num/2}.`);
} else if (num % 3 === 0) {
    console.log(`${num} is divisible by 3 and the answer is ${num/3}.`);
} else {
    console.log(`${num} is not divisible by 2 or 3.`);
}


//practice question 4: To check if the age is eligable to drive or not 
let age1 = prompt("Enter your age:");
age1 = parseInt(age1);
if (age1 >= 18) {
    console.log("You are eligible to drive.");
} else {
    console.log("You are not eligible to drive.");
}
