import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
  let object ={
    name :"haarsh",
    age : 20,
  }
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 > Tailwaid Props</h1>
    
    <Card username ="harsh" btnText = "check my profile" />
    <Card  username ="vinay" btnText = "check my profile"/>
    </>
  )
}
    

export default App;
