// import { useState } from "react";
// import Dashboard from "./Dashboard";
// function App(){
//   const [user] = useState("Ram")
//   return(
//     <Dashboard user={user}/>
//   );
// }


// import { useState } from "react";
// import Dashboard from "./Dashboard";

// // export default App;

// function App(){
//   const user= useState("Ram");

//   return(
//     <>
//       <Dashboard user={user} />
//     </>
//   );
// }

// export default App;
import { useState } from "react";
import { UserContext } from "./UserContext";
import Dashboard from "./Dashboard";

function App(){
  const[user] = useState("Ram");

  return(
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}

export default App;

