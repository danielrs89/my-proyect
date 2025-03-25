import { useContext } from "react"
import NavComponent from "../components/NavComponent"
import { UserContext } from "../contexts/user.context"

function HomePage() {

  const { user, login, logout } = useContext(UserContext);

  return (
    <>
      <NavComponent />
      <div>HomePage</div>
      {user ? (
        <h3>
          Hola, <span>{user.name} 👋</span>
          <br />
          {user.email}
        </h3>
      ) : (
        <h3>No has iniciado sesión</h3>
      )}

      <button onClick={() => login()}>Login</button>
      <button onClick={() => logout()}>Logout</button>
    </>
  )
}

export default HomePage