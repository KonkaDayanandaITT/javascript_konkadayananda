## Execution model
### Execution model is a like a box when you think of it it is created when javavscript runs the code
### There are three types :
 * Global execution context
 * Functional execution context
 * Eval execution context 

 ### why this means 
 ### it explains
  * hoisting
  * scope
  * why variables exists before execution

## Call stack
### call stack is a stack datastructure it follows principle (LIFO)
### what id does means
* tracks which function is running now and removes after function execution

```
function a(){
    b();
}
function b(){
    c();
}
function c(){
    console.log("Hello");
}
a();

```
### call stack flow
-> global()
-> a
-> b
-> c
->console.log()

### Then it pop backs in reverse order