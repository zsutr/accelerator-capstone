import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          ByteBeauty
        </NavLink>

        <div className={"nav__menu"} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link">
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/blush" className="nav__link">
                Blush
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/mascara" className="nav__link">
                Mascara
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/eyebrow" className="nav__link">
                Eyebrows
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/eyeshadow" className="nav__link">
                Eyeshadow
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/foundation" className="nav__link">
                Foundation
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/lipstick" className="nav__link">
                Lipstick
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/cart" className="nav__link nav__cta">
                Shopping Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
