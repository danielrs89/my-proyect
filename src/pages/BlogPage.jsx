import { useEffect, useState } from "react"
import NavComponent from "../components/NavComponent"
import PostCard from "../components/PostCard";

function BlogPage() {

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();
    // console.log(data)
    setPosts(data);
  }


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
      <div>BlogPage</div>
      <section>
        <ul>
          {postCards}
        </ul>
      </section>
    </>
  )
}

export default BlogPage