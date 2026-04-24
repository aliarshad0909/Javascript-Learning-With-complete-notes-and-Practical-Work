///part 1 
const sayhello = (name) => console.log("hello" + name); console.log("hi")
sayhello(Ali);

///part 2 
const sayhello1 = (name , greeting ) => console.log(greeting + "" + name )
sayhello2("ali" , "good afternoon")

// part 3
const x = {
    name :"harry",
    role :"js Devolper",
    exp : 30,
    show :function(){
      
       setTimeout(() => {
                console.log(`the name is ${this.name}\n The role is ${this.role}`)
        
       }, 1000);
    }
}
x.show()

const sayhello = name => {console.log("hello" + name); console.log("hi")}
sayhello(Ali);