import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import './style.scss';

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
      <button className="hamburger-icon" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className="menu-content">
        <nav>
        <ul>
          <li>
            <Link to="/">Uvodní stránka</Link>
          </li>
          <li>
            <Link to="/akcevroce">Akce v průběhu roku</Link>
          </li>
          <li>
            <Link to="/onas">O nás</Link>
          </li>
          <li>
            <Link to="/letnitabory">Letní tábory</Link>
          </li>
        </ul>
      </nav>
      </div>
      <Outlet />
    </div>
  );
};