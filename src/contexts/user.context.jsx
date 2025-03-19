import { createContext, useState } from "react";
/**
 * contexto es un getor de estados, documento donde vamos a tener nuestras variables y vamos a poder utilizarlas en cualquier lugar
*/
const UserContext = createContext();

function UserProviderWrapper(props) {
    const [user, setUser] = useState("Danié");
    return(
        <UserContext.Provider value={{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    )
    
}

export {UserContext, UserProviderWrapper}