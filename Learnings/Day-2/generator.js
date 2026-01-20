function* count(){
    yield 1;
    yield 2;
    yield 3;
}

const gen = count();
console.log(gen.next());