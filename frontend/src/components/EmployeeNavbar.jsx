import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../img/logo.png';
import './EmployeeNavbar.css';

const DashboardNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className='dashboard-navbar'>
      <div className='navbar-container'>
        <div className='navbar-logo'>
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <h1 className='dashboard-logo-text'>R. Laroya Construction Supply Sales & Inventory</h1>
          <p className='navbar-address'>1320 Benavidez St., Brgy. 263 Zone 24, 1013 Tondo Manila</p>
        </div>
        <nav className='navbar-links'>
          <NavLink to="/UserDashboard" activeClassName="active-link">
            <ion-icon name="home-outline"></ion-icon>Dashboard
          </NavLink>
          <NavLink to="/UserDashboard/POS" activeclassName="active-link">
            <ion-icon name="newspaper-outline"></ion-icon>POS
          </NavLink>
          <NavLink to="/UserDashboard/ProductsListUser" activeclassName="active-link">
            <ion-icon name="copy-outline"></ion-icon>Product List
          </NavLink>
          <NavLink to="" className="unclickable-link">
            <div className='dropdown'>
              <button className='dropdown-toggle' onClick={toggleDropdown}>
                <ion-icon name="duplicate-outline"></ion-icon>Manage Product
              </button>
              <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                <NavLink to="" className="unclickable-link">
                  <ion-icon name="add-circle-outline"></ion-icon>Add Product
                </NavLink>
                <NavLink to="" className="unclickable-link">
                  <ion-icon name="create-outline"></ion-icon>Edit Product
                </NavLink>
                <NavLink to="" className="unclickable-link">
                  <ion-icon name="trash-outline"></ion-icon>Delete Product
                </NavLink>
              </div>
            </div>
          </NavLink>
          <NavLink to="" className="unclickable-link">
            <ion-icon name="clipboard-outline"></ion-icon>Sales Report
          </NavLink>
          <NavLink to="" className="unclickable-link">
            <ion-icon name="settings-outline"></ion-icon>System Management
          </NavLink>
          <NavLink to="/" activeClassName="active-link">
            <ion-icon name="exit-outline"></ion-icon>Logout
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default DashboardNavbar;
