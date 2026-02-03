import './App.css'
import { Button } from './components/index'


function App() {
  const handelClick = () => console.log('hoa')

  return(

    <Button label='hola' parentMethod={handelClick}/>

  )
  

}

export default App
