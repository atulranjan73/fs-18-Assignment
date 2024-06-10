import { useState } from 'react'
import Grocery from './Grocery'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Grocery/>
    </>
  )
}

export default App