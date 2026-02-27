import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import Home from './Home';
import About from "./About";
// function Info(){
//   const {firstname, age} = useParams();
//   return <h1>{firstname} is {age} years old</h1>
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/customer/Ram/25">Ram</Link> | {" "}
//         <Link to="/customer/Vishnu/23">Vishnu</Link> | {""}
//         <Link to="/customer/Raj/22">Raj</Link>
//       </nav>
//       <Routes>
//         <Route path="/customer/:firstname/:age" element={<Info />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;



function App(){
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;