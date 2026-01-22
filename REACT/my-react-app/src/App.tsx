import './App.css'
import useFetch from './hooks/useFetch'

const url = 'https://google.com'

interface Data {
  name: string;
  lastName: string;
  age: number;
}

function App() {

  const {data, error, loading} = useFetch<Data>(url)


  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Hay un err {error.message}</div>
  }

  return(
    <div>{JSON.stringify(data)}</div>
  )

}

export default App
