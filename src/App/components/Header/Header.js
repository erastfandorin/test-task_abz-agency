import React from 'react';
import logo from '../../assets/img/Logo.svg';

function Header() {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        <img src={logo} alt="Logo TestTask" />
      </a>
      <nav>
        <ul className="header__menu">
          <li className="header__menu-item">
            <a href="#users" className="btn">
              Users
            </a>
          </li>
          <li className="header__menu-item">
            <a href="#sign-up" className="btn">
              Sign up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
