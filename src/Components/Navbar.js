import React from "react";
import { NavLink } from "react-router-dom";
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
          <li className="item">
            <NavLink to={"/"} exact>
              All Products
            </NavLink>
          </li>

          <li className="item dropdown">
            Categorias
            <i className="fa fa-caret-down"></i>
            <div className="dropdown-content">
              <NavLink to={"/electronics"}>electronics</NavLink>
              <NavLink to={"/jewelry"}>jewelry</NavLink>
              <NavLink to={"/menclothing"}>men's clothing</NavLink>
              <NavLink to={"/womenclothing"}>women's clothing</NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
