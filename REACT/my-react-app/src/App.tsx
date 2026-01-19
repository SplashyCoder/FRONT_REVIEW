import { useEffect, useState } from 'react'
import './App.css'
// import {Button} from '../components'

function App() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [err, setErr] = useState("")

  const fecthData = async () => {

    try {
      const response = await fetch('https:')

      if (!response.ok) {
        throw new Error('Error al obtener datos')
      }


      const jsonData = await response.json()
      setData(jsonData)

    } catch (error) {
      setErr(error as string)
      
    }
  }
  
  useEffect(()=>{
     fecthData()
  },[])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (err) {
    return <div>Hay un err {err}</div>
  }

  return(
    <div>{JSON.stringify(data)}</div>
  )

}

export default App
