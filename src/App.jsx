import { useState } from 'react';
import './App.css'

function App() {

  const [user, setUser] = useState({
    nameUser: "",
    passUser: ""
  })

  // spring operator, el objeto tiene más propiedades pero yo solo aporto el que se necesita
  const handleNameUserInput = (e) => {
            // todas sus propiedaes mas la que le doy
    setUser({ ...user, nameUser: e.target.value })
  }
  const handlePassUserInput = (e) => {
            // todas sus propiedaes mas la que le doy
    setUser({ ...user, passUser: e.target.value })
  }

  // gestionar el formulario
  const handleSubmit = (e) => {
    // evita el comportamiento por defecto de los formularios
    e.preventDefault();
    console.log("Formulario enviado")
    console.log(user)
    
  }
  return (
    <>
      <h1>Formularios</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="username">Usuario: </label>
          <input
            type="text"
            id="username"
            // VINCULAR BIDIRECCIONAL MENTE es imp poner value para que no quede escrito si cerramos sesion
            value={user.nameUser}
            onChange={handleNameUserInput}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Contraseña: </label>
          <input
            type="password"
            id="password" 
            // es imp poner value para que no quede escrito si cerramos sesion
            value={user.passUser}
            onChange={handlePassUserInput}
          />
        </fieldset>
        <button>Enviar</button>
      </form>
      <button onClick={()=>setUser({nameUser:"", passUser:""})}>Salir</button>
    </>
  )
}

export default App
