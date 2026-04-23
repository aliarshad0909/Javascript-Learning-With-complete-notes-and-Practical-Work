let x = document.getElementById("parent");
x.parentElement.style.backgroundColor = "lightblue";

// //**Imagine you are building a clock for your Todo list app 
//(like in Video #51). You want the console to show the current time every single second.
//If you used setTimeout instead of setInterval for a clock, 
//what would happen after the first second passed? **/

let x = setInterval(function() {
    let currentTime = new Date();
    console.log(currentTime.toLocaleTimeString());
}   , 1000);
console.log("Clock started!");

let y = setTimeout(function() {
    console.log("This will only run once after 2 seconds.");
}, 2000);
console.log("Timeout set!");