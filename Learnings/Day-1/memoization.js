
// function square(n){
//     console.log("calculating...");
//     return n * n
// }

// console.log(square(5))
// console.log(square(5))


function memoize(fn){
    const cache = {};
    
    return function(n) {
        if(cache[n] !== undefined){
            console.log("from cache");
            return cache[n];
        }

        console.log("calculating...");
        const result = fn(n);
        cache[n] = result;
        return result;
    };
    
}

function square(n){
    return n * n;
}

const memoizedSquare = memoize(square);

console.log(memoizedSquare(5));
console.log(memoizedSquare(5));

