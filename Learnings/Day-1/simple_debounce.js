function sayHello(){
    console.log("Hello", Date.now() - start)
}

function debounce(fn, delay){
    let timer;

    return function(){
        console.log("Called at", Date.now() - start);
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn();
        }, delay);
    };
}
const start = Date.now()
const debouncehello = debounce(sayHello, 2000);

debouncehello();
debouncehello();