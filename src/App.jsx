import { useState } from 'react';
import './App.css'

function App() {

  // desde use stage se hace reactiva
  const [number, setNumber] = useState(0);

  const addOne = ()=>{
   setNumber(number+1);
  }

  return (
    <>
      <p>Número: {number} </p>
      <button onClick={addOne}>Añadir</button>
    </>
  )
}

export default App
