import { createContext, useState } from "react";

// 1. Crear el contexto para gestionar el estado del usuario.
const UserContext = createContext();

// 2. Componente proveedor que gestionará el estado global del usuario.
function UserProviderWrapper(props) {
    // Estado para almacenar la información del usuario.
    const [user, setUser] = useState(null);

    // Datos simulados de un usuario (podrían venir de una API en un entorno real).
    const userData = {
        name: "Danié",
        email: "danie@gmail.com",
        isAdmin: true
    };

    // Función para simular el inicio de sesión, establece los datos del usuario.
    const login = () => {
        setUser(userData);
    };

    // Función para cerrar sesión, restablece el usuario a "null".
    const logout = () => {
        setUser(null);
    };

    // 3. Proveer el estado y las funciones a través del contexto.
    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {props.children}
        </UserContext.Provider>
    );
}

// 4. Exportar el contexto y el proveedor.
export { UserContext, UserProviderWrapper };