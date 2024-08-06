import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter] =useState(15);

  // let counter =15;

  const addvalue = () => {
    console.log("value added", counter);
    counter = counter + 1;
  setcounter(counter);
 if (addvalue>15 && addvalue<1) {
  console.log("do not print");
 }
  }

  const removevalue =() => {
    setcounter(counter -1);
  }

  return (
    
    <>
      <h1>React with harsh</h1>
      <h1>Counter value {counter}</h1>

      <button onClick={addvalue}>Add value {counter}</button>
      
      <br />
      <button onClick={removevalue}
      >Remove value {counter}</button>
        
    </>
  )
}

export default App
