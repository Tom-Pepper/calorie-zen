import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="menu">
      <NavLink exact className="menu__item" activeClassName="menu__item_active" to="/">Домой</NavLink>
      <NavLink className="menu__item" activeClassName="menu__item_active" to="/tips">Советы</NavLink>
    </nav>
  );
}

export default NavBar;