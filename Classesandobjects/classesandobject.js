class Railway {
  submit() {
    console.log(this.name + " Ticket booked successfully!");

  }
  cancel() {
    console.log(this.name + " Ticket cancelled successfully!");
  }
  fill(name) {
    this.name = name;
    
  }
}
// create a form for ALi

  let ali = new Railway();
// fill the form for Ali
  ali.fill("Ali");
// create a form for Sara
  let sara = new Railway();
//fill the form for Sara
  sara.fill("Sara");
// submit the form for Ali and Sara
  ali.submit();
// cancel the form for Ali 
  ali.cancel();   
  sara.submit();

   
