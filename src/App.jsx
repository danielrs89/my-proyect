import { useState } from 'react'
import './App.css'
import Child from './components/Child'


function App() {
  const [displayName, setDisplayname]= useState("")
  const login =(name)=>{
    setDisplayname(name)
  }
  return (
    <>
      <h1>PROPS | Comunicacioón entre componentes Hijo-Padre</h1>
      <h2>Este es componente padre</h2>
      <h3>Hola {displayName} </h3>
      <Child handleLogin={login}></Child>
    </>
  )
} export default App
