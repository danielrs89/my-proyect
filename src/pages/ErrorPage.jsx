import { Link } from "react-router-dom";

// Componente para manejar páginas de error o rutas no encontradas
function ErrorPage() {
    return (
        <>
            <h1>404 - Página no encontrada</h1>
            <Link to="/">Ir al inicio</Link>
        </>
    );
}

export default ErrorPage;
