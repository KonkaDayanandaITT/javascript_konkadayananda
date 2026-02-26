import {BrowserRouter, Link, NavLink, Outlet, Route, Routes} from 'react-router-dom';
import "./App.css";
function Home(){
  return <h1>Home Page</h1>
}
function Products(){
  return(
    <div>
      <h1>Products page</h1>
      <hr />
      <nav>
        <Link to="/products/car">Cars</Link> | {" "}
        <Link to="/products/bike">Bikes</Link>
      </nav>
      <Outlet/>
    </div>
  );
}
function CarProducts(){
  return(
    <div>
      <h2>Cars</h2>
      <ul>
        <li>Audi</li>
        <li>Benz</li>
        <li>RR</li>
      </ul>
    </div>
  );
}
function BikesProducts(){
  return(
    <div>
      <h2>Bikes</h2>
      <ul>
        <li>Yamaha</li>
        <li>Honda</li>
        <li>RE</li>
      </ul>
    </div>
  );
}

function Settings(){
  return <h1>Settings Page</h1>
}
function Contact(){
  return <h1>contact Page</h1>
}

function App(){
  return(
    <BrowserRouter>
        <nav>
          <NavLink to="/" className={({isActive}) => isActive? "active-link" : ""}>Home</NavLink> | {" "}
          <NavLink to="/products" className={({isActive}) => isActive? "active-link" : ""}>Products</NavLink> | {" "}
          <NavLink to="/settings" className={({isActive}) => isActive? "active-link" : ""}>Settings</NavLink> |{" "}
          <NavLink to="/contact" className={({isActive}) => isActive? "active-link" : ""}>Contact</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products />}>
            <Route path="car" element={<CarProducts />}/>
            <Route path="bike" element={<BikesProducts />}/>
          </Route>

          <Route path="/contact" element={<Contact />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>

    </BrowserRouter>
  );
}
export default App;
