import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">WallGallery</h2>

      

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "line line1 active" : "line line1"}></div>
        <div className={menuOpen ? "line line2 active" : "line line2"}></div>
        <div className={menuOpen ? "line line3 active" : "line line3"}></div>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>Home</li>
        <li>Gallery</li>
        <li onClick={() => {
          document.getElementById("about").scrollIntoView({ behavior: "smooth" });
          setMenuOpen(false);
        }}>
          About
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;