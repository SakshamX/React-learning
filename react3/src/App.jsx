import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    // console.log("value added", Math.random()) 
    // counter = counter + 1
    setCounter(counter + 1) 
    // console.log("clicked", counter);
  }

  const removeValue = () => {
    console.log("clicked", counter);
    setCounter(counter - 1) 
  }

  return (
    <>
    <h1>Chai or react </h1>
    <h2>Counter value : {counter}</h2>

    <button
    onClick={addValue}>Add value</button>
    <br />
    <button
    onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
