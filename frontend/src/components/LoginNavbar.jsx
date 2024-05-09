import React from 'react';
import { Link } from 'react-router-dom';
import './LoginNavbar.css';
import Logo from '../img/logo.png';

const LoginNavbar = () => {
  return (
    <header className='Navbar'>
      <div className='nav-container'>
        <div className='logo'>
          <img src={Logo} alt="Logo" />
        </div>
        <h1 className='logo-text'>R. Laroya Construction Supply</h1>
        <nav className='nav-links'>
          <Link className="link" to="/">
            <span>About</span>
          </Link>
          <Link className="link" to="/Login">
            <span>Login</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default LoginNavbar;
