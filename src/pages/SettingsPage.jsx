import { useContext } from "react"
import NavComponent from "../components/NavComponent"
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";

function SettingsPage() {

  // const [login, setLogin] = useState(false);

  // if (!login) {
  //   return <Navigate to={"/error"}/>
  // }

  const { user } = useContext(UserContext);

  // Si el usuario no es administrador (o no existe el usuario), redirige a la página de error.
  if (!user?.isAdmin) {
    return <Navigate to={"/error"} />
  }

  return (
    <>
      <NavComponent />
      <div>SettingsPage</div>
    </>
  )
}

export default SettingsPage