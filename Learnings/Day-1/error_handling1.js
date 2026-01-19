function withdraw(amount){
    if(amount <= 0){
        throw new Error("Amount must be positive");
    }
}

withdraw(0);