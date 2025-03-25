import { useState } from "react"
import NavComponent from "../components/NavComponent"
import { Navigate } from "react-router-dom";

function SettingsPage() {

  const [login, setLogin] = useState(false);

  if (!login) {
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