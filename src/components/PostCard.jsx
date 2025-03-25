import { Link } from "react-router-dom";

function PostCard(Props) {
    const { post } = Props;
    return (
        <>
            <article>
                <h3>
                    {/* hace un link en el título que lleva al blog con el id seleccionado */}
                    <Link to={`/blog/${post.id}`} >{post.title}</Link>
                </h3>
                <p>{post.body}</p>
            </article>
        </>
    )
}

export default PostCard