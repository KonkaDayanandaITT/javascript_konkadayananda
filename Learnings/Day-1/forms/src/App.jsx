// function App(){
//     return(
//       <div>
//         <label>Enter your name:
//         <input type="text" placeholder="Your name..." />
//         </label>
//       </div>
//     );
// }

import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   return (
//     <div>
//       <label>
//         Enter your name:
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <p>Current text: {name}</p>
//     </div>
//   );
// }     //controlled component or controlled form
import { useRef } from "react";

function App(){
  const inputRef = useRef();

  function handleSubmit(){
    console.log(inputRef.current.value);
  }

  return(
    <>
    <input ref={inputRef} />
    <button onClick={handleSubmit}>click</button>
    </>
  );
}
export default App;
