import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem("count")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  });

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const clear = () => {
    setCount(0);
  };

  return (
    <div>
      <h1 id="count">{count}</h1>

      <button onClick={increase}>Increase</button>
      <button onClick={decrease} disabled={count === 0}>
        Decrease
      </button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}

export default App;

