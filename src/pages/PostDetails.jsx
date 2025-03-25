import { useParams } from "react-router-dom";
import NavComponent from "../components/NavComponent"
import { useEffect, useState } from "react";

function PostDetails() {
    // extraer el parámetro 'id' de la URL, que es el identificador del post a mostrar.
    const { id } = useParams();
    const [post, setPosts] = useState([]);

    // Función asíncrona para obtener los datos del post desde la API.
    const fetchPost = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error("ERROR llamada a la API: ", error);
        }
    }

    useEffect(() => {
        fetchPost();
    }, []); // se ejecute solo una vez, cuando el componente se monte.

    return (
        <>
            <NavComponent />
            {/* Verifica si 'post' tiene datos antes de mostrar el contenido */}
            {post && (
                <section>
                    <div>PostDetails</div>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </section>
            )}
        </>
    );
}

export default PostDetails; 
