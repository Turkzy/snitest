import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../img/logo.png';
import './DashboardNavbar.css';

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
        <h1 className='dashboard-logo-text'>R. Laroya Construction Supply Sales & Inventory</h1>
        <p>1320 Benavidez St., Brgy. 263 Zone 24, 1013 Tondo Manila</p>
        <nav className='navbar-links'>
          <NavLink to="/Dashboard" activeClassName="active-link"><ion-icon name="home-outline"></ion-icon>Dashboard</NavLink>
          <NavLink to="/Dashboard/product" activeClassName="active-link"><ion-icon name="copy-outline"></ion-icon>Product List</NavLink>
          <div className='dropdown'>
            <button className='dropdown-toggle' onClick={toggleDropdown}>
            <ion-icon name="duplicate-outline"></ion-icon>Manage Product
            </button>
            {dropdownOpen && (
              <div className='dropdown-menu'>
                <NavLink to="/Dashboard/addPanel" activeClassName="active-link"><ion-icon name="add-circle-outline"></ion-icon>Add Product</NavLink>
                <NavLink to="/Dashboard/editPanel" activeClassName="active-link"><ion-icon name="create-outline"></ion-icon>Edit Product</NavLink>
                <NavLink to="/Dashboard/deletePanel" activeClassName="active-link"><ion-icon name="trash-outline"></ion-icon>Delete Product</NavLink>
              </div>
            )}
          </div>
          <NavLink to="/Dashboard/Sales" activeClassName="active-link"><ion-icon name="documents-outline"></ion-icon>Sales</NavLink>
          <NavLink to="/Dashboard/SalesReport" activeClassName="active-link"><ion-icon name="clipboard-outline"></ion-icon>Sales Report</NavLink>
          <NavLink to="/Dashboard/SystemManagement" activeClassName="active-link"><ion-icon name="settings-outline"></ion-icon>System Management</NavLink>
          <NavLink to="/" activeClassName="active-link"><ion-icon name="exit-outline"></ion-icon>Logout</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default DashboardNavbar;
