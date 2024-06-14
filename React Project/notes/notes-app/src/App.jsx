import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='name'>Resistation form</h1>
     <div className="form">
     <label htmlFor="Name">Name</label>
      <input type="text" name="" placeholder="Enter your name" />
      <br />
      <label htmlFor="Email">Name</label>
      <input type="email" name="" placeholder="Enter your email" />
      <br />
      <label htmlFor="Name">Name</label>
      <input type="password" name="" placeholder="Enter your password" />
      <div className='btn'>
        <button>Submit</button>
      </div>
     </div>
    </>
  )
}

export default App
