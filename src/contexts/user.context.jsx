import { createContext, useState } from "react";
/**
 * contexto es un getor de estados, documento donde vamos a tener nuestras variables y vamos a poder utilizarlas en cualquier lugar
*/
const UserContext = createContext();

function UserProviderWrapper(props) {
    const [user, setUser] = useState(null);
    const userData = {
        name: "Danié",
        email: "danie@gmail.com",
        isAdmin: true
      }

      const login = () =>{
        setUser(userData);
      }
      const logout = () =>{
        setUser(null);
      }


    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProviderWrapper }