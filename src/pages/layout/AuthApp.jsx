/* eslint-disable no-unused-vars */
import './AuthApp.css';
import '../layout/Sidebar/Sidebar.css';
import React from 'react'
import Sidebar from './Sidebar/Sidebar';
import HomeAuth from './HomeAuth/HomeAuth';

const AuthApp = () => {
  return (
    <div>
      <Sidebar/>
      <HomeAuth/>
    </div>
  )
}

export default AuthApp