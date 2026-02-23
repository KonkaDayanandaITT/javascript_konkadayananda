// when to use async/await

//use when you want cleaner sequential code 

//instead of 

fetch(url)
.then(res => res.json())
.then(data => console.log(data))
.then(err => console.log(err));

//you write

try{
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}
catch(err){
    console.log(err)
}

// Don not use await inside loops 

for (let i = 0; i < 5; i++){
    await fetch(url);
}
//this is slow

