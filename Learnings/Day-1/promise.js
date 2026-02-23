// const p = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("Data is fullfilled")
//     }, 3000);
// });

// console.log("start");

// setTimeout(() => {
//     console.log("from timeout");
// }, 2000);

// Promise.resolve().then(()=>{
//     console.log("this is from promise");
// });


// console.log("end")

// async function getData(){
//     return "hello";
// }

// //internally it means 
// async function getData(){
//     return Promise.resolve("Hello")
// } 

async function test(){
    console.log("A")

    await Promise.resolve();
    console.log("B")
} 
test();
console.log("C")