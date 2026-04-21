let title = document.getElementById("main-title");
title.textContent = "Welcome to JavaScript Programming!";
title.style.color = "blue";
title.style.fontSize = "24px";
title.style.fontWeight = "bold";
let mybutton = document.getElementById("main-button");
mybutton.addEventListener("click", function() {
    alert("Button clicked!");
});
let changecolorbutton = document.getElementById("color-change");
changecolorbutton.addEventListener("click", function() {
    changecolorbutton.style.backgroundColor = "green";    
});

let body = document.body.classList.add("dark-mode");


let applycolorbutton = document.getElementById("apply-btn");
applycolorbutton.addEventListener("click", function() {
    let applycolor = document.getElementById("user-color").value;
    document.body.style.backgroundColor = applycolor;
});
