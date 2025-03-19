import { useContext, useEffect } from "react"
import NavComponent from "../components/NavComponent"
import PostCard from "../components/PostCard";
import { BlogContext } from "../contexts/blog.context";
import { UserContext } from "../contexts/user.context";

function BlogPage() {

  const {posts, error, getPosts} = useContext(BlogContext)
  const {  login, logout } = useContext(UserContext);



  useEffect(() => {
    getPosts();
  }, []) //se ejecuta nada mas se monta el componente

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
              // {/* control de ESTADO DE ERROR si la llamada apa api sale mal esta gestyionado por el cach*/ }
              <h2>Error inesperado</h2>
            ) : (

              // {/* control de ESTADO DE CARGA esperando a que postCards tenga longitud */ }
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