import React from 'react';
import logo from '../../assets/img/Logo.svg';

function Header() {
  return (
    <header className="header">
      <a href="/">
        <img src={logo} alt="Logo TestTask" />
      </a>
      <nav>
        <ul className="header__menu">
          <li className="header__menu-item">
            <a href="/" className="btn">
              Users
            </a>
          </li>
          <li className="header__menu-item">
            <a href="/" className="btn">
              Sign up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
