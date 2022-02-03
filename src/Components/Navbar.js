import React from "react";

import "../scss/components/navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav" id="navbar">
      <div className="content">
        <div className="logo">
          {/* TODO: Add Logo (svg) */}
          <div>Light Grenades Merch site</div>
        </div>
        <ul>
          <li className="item">Inicio</li>

          <li className="item dropdown">
            Categorias
            <i className="fa fa-caret-down"></i>
            <div className="dropdown-content">
              <a href="#">electronicos</a>
              <a href="#">joyeria</a>
              <a href="#">ropa de hombre</a>
              <a href="#">ropa de mujer</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
