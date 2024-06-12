/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './output.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <script src="https://cdn.tailwindcss.com"></script>
      <h1 className="text-3xl font-bold underline text-clifford">
    Hello world!
  </h1>
    </>
  )
}

export default App
