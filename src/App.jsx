import { useState } from 'react'
import './App.css'
import Child from './components/Child'
import ChildBrother from './components/ChildBrother'


function App() {



  // ***Lo IMPORTANTE esque la variable esta en el componente padre
  const [displayName, setDisplayname] = useState("")
  const login = (name) => {
    setDisplayname(name)
  }
  return (
    <>
      <h1>State Up | Comunicacioón entre hermanos</h1>
      <h2>Este es componente padre</h2>
      <h3>Hola {displayName} </h3>
      {/* // elevar el estado estamos gestionando una "variable/formulario/login
      // se envia al padre y el padre "riega a todos sus hijos */}
      <Child handleLogin={login} nameUser={displayName}></Child>
      <ChildBrother nameUser={displayName}></ChildBrother>
    </>
  )
} export default App
