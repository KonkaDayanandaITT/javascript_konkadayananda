// console.log("start")

// setTimeout(function cb(){
//     console.log("Callback")
// }, 5000);

// console.log("End");

// function a(){
//     console.log("a");

//     function inner(){
//         console.log("b")
//     }

//     setTimeout( function cb(){
//         console.log("c");
//     }, 4000)

//     console.log("d")
//     inner();
// }
// a();

console.log("start");

setTimeout(() => {
    console.log("Cb callback settimeout")
}, 5000);

fetch("https://api.netflix.com").then(
    function cbF(){
        console.log("Cb Netflix")
    }
);

console.log("End")