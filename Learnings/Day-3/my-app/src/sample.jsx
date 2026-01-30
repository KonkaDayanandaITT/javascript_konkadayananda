import { useState } from "react";

 function sample() {
    const [count, setCount] = useState(0)

    const handleClick = async() => {
      await setTimeout(()=>setCount(count+1),2000);
    };

    return(
      <button  onClick={()=>{handleClick()}}>
        count: {count}
      </button>
    );
 
}
export default sample;