// import React from 'react'
import "./Sidebar.css";
import {
  FaPalette,
  FaImages,
  FaCaretUp,
  FaHeart,
  FaSignOutAlt,
} from "react-icons/fa";
import { User } from "../../../Router/AppRouter";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

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
  roles: "REDEAMERICA",
  description:
    "Soy un profesional en el área de la salud de la universidad de Antioquia y me enfoco en la nutrición y el deporte.",
};

const Sidebar = () => {
  const { user, setUser } = useContext(User);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(advertiser);
  }, [user]);
  return (
    <>
      <div id="nav-bar">
        <input id="nav-toggle" type="checkbox" />
        <div id="nav-header">
          <a id="nav-title" href="#">
            RedEAmérica
          </a>
          <label htmlFor="nav-toggle">
            <span id="nav-toggle-burger"></span>
          </label>
          <hr />
        </div>
        <div id="nav-content">
          <div className="nav-button ">
            <FaPalette className="fas " />
            <span>Crear Nuevo Blog</span>
          </div>
          <div className="nav-button">
            <FaImages className="fas" />
            <span>Mis Trabajos</span>
          </div>
          <div className="nav-button">
            <FaHeart className="fas" />
            <span>Trabajos Favoritos</span>
          </div>
          <hr className="logout" />
          <div className="nav-button logout">
            <FaSignOutAlt className="fas" />
            <span
              onClick={() => {
                navigate("/");
              }}
            >
              Logout
            </span>
          </div>
          <div id="nav-content-highlight"></div>
        </div>
        <input id="nav-footer-toggle" type="checkbox" />
        <div id="nav-footer">
          <div id="nav-footer-heading">
            <div id="nav-footer-avatar">
              <img
                src="https://res-console.cloudinary.com/dlkvt6uph/media_explorer_thumbnails/0970341ea07a69743d11b34552a39872/detailed"
                alt="Avatar"
              />
            </div>
            <div id="nav-footer-titlebox">
              <a id="nav-footer-title">{user.name}</a>
              <span id="nav-footer-subtitle">{user.roles}</span>
            </div>
            <label htmlFor="nav-footer-toggle">
              <FaCaretUp />
            </label>
          </div>
          <div id="nav-footer-content">{user.description}</div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
