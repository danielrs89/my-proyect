import { useState } from "react"

function Child(props) {

    const [userName]= useState("Danié")
    const handleClick = ()=>{
        props.handleLogin(userName)
        console.log(userName)
    }
    return (
        <div style={{ border: "1px solid black", padding:"10px", borderRadius:"5px" }}>

            <h3>Este es componente hijo</h3>
            <p>Nombre de usuario: {userName}</p>
            <button onClick={handleClick}>Enviar</button>
        </div>
  
    )
} export default Child