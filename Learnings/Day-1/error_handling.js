try{
    let x = JSON.parse("{bad error}");
}
catch{
    console.log("error occured");
}

try{
    console.log(a);
}
catch{
    console.log("caught")
}