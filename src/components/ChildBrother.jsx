
function ChildBrother(props) {
  return (
    <div style={{ border: "1px solid black", padding:"10px", borderRadius:"5px" }}>

            <h3>Este es componente hijo hermano</h3>
            <p>Nombre hijo hermano: {props.nameUser}</p>
        </div>
  )
}

export default ChildBrother