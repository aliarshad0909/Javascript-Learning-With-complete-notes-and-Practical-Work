 class animal {
    constructor(name ,color ){
        this.name = name 
        this.color = color
    }
    run(){
        console.log(this.name + "is running ")

    }
    shout(){
        console.log(this.name + "is shouting " )
    }
    
}
class monkey extends animal{
    eatbanana(){
        console.log(this.name + "is eating banana")

    }
}
class tiger extends monkey {
    slow(){
        console.log("animal is slowing down")

    }
    fast(){
        console.log("animal is slowing down")
    }
}
let ani = new animal("bruno", "white")
let m = new monkey("chimpu", "orange")
let s = new tiger('loin', "yellow")

ani.run()
m.eatbanana()
s.slow()
s.run()