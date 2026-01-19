var x = 10; //global execution context is created

function foo(){
    var y = 20;
    console.log(x,y);
}
foo();