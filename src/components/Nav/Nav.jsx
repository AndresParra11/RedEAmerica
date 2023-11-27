//import React from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a className="logo">RedEAmérica</a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link active-link">
                Inicio
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/teachers" className="nav__link">
                Nosotros
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/contact" className="nav__link">
                Contactanos
              </Link>
            </li>
          </ul>
          <div className="nav__close close" id="nav">
            <i className="uil uil-times"></i>
          </div>
        </div>
        <div className="nav__buttons">
          <Link to="/register" className="button button__header">
            ¡Registrate!
          </Link>
          <Link to="/login" className="button button__header">
            Ingresar
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
