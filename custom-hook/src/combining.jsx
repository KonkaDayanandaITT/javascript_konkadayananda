import {useUser} from "hook1.jsx";
import { userGreeting } from "./hook1";

function Passing(){
    const user = useUser();

    const greeting = userGreeting(user);

    return(
        <h1>{greeting}</h1>
    );

}

