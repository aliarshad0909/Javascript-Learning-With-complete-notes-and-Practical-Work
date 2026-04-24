 let arr = [ 3,5,6,7]
 let obj = {...arr}
 console.log(obj)

 function sum(x,y,z){
    return x + y + z 

 }
 console.log(sum(...arr))

let obj2 = {
    name: "Ali",
    company: "XYZ",
    address: "123"
};

console.log({ name: "qasim", obj2 });