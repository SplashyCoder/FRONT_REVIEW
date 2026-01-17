import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <button className='customButton' style={{ color:"blue", backgroundColor:"grey" }} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>  
    </>
  )
}

export default App
