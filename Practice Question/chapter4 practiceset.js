// Practice question for chapter 4 Q1:
let name = "Ali\"";
console.log(name.length);
//we will get the length of the string which is 4 because we have 4 characters in the
//  string including the escape character 
const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "fox";

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`,
);

// Practice question for chapter 4 Q2:exploring start and end of string
const str = "Saturday night plans";
console.log(str.startsWith("Sat"));
console.log(str.endsWith("plans"));
//true (expected output) because the string starts with "Sat" and ends with "plans"
// true(expected output) because the string ends with "plans")


//practice question for chapter 4 Q3: 
let a = "AHMED";
console.log(a.toLowerCase());
// we will get the output "ahmed" because the toLowerCase() method converts all characters in the string to lowercase.

//practice question for chapter 4 Q4;using slice() method to extract a portion of the string
let b = "give me Rs 1000 "
let amount = b.slice(7 , 15);
console.log(amount);
// we will get the output "Rs 1000" because the slice()
//  method extracts a section of the string from index 7 to index 14 
// (not including index 14) and returns it as a new string.

//practice question for chapter 4 Q5: replacing the string 
let name = "Ali";
name[2] = "m";
console.log(name);
// we will get the output "Ali" because strings in JavaScript are immutable, which means that individual characters cannot be changed directly. 
// When we try to assign a new value to name[2], it does not modify the original string but instead creates a new string with the attempted change, which is not reflected in the original variable. Therefore, the output remains "Ali".