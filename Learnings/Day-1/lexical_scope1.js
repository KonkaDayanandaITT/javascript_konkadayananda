let a = 10;

    function test(){
        let b = 20;

        function check(){
            let c = 30;

            console.log(a,b,c);
        }
        return check;
    }

let func=test();

func();

// function number1(){
//     let a=10;
// }

// function number2(){
//     let b=20;
// }

// console.log(a);
// console.log(b);