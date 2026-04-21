// Practice Question for Chapter 1/Q1: User Input and Output
let x = prompt("Enter a number:");
console.log("You entered: " + x);

// Practice Question for Chapter 1/Q2: Data Types and Variables
let name = prompt("Enter your name:");
console.log(typeof name);
console.log("Hello, " + name + "! Welcome to JavaScript programming.");

// Practice Question for chapter 1/Q3: Constants
const pi = 3.14;
console.log("The value of pi is: " + pi);

//practice Question for chapter 1/Q4: 
//no we cant change const variable to any other value as that fixed !

// practice Question for chapter 1/Q5: Dictionaries
const dictionary = {
    apple: "a fruit",
    car: "a vehicle",
    book: "a collection of pages"
};

function getMeaning(word) {
    if (dictionary[word]) {
        console.log(dictionary[word]);
    } else {
        console.log("Word not found");
    }
}

getMeaning("apple"); 
getMeaning("car");   
getMeaning("pen");    
x = prompt("Enter a word from apple, car, or book to look up in the dictionary:");
getMeaning(x);