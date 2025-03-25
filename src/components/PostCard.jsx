import React from "react";
import { Link } from "react-router-dom";

function PostCard(Props) {
    console.log("RENDER"); // Para verificar cada vez que el componente se renderiza.

    // Extrae el objeto 'post' de las props.
    const { post } = Props;

    return (
        <>
            <article>
                <h3>
                    {/* Enlace dinámico a la página del post según su ID */}
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                {/* Cuerpo del post */}
                <p>{post.body}</p>
            </article>
        </>
    );
}

// Memoización: evita re-renderizados innecesarios si las props no cambian.
export default React.memo(PostCard);
// export default PostCard