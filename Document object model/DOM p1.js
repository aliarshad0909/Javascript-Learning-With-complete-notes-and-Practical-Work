//Qestion 1
let newcolor = document.getElementsByTagName("nav")[0];
newcolor.style.backgroundColor = "lightblue";   
let navItems = document.getElementsByTagName("li");
navItems[0].style.color = "red";
navItems[1].style.color = "green";
navItems[2].style.color = "blue";
let header = document.getElementsByTagName("header")[0];
let a = document.getElementsByTagName("a");
header.style.fontSize = "24px";
header.style.fontWeight = "bold";
header.style.textAlign = "center";
a[0].style.color = "red";
a[1].style.color = "orange";
a[2].style.color = "teal";


 //Question 2 
 // if we dont add a tbody to our table it will 
 // automatically create one for us and 
 // place the tr elements inside it. so we can 
 // access the tr elements using document.getElementsByTagName("tr") 
 // and it will return a collection of all the tr elements in the table, including those 
 // that are automatically placed inside the tbody.


