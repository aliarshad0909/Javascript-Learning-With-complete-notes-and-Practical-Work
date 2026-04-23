class railwayform {
    constructor(givenname , trainno){

        this.name = givenname
    this.trainno = trainno
        console.log("constructor called" + givenname +"" + trainno)

                  
    }
    submit() {
        alert("Your form has been submitted" + this.trainno);
    }   
    cancel() {
        alert("Your form has been cancelled"+ this.trainno);
    }

}


let aliform = new railwayform("ali , 1232")
let qasimform1 = new railwayform("Qasim , 1232")
let umairform2 = new railwayform("Qasim , 1232")
aliform.submit()
qasimform1.submit()
umairform2.submit()
qasimform1.cancel()
