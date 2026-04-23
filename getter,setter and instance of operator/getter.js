class Animal {
    constructor(name){
        this._name = name;
    }

    fly(){
        alert("we are flying");
    }

    get name(){
        return this._name;
    }

    set name(newname){
        this._name = newname;
    }
}

let a = new Animal("jack");

console.log(a.name); 

a.name = "qasim";   

console.log(a.name); 
console.log (a instanceof Animal)