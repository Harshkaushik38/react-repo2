import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter =15;

  const addvalue = () => {
    console.log("value added", counter);
    counter = counter + 1;

  }

  return (
    
    <>
      <h1>React with harsh</h1>
      <h1>Counter value {counter}</h1>

      <button onClick={addvalue}>Add value</button>
      
      <br />
      <button>Remove value</button>
        
    </>
  )
}

export default App
