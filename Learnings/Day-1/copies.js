let user = {
    name : "Ram",
    address : {
        city : "Delhi"
    }
}

// let copy = {...user}; //shallow copy
let deepCopy = structuredClone(user);
deepCopy.name = "Vishnu";
deepCopy.address.city = "Mumbai";

console.log(user.name);
console.log(user.address.city);



