import { useContext } from "react"
import NavComponent from "../components/NavComponent"
import { UserContext } from "../contexts/user.context"

function HomePage() {

  const { user, login, logout } = useContext(UserContext);
  
  return (
    <>
      <NavComponent />
      <div>HomePage</div>
      <h3>Hola{user && (
        <span>
          {user.name}
          <br />
          {user.email}
        </span>
      )} </h3>

      <button onClick={() => login()}>Login</button>
      <button onClick={() => logout()}>Logout</button>
    </>
  )
}

export default HomePage