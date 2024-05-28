import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./Sidebar.css";

function Sidebar() {
  const [submenu1Open, setSubmenu1Open] = useState(false);
  const [submenu2Open, setSubmenu2Open] = useState(false);
  const [submenu3Open, setSubmenu3Open] = useState(false); // State for Manage Category submenu
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const toggleSubmenu = (submenu) => {
    if (submenu === 1) {
      setSubmenu1Open(!submenu1Open);
    } else if (submenu === 2) {
      setSubmenu2Open(!submenu2Open);
    } else if (submenu === 3) {
      setSubmenu3Open(!submenu3Open); // Toggle state for Manage Category submenu
    }
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/Dashboard" activeClassName="active">
            <ion-icon name="home-outline"></ion-icon>Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/Dashboard/product" activeClassName="active">
            <ion-icon name="copy-outline"></ion-icon>Product List
          </NavLink>
        </li>
        <li className={submenu1Open ? '' : 'active'}>
          <div className='Manage' onClick={() => toggleSubmenu(1)}>
            <ion-icon name="duplicate-outline"></ion-icon>
            Manage Products
            <ion-icon name={submenu1Open ? "chevron-up-outline" : "chevron-down-outline"} className="dropdown-icon"></ion-icon>
          </div>
          {submenu1Open && (
            <ul className="custom-submenu">
              <li>
                <NavLink to="/Dashboard/addPanel" className="submenu-link">
                  <ion-icon name="add-circle-outline"></ion-icon>Add Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/Dashboard/editPanel" className="submenu-link">
                  <ion-icon name="create-outline"></ion-icon>Edit Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/Dashboard/deletePanel" className="submenu-link">
                  <ion-icon name="trash-outline"></ion-icon>Delete Products
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li className={submenu2Open ? '' : 'active'}>
          <div className='Manage' onClick={() => toggleSubmenu(2)}>
            <ion-icon name="documents-outline"></ion-icon>
            Reports
            <ion-icon name={submenu2Open ? "chevron-up-outline" : "chevron-down-outline"} className="dropdown-icon"></ion-icon>
          </div>
          {submenu2Open && (
            <ul className="custom-submenu">
              <li>
                <NavLink to="/Dashboard/Sales" className="submenu-link">
                  <ion-icon name="document-attach-outline"></ion-icon>Sales
                </NavLink>
              </li>
              <li>
                <NavLink to="/Dashboard/SalesReport" className="submenu-link">
                  <ion-icon name="document-text-outline"></ion-icon>Sales Report
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink to="/Dashboard/managecategories" activeClassName="active">
          <ion-icon name="apps-outline"></ion-icon>Manage Categories
          </NavLink>
        </li>
        <li>
          <NavLink to="/Dashboard/SystemManagement" activeClassName="active">
            <ion-icon name="settings-outline"></ion-icon>System Management
          </NavLink>
        </li>
        <li>
          <NavLink to="/" activeClassName="active">
            <ion-icon name="exit-outline"></ion-icon>Logout
          </NavLink>
        </li>
      </ul>
      <div className="time-date">
        <p>{currentTime}</p>
        <p>{new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default Sidebar;
