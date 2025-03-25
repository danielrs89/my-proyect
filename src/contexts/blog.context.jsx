import { createContext, useState } from "react";

// 1. Crea el contexto para compartir datos relacionados con el blog.
const BlogContext = createContext();

// 2. Define el componente proveedor que envolverá la aplicación.
function BlogProviderWrapper(props) {

    // Estado para almacenar las publicaciones (posts).
    const [posts, setPosts] = useState([]);

    // Estado para gestionar los errores durante la carga de los posts.
    const [error, setError] = useState(false);

    // 3. Función asincrónica para obtener los posts desde una API.
    const getPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data); // Almacena los posts en el estado.
            setError(false); // Reinicia el estado de error si la solicitud es exitosa.
        } catch (e) {
            setError(true); // Marca el error si la solicitud falla.
            console.error("ERROR Catch getPosts -> ", e);
        }
    };

    // 4. Proporciona el estado y las funciones a través del contexto.
    return (
        <BlogContext.Provider value={{ posts, error, getPosts }}>
            {props.children} {/* Renderiza los componentes hijos. */}
        </BlogContext.Provider>
    );
}

// 5. Exporta el contexto y el proveedor.
export { BlogContext, BlogProviderWrapper };