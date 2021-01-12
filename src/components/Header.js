import React from 'react';
import headerLogo from '../images/calorieZen.png';
import './Header.css';

function Header() {
  return (
  	<div className="header">
  	  <img className="header__logo" alt="Calorie-Zen Logo" src={headerLogo} />
      <h1 className="header__header">Calorie-Zen</h1>
    </div>  
  );
}
  
export default Header;