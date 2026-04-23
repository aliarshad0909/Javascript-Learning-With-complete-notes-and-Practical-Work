let a = {
    name: "Ali",
    age: 25
};
console.log(a); 

let p = {
    run: ()=>{
        console.log("Running");
    }
}; 
p.__proto__ = {
    name1: "Sara",
    age1: 30
}
a.__proto__ = p;
p.run();
 