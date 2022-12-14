import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const handleToggle = () => {
    setDisplayMenu((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setDisplayMenu(false);
  };

  return (
    <header>
      <nav className="nav-bar">
        <NavLink to="/" className="logo">
          PJBLOG
        </NavLink>

        <div className="menu-display" onClick={handleToggle}>
          <div className={displayMenu ? "hamburger" : "hamburger"}></div>
        </div>

        <ul className={`${displayMenu ? "show" : "nav-item"}`}>
          <li>
            <NavLink to="/" className="nav-link" onClick={handleCloseMenu}>
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/create" className="nav-link" onClick={handleCloseMenu}>
              New Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
