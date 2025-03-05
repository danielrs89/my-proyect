import { useState } from 'react';
import './App.css'

function App() {

  // crear variable reactiva con valor iniciarl, 
  // vinculada al valor value del input y para que se actualice cada vez que se modifica, 
  // se crea una funcion que atualice a set

  const [myValue, setMyValue] = useState("");

  const handleInput = (e) => {
    console.log(e) // event hay que buscar donde está el valor de input
    setMyValue(e.target.value)
  }

  return (
    <>
      <p>{myValue}</p>
      <input type="text" placeholder='Ej. Manolito' value={myValue} onChange={handleInput}/>
    </>
  )
}

export default App
