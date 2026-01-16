let arr = [1,2,3,4,5];
let newarr = [...arr,6]
console.log(newarr)

let obj1 = {name : "Ram"};
let newobj1 = {...obj1, age:21};
console.log(newobj1)

let user = {dept : "QA"};
let newUser = {...user,id:1};
console.log(newUser)