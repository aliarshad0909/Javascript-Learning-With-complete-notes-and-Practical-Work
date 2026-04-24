function Infinity(){
var name = 'chrome'
function displayname(){
    console.log(name)

}
name = 'harry'
return  displayname 
}
let c = init();
c();

function returnfunc(){
    const x = () =>{
        let a = 1 
        console.log(a)
        const y = () =>{
            let a = 2 
            console.log (a)
            const c = () => {
                let a = 3 
                console.log(a)
            }
            z()
        }
        y()
    }
    x()
}
let a = returnfunc();
a()