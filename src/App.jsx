import './App.css'
import Child from './components/Child'


function App() {
  const text = "mensaje enviado desde padre a hijo"
  const person = {
    sex: "male",
    age: "36"
  }
  return (
    <>
      <h1>PROPS | Comunicacioón entre componentes Padre-Hijo</h1>
      <h2>Este es componente padre</h2>
      <Child msg={text} person={person}></Child>
    </>
  )
} export default App
