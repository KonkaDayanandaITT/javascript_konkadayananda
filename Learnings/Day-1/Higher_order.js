function caluculate(a,b,operation){
    return operation(a,b);
}
function multiply(a,b){
    return a * b;
}
console.log(caluculate(2,3,multiply));
