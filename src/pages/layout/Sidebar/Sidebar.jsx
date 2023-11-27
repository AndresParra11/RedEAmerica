// import React from 'react'
import './Sidebar.css';
import face from '../../../assets/Img/teacher-1.jpg';
import { FaPalette, FaImages, FaCaretUp , FaHeart, FaSignOutAlt } from 'react-icons/fa';


const Sidebar = () => {
  return (
    <>
    
    <div id="nav-bar">
      <input id="nav-toggle" type="checkbox" />
      <div id="nav-header">
        <a id="nav-title" href="#">RedEAmerica</a>
        <label htmlFor="nav-toggle">
          <span id="nav-toggle-burger"></span>
        </label>
        <hr />
      </div>
      <div id="nav-content">
      <div className="nav-button ">
          <FaPalette className='fas '/>
          <span>Crear Nuevo Blog</span>
      </div>
        <div className="nav-button">
          <FaImages className='fas' />
          <span>Mis Trabajos</span>
        </div>
        <div className="nav-button">
          <FaHeart className='fas' />
          <span>Trabajos Favoritos</span>
        </div>
        <hr className='logout' />
        <div className="nav-button logout">
          <FaSignOutAlt  className='fas' />
          <span>Logout</span>
        </div>
        <div id="nav-content-highlight"></div>
      </div>
      <input id="nav-footer-toggle" type="checkbox" />
      <div id="nav-footer">
        <div id="nav-footer-heading">
          <div id="nav-footer-avatar">
            <img src={face} alt="Avatar" />
          </div>
          <div id="nav-footer-titlebox">
            <a id="nav-footer-title" href='#'>uahnbu</a>
            <span id="nav-footer-subtitle">Admin</span>
          </div>
          <label htmlFor="nav-footer-toggle">
          <FaCaretUp />
          </label>
        </div>
        <div id="nav-footer-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Sidebar

