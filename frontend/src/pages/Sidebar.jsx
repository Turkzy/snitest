import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./Sidebar.css";

function Sidebar() {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
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
        <li className={showSubmenu ? '' : 'active'}>
          <div className='Manage' onClick={toggleSubmenu}>
            <ion-icon name="duplicate-outline"></ion-icon>
            Manage Products
            <ion-icon name={showSubmenu ? "chevron-up-outline" : "chevron-down-outline"} className="dropdown-icon"></ion-icon>
          </div>
          {showSubmenu && (
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
          <NavLink to="/Dashboard/Sales" activeClassName="active">
            <ion-icon name="documents-outline"></ion-icon>Sales
          </NavLink>
        </li>
        <li>
          <NavLink to="/Dashboard/SalesReport" activeClassName="active">
            <ion-icon name="clipboard-outline"></ion-icon>Sales Report
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
