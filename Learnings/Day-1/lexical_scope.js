let x = 10;
    function outer(){
        let y = 20;

            function inner(){
                console.log(x);
                console.log(y);
            }
            inner();
    }
outer();