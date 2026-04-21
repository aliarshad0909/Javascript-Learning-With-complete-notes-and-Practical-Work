/**The Challenge
In the code above, the buttons
 appear on the page, but they don't do anything yet!
 
If you wanted each button to change the
 background color to its own name when 
 clicked, where would you add the .addEventListener? 
 Would it go
 inside the forEach loop or outside of it? ✍️ */

let favoriteColors = ["Red", "Green", "Blue"];

favoriteColors.forEach(color => {
    // 1. Create a new button element
    let btn = document.createElement("button");
    
    // 2. Set the text to the color name
    btn.innerText = color;
    btn.addEventListener("click", function() {
        btn.style.backgroundColor = color.toLowerCase();
        return alert(`You clicked the ${color} button!`);
    });
    
    // 3. Add it to the webpage
    document.body.appendChild(btn);
});
x = prompt("Enter your age:");

let users = [
    { name: "Ali", age: 25 },
    { name: "Sara", age: 30 },
    { name: "Ahmed", age: 20 }
];

users.forEach(user => {
    let userInfo = document.createElement("div");
    userInfo.innerText = `Name: ${user.name}, Age: ${user.age}`;
    userInfo.classList.add("user-info");
    if (user.age > x) {
        userInfo.style.color = "green";
        userInfo.style.fontWeight = "bold";
    }
    document.body.appendChild(userInfo);
});


