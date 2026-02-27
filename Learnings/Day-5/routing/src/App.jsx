import { BrowserRouter, Link, Routes, Route, Outlet, useParams } from "react-router-dom";


function Home() {
  return <h1>Home page</h1>;
}
function Products() {
  return (
    <div>
      <h2>Products Page</h2>
      <nav>
        <Link to="/products/cars">Cars</Link> | {" "}
        <Link to="/products/bikes">Bikes</Link>
      </nav>
      <Outlet />
    </div>
  );
}
function CarProducts(){
    return(
      <div>
        <h2>Cars</h2>
        <ul>
          <li>BMW</li>
          <li>Porche</li>
          <li>Maclarin</li>
        </ul>
      </div>
    );
}

function BikesProducts(){
    return(
      <div>
        <h2>Bikes</h2>
        <ul>
          <li>Honda</li>
          <li>RE</li>
          <li>Yamaha</li>
          <li>Duke</li>

        </ul>
      </div>
    );
}

function About() {
  return <h1>About Page</h1>;
}
function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link> |{" "}
        <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
            <Route path="cars" element={<CarProducts />} />
            <Route path="bikes" element={<BikesProducts />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


