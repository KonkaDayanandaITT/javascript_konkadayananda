import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";
import "./App.css"
function App(){
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return(
    <div className="app">
      <div className="counter-card">
        <h1 className="title">Redux Counter</h1>
        <h2 className="count">{count}</h2>

        <div className="buttons">
        <button className="btn increment" onClick={()=> dispatch(increment())}>+</button>
        <button className="btn decrement" onClick={()=> dispatch(decrement())}>-</button>
        <button className="btn reset" onClick={()=> dispatch(reset())}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;