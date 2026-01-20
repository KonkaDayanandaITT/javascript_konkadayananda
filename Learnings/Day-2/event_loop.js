console.log("A");
setTimeout(() => console.log("B"), 0);

Promise.reslove().then(() => console.log("C"));

console.log("D");