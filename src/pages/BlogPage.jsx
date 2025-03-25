import { useEffect, useState } from "react"
import NavComponent from "../components/NavComponent"
import PostCard from "../components/PostCard";

function BlogPage() {

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  const getPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json();
      // console.log(data)
      setPosts(data);
      setError(false);
    } catch (e) {
      setError(true);
      console.error("ERROR Cath getPost -> ", e)
    }
  }

  useEffect(() => {
    getPosts();
  }, []) // se ejecuta nada más se monta el componente

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
      <div>BlogPage</div>
      <section>
        {
          error ?
            (
              // {/* control de ESTADO DE ERROR si la llamada apa api sale mal esta gestionado por el cach*/ }
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

