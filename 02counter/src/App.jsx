import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


  function App(){

    let [counter,setCounter] = useState(5)

    // let counter = 5;

    const addvalue = () => {
      
      setCounter( prevcounter => prevcounter +1)
      setCounter(prevcounter  =>  prevcounter +1);
      setCounter( prevcounter => prevcounter +1);
      setCounter( prevcounter=> prevcounter +1);
       

    }

   const removevalue = () => {
    counter = counter - 1
    setCounter(counter)
    console.log("remove value",counter)

   
}

    return (
        <>
        <h1> react in counter</h1>
        <h2> counter value : {counter}</h2>
        <button   
         onClick={addvalue}>Add value {counter}</button>
        <br />
        <button
        onClick={removevalue}>Remove value {counter}</button>
        <br />
        <footer>footer: {counter}</footer>
        </>
    )
  }

export default App
