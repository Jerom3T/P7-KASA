import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Navigation = () => {
    return (
        <div className="navigation">
            <Logo />
            <ul>
                <NavLink to="/"className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <li>Accueil</li>
                </NavLink>
                <NavLink to="/about"className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <li>À Propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;