
// Question number 1 & 2 
class complex {
    constructor (real , imaginary){
        this.real = real 
        this.imaginary = imaginary
    }

add (num){
    this.real = this.real + num.real
    this.imaginary = this.imaginary + num.imaginary
}
}
let a = new complex(2 , 4)
let b = new complex(6 , 2)
console.log(a.add(b))
console.log(`${a.real}+${a.imaginary}i`)

//Question number 3 
class human {
    constructor(name , Favfood){
        this.name = name 
        this.Favfood = Favfood
    }
    walk(){
        console.log(`${this.name}human is walking`)
    }
} 
class student extends human{
    walk(){
        console.log(`${this.name} Student is walking`)
    }

}
let o = new student("ali" , "chicken")
o.walk()

// Question number  4
console.log (o instanceof human)

// question number 5

class Complex {
    constructor(real, imaginary){
        this.reals = real;
        this.imaginarys = imaginary;
    }

    add(num){
        this.reals = this.reals + num.reals;
        this.imaginarys = this.imaginarys + num.imaginarys;
    }

    get reals(){
        return this._reals;
    }

    get imaginarys(){
        return this._imaginarys;
    }

    set reals(newreals){
        this._reals = newreals;
    }

    set imaginarys(newimaginary){
        this._imaginarys = newimaginary;
    }
}

let z = new Complex(2, 4);
z.reals = 10;
z.imaginarys = 12;

let y = new Complex(6, 2);

z.add(y);

console.log(`${z.reals} + ${z.imaginarys}i`);
