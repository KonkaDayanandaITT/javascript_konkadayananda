// "use strict";
// function show() {
//   console.log(this);
// }

// show();

// const obj = {
//   show: function () {
//     console.log(this);
//   }
// };

// obj.show();
const account = {
    owner : "ram",
    balance :5000,

    deposit(amount){
        this.balance += amount; // using "this" inside object methods
        console.log(`New balance: ${this.balance}`);
    } 
};

account.deposit(1000);



function User(name, age){
    this.name = name;
    this.age = age;  // constructor functions
}
const u1 = new User("ram", 21)
const u2 = new User("bheem", 23)

console.log(u1.name);
console.log(u2.name);

// class Counter {
//   constructor() {
//     this.count = 0; // in classes
//   }

//   increment() {
//     this.count++;
//     console.log(this.count);
//   }
// }

// const c = new Counter();
// c.increment();
// c.increment();

class Counter{
    constructor(){
        this.count = 0;
    }
    increment(){
        this.count++;
        console.log(this.count);
    }
}

const c = new Counter();
c.increment();
c.increment(); 

// const Btn = document.getElementById("button")
// incBtn.addEventListener("click", ()=>{
//     console.log(this);
// });

function greet(){
    console.log("hello "+ this.name);
}

const person = {name : "ram"};
greet.call(person)

