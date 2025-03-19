import { useContext } from "react"
import NavComponent from "../components/NavComponent"
import { UserContext } from "../contexts/user.context"

function HomePage() {

  const {user, serUser} = useContext(UserContext)
  return (
    <>
      <NavComponent/>
      <div>HomePage</div>
      <h3>Hola {user} </h3>

    </>
  )
}

export default HomePage