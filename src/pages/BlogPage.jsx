import { useContext, useEffect } from "react"
import NavComponent from "../components/NavComponent"
import PostCard from "../components/PostCard";
import { BlogContext } from "../contexts/blog.context";
import { UserContext } from "../contexts/user.context";

function BlogPage() {

  // Extrae los posts, el estado de error y la función getPosts del BlogContext
  const { posts, error, getPosts } = useContext(BlogContext);

  // Extrae las funciones login y logout del UserContext
  const { login, logout } = useContext(UserContext);

  // Llama a getPosts() cuando el componente se monta
  useEffect(() => {
    getPosts();
  }, []); // Dependencias vacías: solo se ejecuta una vez al montar el componente

  // Mapea los posts a una lista de PostCard con clave única (key)
  const postCards = posts.map((post) => {
    return (
      // elemento principal de un array ***necesita Key
      <li key={post.id}>
        <PostCard post={post} />
      </li>
    )
  })

  return (
    <>
      <NavComponent />
      <button onClick={() => login()}>Login</button>
      <button onClick={() => logout()}>Logout</button>
      <div>BlogPage</div>
      <section>
        {
          error ?
            (
              // control de ESTADO DE ERROR Muestra un mensaje de error si la API falla
              <h2>Error inesperado</h2>
            ) : (

              // control de ESTADO DE CARGA esperando a que postCards tenga longitud */ }
              !postCards.length ? (
                <h2>Loading...</h2>
              ) : (
                <ul>{postCards}</ul>
              )
            )
        }
      </section>
    </>
  )
}

export default BlogPage