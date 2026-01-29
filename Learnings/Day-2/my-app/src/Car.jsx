import { Stu_App } from "./Student";
function Car({brand}){
    return(
        <>
        <h2>Hey, i am {brand}</h2>
        <Stu_App 
                 name = "nanda"
                 age = "22"
                 cource = "react"
                 />
    
                 <Stu_App 
                 name = "Ram"
                 age = "21"
                 cource = "python"
                 />
    </>
        );
}

export default Car;