
import './App.css'

function App() {

  const saySomeThing = () => {
    console.log("llamada desde la función");
  }

  return (
    <>
      {/* llamando a la función */}
      <button onClick={saySomeThing}>Click</button>
      {/* con función anónima */}
      <button onClick={() => {
        console.log("llamada desde anónimo")
      }}>Click</button>
    </>
  )
}

export default App
