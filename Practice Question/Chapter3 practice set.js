// Practice Question 1: Looping through an object
let marks = {
    math: 85,
    science: 90,
    english: 78
};
for (let subject in marks) {
    console.log(`${subject}: ${marks[subject]}`);
}

// Practice Question 2: 
let marks2 = {
    math: 95,
    science: 92,
    english: 38
};
for (const key in marks2) {
    if (!Object.hasOwn(marks2, key)) continue;
    console.log(`${key}: ${marks2[key]}`);
}

// Practice Question 3:
let marks3 = 10;
let usermarks = prompt("Enter your marks:");
usermarks = parseInt(usermarks);
while (usermarks !== marks3){
    console.log("Wrong marks, try again!");
    usermarks = parseInt(prompt("Enter your marks:"));   
}
console.log("Congratulations! You entered the correct marks!");

// Practice Question 4: Find mean of 5 numbers
let sum = 0; 
for (let i = 1 ; i <=5 ; i++ ) {
    let num =prompt("Enter number " + i + ":");
    num = parseInt(num);
    sum += num;

}
let mean = sum / 5 
console.log("The mean of the 5 numbers is: " + mean);

