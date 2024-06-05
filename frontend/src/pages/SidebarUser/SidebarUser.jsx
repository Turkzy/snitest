import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./SidebarUser.css";

function SidebarUser() {
  const [submenu1Open, setSubmenu1Open] = useState(false);
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
    } 
  };

  return (
    <div className="sidebar">
      <div className='identity-admin'>
        <h2 className='identity-admin-title'><ion-icon name="person-circle-outline"></ion-icon>USER</h2>
      </div>
      <ul>
        <li>
          <NavLink to="/UserDashboard" className={({ isActive }) => isActive ? 'active' : ''}>
            <ion-icon name="home-outline"></ion-icon>Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/UserDashboard/productsListUser" className={({ isActive }) => isActive ? 'active' : ''}>
            <ion-icon name="copy-outline"></ion-icon>Product List
          </NavLink>
        </li>
        <li>
          <NavLink to="/UserDashboard/POS" className={({ isActive }) => isActive ? 'active' : ''}>
           <ion-icon name="newspaper-outline"></ion-icon>POS
          </NavLink>
        </li>
        <li className={submenu1Open ? 'active' : ''}>
          <div className="unclickable-link" onClick={() => toggleSubmenu(1)}>
            <ion-icon name="duplicate-outline"></ion-icon>
            Manage Products
            <ion-icon name={submenu1Open ? "chevron-up-outline" : "chevron-down-outline"} className="dropdown-icon"></ion-icon>
          </div>
          {submenu1Open && (
            <ul className="custom-submenu">
              <li>
                <NavLink to="" className="unclickable-link">
                  <ion-icon name="add-circle-outline"></ion-icon>Add Products
                </NavLink>
              </li>
              <li>
                <NavLink to="" className="unclickable-link">
                  <ion-icon name="create-outline"></ion-icon>Edit Products
                </NavLink>
              </li>
              <li>
                <NavLink to="" className="unclickable-link">
                  <ion-icon name="trash-outline"></ion-icon>Delete Products
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink to="" className="unclickable-link">
            <ion-icon name="document-text-outline"></ion-icon>Sales Report
          </NavLink>
        </li>
        <li>
          <NavLink to="" className="unclickable-link">
            <ion-icon name="apps-outline"></ion-icon>Manage Categories
          </NavLink>
        </li>
        <li>
          <NavLink to="" className="unclickable-link">
            <ion-icon name="settings-outline"></ion-icon>System Management
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
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

export default SidebarUser;
