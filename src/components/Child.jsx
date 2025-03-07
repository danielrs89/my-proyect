
function Child(props) {

    const handleClick = ()=>{
        props.handleLogin("Daniè")
    }
    return (
        <div style={{ border: "1px solid black", padding:"10px", borderRadius:"5px" }}>

            <h3>Este es componente hijo</h3>
            <p>Nombre de usuario: {props.nameUser}</p>
            <button onClick={handleClick}>Enviar</button>
        </div>
  
    )
} export default Child