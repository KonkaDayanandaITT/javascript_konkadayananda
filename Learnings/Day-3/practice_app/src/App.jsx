import './App.css'

function App() {
const bikes = ['Hero','Pulsar','Duke']
const fruits = ['apple','banana','pineapple','strawberry']
  return (
    <>
    <h1>My Bikes</h1>
    <ul>
      {bikes.map ((bike) => <li>This bike is {bike}</li>)}
    </ul>
    <h2>Fruits</h2>
    <ul>
      {fruits.map ((fruit) => <li>This fruit is {fruit}</li>)}
    </ul>
    <form>
      <label>
        <input type = "text"/>
      </label>
    </form>
    {/* <button onClick={enter}>Enter</button> */}
    </>
    
  )
}

export default App
