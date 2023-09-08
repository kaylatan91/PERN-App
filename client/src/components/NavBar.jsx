import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div id="nav-bar-container">
            <Link to="/">HOME</Link>
            <Link to="/recipes">RECIPES</Link>
            <Link to="/recipes/create">POST A RECIPE</Link>
        </div>
    )
}