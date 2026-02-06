import { Counter } from '../Cust.jsx';
import './App.css'

function App(){
  const {count, increment, decrement} = Counter();

  return(
    <>
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>inc</button>
      <button onClick={decrement}>dec</button>
    </div>
    </>
  );
}

export default App
