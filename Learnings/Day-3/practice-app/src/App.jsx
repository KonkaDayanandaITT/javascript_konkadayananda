import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [color, setColor] = useState("red");
 return(
  <>
  <h1>My favourite color is {color}</h1>
  <button type='button' onClick={() => setColor("blue")}>Blue</button>
  <button type='button' onClick={() => setColor("green")}>Green</button>
  <button type='button' onClick={() => setColor("purple")}>Purple</button>
  </>
 );
}

function MyCar(){
  const[brand, setBrand] = useState("Ford");
  const[model, setModel] = useState("mustang");
  const[year, setYear] = useState("1964");
  const[color, setColor] = useState("red");

  return(
    <>
    <h1>My {brand}</h1>
    <p>It is {color} {model} from {year}</p>
    </>
  );
}

function FriendCar(){
  const[car, setCar] = useState({
    brand : "ford",
    model : "mustang",
    color : "black",
    year : "1963"
  });
  return(
    <>
    <h2>My Friend has {car.brand}</h2>
    <p>it is {car.color} {car.model} from {car.year}</p>
    </>
  );
}

export default App
export {MyCar}
export {FriendCar}
