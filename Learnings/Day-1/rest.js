const a = {
    x : 1,
    y : 2,
    z : 3
};

const{x,...others} = a;
console.log(x);
console.log(others);