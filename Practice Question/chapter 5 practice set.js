//chapter 5 practice set Question 1 
let Numberarray = [];

for (let i = 1; i <= 10; i++) {
    let x = prompt("Enter a number:");
    x = parseInt(x);
    Numberarray.push(x);

}
console.log("The numbers you entered are: " + Numberarray.join(", "));

//chapter 5 practice set Question 2
let y = [];
let sum = 0;
for (let i = 1; i <= 5; i++) {
    let num = prompt("Enter a number:");
    num = parseInt(num);
    if (num === 0) {
        console.log("the Number you entered is zero ending the loop");
        break;
    }else {
        y.push(num);
        prompt("Enter a number again:");
        sum += num;
    }
}

//chapter 5 practice set Question 3
let z = [2,4,6,7,8,10];
let v = [];
let k = [];  
for (let i = 0; i < z.length; i++) {
    if (z[i] % 2 === 0) {
        console.log(z[i] + " is divisible by 2");
        v.push(z[i]);
    } else {
        k.push(z[i]);
        console.log(z[i] + " is not divisible by 2");  }
}

//chapter 5 practice set Question 4
let squaresarray = [];
for (let i = 1; i <= 10; i++) {
    let p = prompt("Enter a number:");
    p = parseInt(p);
    p = p * p;
    squaresarray.push(p);
}
console.log("The squares of the numbers you entered are: " + squaresarray.join(", "));

//chapter 5 practice set Question 5
function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calculateFactorial(n - 1);
    }
}
let number = prompt("Enter a number to calculate its factorial:");
number = parseInt(number);
let factorial = calculateFactorial(number);
console.log("The factorial of " + number + " is: " + factorial);