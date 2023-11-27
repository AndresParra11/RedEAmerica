//import React from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";
import { useContext, useEffect } from "react";
import { User } from "../../Router/AppRouter";

const advertiser = {
  name: "Andrés Felipe",
  lastName: "Parra",
  email: "pipe.parrab@gmail.com",
  country: "Colombia",
  phone: "3178551051",
  address: "Calle 41 # 8-57",
  typeID: "Cédula de ciudadanía",
  numberID: "1110570244",
  documentScan:
    "https://res.cloudinary.com/dlkvt6uph/image/upload/v1701043576/Anunciantes/documentScan_1.jpg",
  typeEducation: "Pregrado",
  studyDocument:
    "https://res.cloudinary.com/dlkvt6uph/image/upload/v1701043604/Anunciantes/studyDocument_1.jpg",
  roles: "ADMIN",
  description:
    "Soy un profesional en el área de la salud de la universidad de Antioquia y me enfoco en la nutrición y el deporte.",
};

const linksAdmin = [
  { name: "Inicio", path: "/" },
  { name: "Nosotros", path: "/home_auth" },
  { name: "Contactanos", path: "/contact" },
  { name: "Iniciar Sesión", path: "/login" },
  { name: "Registrarse", path: "/register" },
];

const buttonsAdmin = [
  { name: "Lista de anunciantes", path: "/list-redeamerica" },
];

const buttons = [
  { name: "Iniciar Sesión", path: "/login" },
  { name: "Registrarse", path: "/register" },
];

const Nav = () => {
  const { user, setUser } = useContext(User);

  useEffect(() => {
    setUser(advertiser);
  }, [user]);
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a className="logo">RedEAmérica</a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            {linksAdmin.map((link, index) => (
              <li className="nav__item" key={index}>
                <Link to={link.path} className="nav__link active-link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav__close close" id="nav">
            <i className="uil uil-times"></i>
          </div>
        </div>
        <div className="nav__buttons">
          {user.roles === "ADMIN"
            ? buttonsAdmin.map((button, index) => (
                <Link
                  to={button.path}
                  className="button button__header"
                  key={index}
                >
                  {button.name}
                </Link>
              ))
            : buttons.map((button, index) => (
                <Link
                  to={button.path}
                  className="button button__header"
                  key={index}
                >
                  {button.name}
                </Link>
              ))}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
