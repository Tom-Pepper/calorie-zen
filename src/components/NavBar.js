import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="menu">
      <NavLink className="menu__item" activeClassName="menu__item_active" exact to="/">Home</NavLink>
      <NavLink className="menu__item" activeClassName="menu__item_active" to="/tips">Tips</NavLink>
    </nav>
  );
}

export default NavBar;