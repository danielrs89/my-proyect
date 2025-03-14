import { useParams } from "react-router-dom";
import NavComponent from "../components/NavComponent"
import { useEffect, useState } from "react";

function PostDetails() {

    const { id } = useParams();
    const [post, setPosts] = useState([]);

    const fetchPost = async () => {
        const respose = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await respose.json();
        // console.log(data)
        setPosts(data);
    }

    useEffect(() => {
        fetchPost();
    }, [])
    return (

        <>
            <NavComponent />
            {/* si post tiene data lo muestras */}
            {post && ( 
                <section>
                    <div>PostDetails</div>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </section>
            )}

        </>
    )
}

export default PostDetails