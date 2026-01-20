import { add,sub} from "./math.js";
import greet from "./greet.js";
//import hello from "./greet.js"; rename freely
import * as math from "./math.js"

export const add = (a,b) => a + b;
export const sub = (a,b) => a - b;
console.log(add(2,3))
console.log(sub(4,2))

export default function greet(){
    console.log("Hello");
}
greet();