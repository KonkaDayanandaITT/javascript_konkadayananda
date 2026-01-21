function memo(fn){
    const cache = {};
    return function(n){
        if(cache[n])
        return cache[n];

    cache[n] = fn[n];
    return cache[n]
    
    };
}

const slowsquare = n => n * n;
const fastsquare = memo(slowsquare)

console.log(slowsqaure(4))