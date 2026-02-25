import { useState } from "react";
import TodoButton from "./TodoButton";
import { useCallback } from "react";

function App(){
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const addTodo = () =>{
    setTodos((prev) => [...prev, "New Todo"])
  }

  // const addTodo = useCallback(() =>{
  //   setTodos((prev) => [...prev, "New Todo"]);
  // }, []);

  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <hr />
      <h3>Todos</h3>
      {
        todos.map((todo, index) => {
          <p key={index}>{todo}</p>
        })
      }
      <TodoButton addTodo={addTodo} />
    </div>
  );
}

export default App;