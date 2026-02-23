function sayHello(){
    console.log("Hello..", Date.now() - start)
}

function throttle(fn, delay){
    let lastcall = 0;
    
    return function(){
        const now = Date.now();

        if(now - lastcall >= delay){
            lastcall = now;
            fn();
        }
    };
}

const start = Date.now()
const throttledHello = throttle(sayHello, 2000);
throttledHello();
throttledHello();
throttledHello();
