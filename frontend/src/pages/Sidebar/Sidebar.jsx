import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./Sidebar.css";

function Sidebar() {
  const [submenu1Open, setSubmenu1Open] = useState(false);
  const [submenu2Open, setSubmenu2Open] = useState(false);
  const [submenu3Open, setSubmenu3Open] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      setCurrentDate(now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const toggleSubmenu = (submenu) => {
    if (submenu === 1) {
      setSubmenu1Open(!submenu1Open);
    } else if (submenu === 2) {
      setSubmenu2Open(!submenu2Open);
    } else if (submenu === 3) {
      setSubmenu3Open(!submenu3Open);
    }
  };

  return (
    <div className="sidebar">
      <div className='identity-admin'>
        <h2 className='identity-admin-title'><ion-icon name="person-circle-outline"></ion-icon>ADMIN</h2>
      </div>
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
        <li className={submenu1Open ? 'active' : ''}>
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
        <li>
                <NavLink to="/Dashboard/SalesReport" className="submenu-link">
                  <ion-icon name="document-text-outline"></ion-icon>Sales Report
                </NavLink>
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
        <p>{currentDate}</p>
        <p>{currentTime}</p>
      </div>
    </div>
  );
}

export default Sidebar;
