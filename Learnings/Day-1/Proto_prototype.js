function Person(name){
    this.name = name;
}
Person.prototype.sayHi = function(){
    console.log("Hi")
};

const p1 = new Person("Ram");
p1.sayHi();