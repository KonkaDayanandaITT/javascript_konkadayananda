import { useState } from "react";

function useUser(){
    const[user, setUser] = useState("Ram")

    return{user, setUser}
}

export function userGreeting(user){
    return `Hello ${user}`;
}