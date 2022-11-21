import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="nav-bar">
        <NavLink to="/" className="logo">
          PJBLOG
        </NavLink>

        <ul className="nav-item">
          <li>
            <NavLink to="/" className="nav-link">
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/create" className="nav-link">
              New Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
