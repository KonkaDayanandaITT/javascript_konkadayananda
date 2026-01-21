console.log("A")

setTimeout(() =>{
    console.log("B")
},0)

const mypromise = Promise.resolve("static data")
mypromise
.then((Data) => {
    console.log("C",Data);
    return "next static data"
})
.then((Data) =>{ 
    console.log("D",Data);
})

console.log("E")