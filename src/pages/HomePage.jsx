import { useContext } from "react"
import NavComponent from "../components/NavComponent"
import { UserContext } from "../contexts/user.context"

function HomePage() {

  const { user, serUser } = useContext(UserContext) // nombre de la variable dado en ./context/user.context.jsx
  
  return (
    <>
      <NavComponent />
      <div>HomePage</div>
      <h3>Hola {user} </h3>
    </>
  )
}

export default HomePage