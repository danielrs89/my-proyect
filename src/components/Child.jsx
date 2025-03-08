import { useEffect, useState } from "react"

function Child() {

  const [count, setCount] = useState(0)
  
  const addOne = () => {
    setCount(count + 1)
  }

  /**
   * CICLO DE VIDA
   * renderiza
   * monta
   * actualiza
   * destruye
   */

  // cada vez que se actualiza se renderiza "tambien cuando actualiza una variable renderiza"
  useEffect(() => {
    console.log("Child renderizado")
  })

  // solo se monta una vez
  useEffect(() => {
    console.log("Child montado")
  }, [])

  // si pasamos una variable se actualiza
  useEffect(() => {
    console.log("Child la variable se actualizado")
  }, [count])

  // se desmonta/destruye pasando un return () => {}
  useEffect(() => {
    return () => {
      console.log("Child destruido")
    }
  }, [])


  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      <h3>Este es el componente</h3>
      <h4>{count}</h4>
      <input onClick={addOne} type="button" value="+++" />
    </div>
  )
}

export default Child