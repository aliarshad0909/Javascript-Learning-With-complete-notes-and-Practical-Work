let y = prompt ("enter key to store value in local storage");
let s = prompt ("enter value you want to store in local storage");
setitem(y, s);
getItem(y);

localStorage.setItem(y, s);
let storedValue = localStorage.getItem(y);


console.log("Stored value: " + storedValue);