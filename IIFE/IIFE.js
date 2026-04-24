let a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(456)

        }, 4000)
    })
}

//immideately invoked functions and is by wrapping the async fucntion() in these brackets 
(async () => {
    let b = await a()
    console.log(`b has been resolved and the value is ${b}`)
    let c = await a()
    console.log(`c has been resolved and the value is ${c}`)
    let d = await a()
    console.log(`d has been resolved and the value is ${d}`)

})()