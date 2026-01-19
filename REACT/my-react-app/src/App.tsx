import { useState } from 'react'
import './App.css'
import {Button} from '../components'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('David')
  
  const countMore = () => setCount((count) => count + 1)

  const changeName = () => setName('Cune')

  return (
    <>
        <Button label={`Count is ${count}`} parentMethod={countMore}/>  
        <Button label={`Name is ${name}`} parentMethod={changeName}/>  
    </>
  )
}

export default App
