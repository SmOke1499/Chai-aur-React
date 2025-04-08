import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  // let counter = 5;

  const addValue = () => {
    setCounter(counter + 1);
    
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }
    else{
      alert("cant remove value from 0")
    }
  }
  
  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value : {counter}</h2>

      <button
      onClick={addValue}>Add Value</button>
      <br />
      <button
      onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
