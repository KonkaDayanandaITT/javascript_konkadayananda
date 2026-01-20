getUser(id,(user) =>{
    getOrders(user,(orders) =>{
        getDetails(orders,(details) =>{
            console.log(details)
        });
    });
});

//understanding purpose no output