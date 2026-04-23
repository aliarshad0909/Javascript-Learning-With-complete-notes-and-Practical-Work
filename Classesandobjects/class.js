class Railway {
    Submit() {
        console.log(this.name + " Ticket booked successfully!");
    }
    Cancel() {
        console.log(this.name + " Ticket cancelled successfully!");
    }
    Fill(name , age , trainnumber) {
        this.name = name;
        this.age = age;
        this.trainnumber = trainnumber;
    }
}
let x = prompt("do you want to cancel or book a ticket? (type 'cancel' or 'book')");
if (x === "book") {
    let a = prompt("Enter your name");
let a = prompt("Enter your name");
let b = prompt("Enter your age");
let c = confirm("Do you want to book a ticket?");
let d = prompt("Enter your train number");
let railway = new Railway();
railway.Fill(a, b, d);
if (c === true) {
    railway.Submit("your ticket has been booked successfully!" + "Name: " + a + ", Age: " + b + ", Train Number: " + d);
    console.log("Booking has been processed for " + a);
}
else {
    railway.Cancel("your ticket has been cancelled successfully!" + "Name: " + a + ", Age: " + b + ", Train Number: " + d);
    console.log("Booking has been cancelled for " + a);
}
alert("booking has been processed for " + a);