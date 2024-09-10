import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleSubtract = () => {
    setCount(count - 1)
  }

  return (
    <>
      <div>
        <h1>this is the header</h1>
        <p>the count is: {count}</p> 
        <button onClick={handleAdd}> + </button> <button onClick={handleSubtract}> - </button>
      </div>     
    </>
  )
}

export default App
