import React, { useState } from "react";
import Counter from "./Counter";

function App() {
  const [name, setName] = useState("Nanda");

  return (
    <div>
      <h1>React DevTools Demo</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Counter user={name} />
    </div>
  );
}

export default App;