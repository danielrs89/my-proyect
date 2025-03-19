import { useContext } from "react"
import NavComponent from "../components/NavComponent"
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";

function SettingsPage() {

  // const [login, setLogin] = useState(false);
  const {user} = useContext(UserContext);



  // if (!login) {
  //   return <Navigate to={"/error"}/>
  // }
  if (!user?.isAdmin) {
    return <Navigate to={"/error"}/>
  }
  return (
    <>
      <NavComponent />
      <div>SettingsPage</div>
    </>
  )
}

export default SettingsPage