import React from "react";
import { Link } from "react-router-dom";

function PostCard(Props) {
console.log("RENDER");

    const { post } = Props;
    return (
        <>
            <article>
                <h3>
                    <Link to={`/blog/${post.id}`} >{post.title}</Link>
                </h3>
                <p>{post.body}</p>
            </article>
        </>
    )
}
// memoizacición guarda la info que necesitamos y no volver a cargar
export default React.memo(PostCard)
// export default PostCard