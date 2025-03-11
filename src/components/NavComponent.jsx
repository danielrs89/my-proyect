import { Link } from "react-router-dom"
import "./NavComponent.css";

function NavComponent() {
    return (
        <>

            <header>
                <nav >
                    <Link to="/" >Home</Link>
                    <Link to="/blog">Blog</Link>
                </nav>
            </header>

        </>
    )
}



export default NavComponent