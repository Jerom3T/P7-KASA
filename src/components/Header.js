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
            exact={Boolean("true")}
            to="/"
            activeClassName="nav-active"
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            exact={Boolean("true")}
            to="/about"
            activeClassName="nav-active"
          >
            À Propos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
