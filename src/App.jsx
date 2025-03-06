import './App.css'

function App() {

  const condition = false

  return (
    <>
      <h3>Renderizado condicional</h3>

      {/* -Con el funcionamiento del "Y lógico" [&&] */}
      {condition && <p>La condición se cumple</p>}
      {!condition && <p>La condición NO se cumple</p>}

      {/* -Con ternarios [? () : ()] */}
      {!condition ? (
        <p>La condición se cumple</p>
      ) : (
        <p>La condición NO se cumple</p>
      )
      }
    </>
  )
}

export default App
