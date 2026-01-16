// function curriedAdd(a){
//     return function(b){
//         return a + b;
//     }
// }
// console.log(curriedAdd(2)(3));

function cadd(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}
console.log(cadd(2)(3)(4));