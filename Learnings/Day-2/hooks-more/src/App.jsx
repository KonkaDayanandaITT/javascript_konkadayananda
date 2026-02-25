import { useRef,useEffect, useState, useMemo } from "react";

// function App(){
//   const [inputValue, setInputValue] = useState("");

//   const count = useRef(0);

//   useEffect(() =>{
//     count.current = count.current + 1;
//   })

//   return(
//     <div>
//       <p>Type in the input field:</p>
//       <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
//       <p>{inputValue}</p>
//       <h1>Render Count: {count.current}</h1>   
//     </div>
//   );
// }

// function App(){
//   const inputElement = useRef();

//   const focusInput = () => {
//       inputElement.current.focus();
//   } 

//   return(
//     <div>
//           <input type="text" ref={inputElement} />
//           <button onClick={focusInput}>click me</button>
//     </div>
//   );
// }
// export default App;

function App(){
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  //const result =slowFunction(count);
  const result = useMemo(()=>{
    return slowFunction(count);
  },[count])

  return(
    <div>
     <h2>Todos</h2>
     {
      todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))
     }
     <button onClick={() => setTodos([...todos, "New Todo"])}>
      Add Todo</button>
      <hr />

      <h3>count:{" "+count }</h3>
      <button onClick={() => setCount(count + 1)}>increment</button>
      
    </div>
  );
}

function slowFunction(num){
  console.log("Running slow function...");
  for (let i = 0; i < 100000000; i++){}
    return num * 2;
}
export default App;