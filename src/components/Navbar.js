import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="nav-bar">
            <Link to="/" className="logo">PJBLOG</Link>

            <div className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/create" className="nav-link">New Blog</Link>
            </div>
        </div>
    )
}

export default Navbar