import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
// import {Button} from '../components'

const url = 'https://google.com'

function App() {

  const {data, error, loading} = useFetch(url)


  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Hay un err {error}</div>
  }

  return(
    <div>{JSON.stringify(data)}</div>
  )

}

export default App
