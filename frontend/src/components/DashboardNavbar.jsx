import React from 'react';
import Logo from '../img/logo.png';
import "./DashboardNavbar.css";

const DashboardNavbar = () => {
  return (
    <header className='dashboard-navbar'>
      <div className='navbar-container'>
        <div className='navbar-logo'>
          <img src={Logo} alt="Logo" />
        </div>
        <h1 className='dashboard-logo-text'>R. Laroya Construction Supply Sales & Inventory</h1>
      </div>
    </header>
  );
}

export default DashboardNavbar;
