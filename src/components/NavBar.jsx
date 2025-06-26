import { Link } from "react-router-dom"
import SearchInput from "./SearchInput"
// This is a simple navigation bar component for a movie application
function NavBar () {

    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie plate</Link>
        </div>
        <SearchInput/>
        <div className="navbar-links">
            <Link to="/" className="nav-links">Home</Link>
            <Link to="/favorites" className="nav-links">Favorites</Link>
            <Link to="/popular" className="nav-links">Popular</Link>
            <Link to="/top_rated" className="nav-links">Top rated</Link>
        </div>
    </nav>
}

export default NavBar