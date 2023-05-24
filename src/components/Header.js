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
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            À Propos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
