function sayhello(name) {
    console.log("Hello " + name);
}

sayhello("World");
function add(a, b) {
    return a + b;
}
function multiply(x, y) {
    return x * y;
}
let result = add(5, 10);
let product = multiply(4, 6);
console.log("The sum is: " + result + " and the product is: " + product);

function isEven(num) {
    return num % 2 === 0;
}
function isOdd(num) {
    return num % 2 !== 0;
}
console.log("Is 4 even? " + isEven(4));
console.log("Is 4 odd? " + isOdd(4));