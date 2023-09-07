import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div id="nav-bar-container">
            <h1>Nav Bar</h1>
            <Link to="/recipes">View Recipes</Link>
        </div>
    )
}