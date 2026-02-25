import { useEffect, useState } from "react";
import Parent from "./Parent";

export default function App(){

  const [count, setCount] = useState(Number(localStorage.getItem("count")) || 0);

  useEffect(() => {
    localStorage.setItem("count", count);
  });

  function Greet(props){
    return <h1>Hello,{props.name}</h1>
  }

  function Hello(props){
    return <p>Hello, I am living in {props.city}</p>
  }
  return(
    <div>
      <h1>
        {count}
      </h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={()=> setCount(count - 1)}
        disabled= {count === 0}
        >-</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <Greet name = "ram"/>
        <Hello city = "Mumbai"/>
        <div>
        <Parent />
        </div>
    </div>
  );
}