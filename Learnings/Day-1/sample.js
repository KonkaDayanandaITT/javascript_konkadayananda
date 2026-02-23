

function counter(){
    let count = 0;
    return function inner(){
        count++;
        console.log(count);
    }
}

const c = counter();
c();
c();

// const { Component } = require("react");

// console.log(a);

// var a = 10;

// function A(){
//     var a = 10;
//     function B(){
//         console.log(a);
//         let b = 5;
//         console.log(b);
//     }
//     B();
//     console.log(a);
//     console.log(b);
// }
// A();

// Memory Component
// code execution
