/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter] = useState(15)
  
  //let counter = 15

  const addValue = () => {
    console.log("clicked", counter)
    // eslint-disable-next-line no-const-assign
    //counter = counter + 1;
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button
      onClick={removeValue}>Remove Value {counter}</button>
      <p> footer: {counter}</p>
    </>
  )
}

export default App
