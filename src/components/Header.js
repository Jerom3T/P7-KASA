import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <ul>
        <li>
          <NavLink
            to="/"
            className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
          >
            À Propos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
