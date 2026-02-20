// var x = 7;

// function getName(){
//     console.log("Hello js")
// }

// getName(); // Hello js
// console.log(x); // 7

// getHello();
// console.log(y)

// var y = 10;
// function getHello(){
//     console.log("Hello")
// }



// var x = 7;

// var getName = function(){
//     console.log("Hello js")
// }
// console.log(getName);
// getName();
// console.log(x);


// var a = 10;

// function test(){
//     var b = 20;
//     console.log(a);
// }

// test();
// console.log(b);

// function outer(){
//     var a = 10;
//     function inner(){
//         console.log(a); //outer reference
//     }
//     inner();
// }

// outer();
// the way where a searches for the reference is called scope chain
//it goes step step by step outwards until it finds variable

// function out(){
//     var count = 0;
//     return function inn(){
//         count++;
//         console.log(count);
//     }
// }

// const counter = out();
// counter();
// coutetr();