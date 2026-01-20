function fetchData(callback){
    setTimeout(() => {
        callback("Data is Recieved");
    },1000);
}

fetchData((data) => {
    console.log(data);
});