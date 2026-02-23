// let animal = {
//     eats:true
// };

// let dog = {
//     barks : true
// };

// dog.__proto__ = animal;

// console.log(dog.eats)


function Person(name){
    this.name = name;
}

Person.prototype.sayHi = function(){
    console.log("Hi " + this.name);
}


const p1 = new Person("ram");
const p2 = new Person("vishnu");
p1.sayHi()
p2.sayHi()

