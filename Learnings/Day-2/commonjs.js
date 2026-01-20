function add(a,b){
    return a + b;
}
module.exports = add;
    //or
// module.exports = {
//     add,
//     sub
// };

//importing in commonjs

const add = required("./math");