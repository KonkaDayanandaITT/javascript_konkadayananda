import './App.css'
import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';

function Home(){
  return <h1>Home Page</h1>;
}

function Products(){
  return(
    <div>
      <h1>Products Page</h1>
      <nav style ={{marginBottom:'20px'}}>
        <Link to="/products/car">Cars</Link> | {" "}
        <Link to="/products/bike">Bikes</Link> | {" "}
      </nav>
      <Outlet />
    </div>
  );
}

function CarProducts(){
  return(
    <div>
      <ul>
        <li>Audi</li>
        <li>BMW</li>
        <li>Volvo</li>
      </ul>
    </div>
  );
}

function BikeProducts(){
  return(
    <div>
      <ul>
        <li>Yamaha</li>
        <li>Suzuki</li>
        <li>Honda</li>
      </ul>
    </div>
  );
}

function Contact(){
  return <h1>Contact Page</h1>
}
function App() {
  return (
    <BrowserRouter>
      <nav>
          <Link to="/">Home</Link> | {" "}
          <Link to="/products">Products</Link> | {" "}
          <Link to="/Contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}>
          <Route path ="car" element={<CarProducts />} />
          <Route path = "bike" element={<BikeProducts/>}/>
        </Route>
        <Route path ="/Contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
