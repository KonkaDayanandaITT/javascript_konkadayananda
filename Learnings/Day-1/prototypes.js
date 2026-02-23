let arr = ["HI", "Hello"];

let obj = {
    name : "Ram",
    city : "delhi",
    getIntro : function(){
        console.log(this.name + " from " + this.city);
    }
}

let object2 = {
    name : "vishnu",
}

object2.__proto__= obj;

// Function.prototype.mybind = function(){
//     console.log("yayy");
// }

// function fun(){
//     //
// }