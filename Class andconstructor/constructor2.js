class railwayform {
    constructor(givenname , trainno , address){
        console.log("constructor called " )
        this.givenname = givenname
        this.trainno = trainno
        this.address = address
    
    }
    preview(){
        alert(this.givenname + "Kindly preview your form for " + "for train No this " + this.trainno + "kindly verify you adress" + this.address)
    }
    submit (){
        alert(this.name + "the form has been submitted " + this.trainno)

    }
    cancel(){
        alert(this.name + "the form has been cancelled" + this.trainno)
    }
}
let aliform = new railwayform("Ali " , 12221 , "h13/2 ,main gt road , Rawalpindi - 22121 ")
aliform.preview()
aliform.submit()