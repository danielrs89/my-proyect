import { useState } from 'react'
import './App.css'
import Child from './components/Child'

/**
 * CICLO DE VIDA
 * renderiza
 * monta
 * actualiza
 * destruye
 */

function App() {

  const [showChild, setshowChild] = useState(true)
  

  
  return (
    <>  
      <h1>useEffect( ) | Cliclo de vida de los componentes</h1>
      <button onClick={() => setshowChild(!showChild)}>Toggle Child</button>
          {showChild && <Child />}

      
    </>
  )
}

export default App
