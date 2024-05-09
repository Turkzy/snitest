// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css"

function Sidebar() {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/Dashboard"><ion-icon name="home-outline"></ion-icon>Dashboard</Link></li>
        <li><Link to="/Dashboard/product"><ion-icon name="copy-outline"></ion-icon>Product List</Link></li>
        <li className={showSubmenu ? 'active' : ''}>
          <div className='Manage' onClick={toggleSubmenu}>
            <ion-icon name="duplicate-outline"></ion-icon>
            Manage Products
          </div>
          {showSubmenu && (
            <ul className="custom-submenu">
              <li><Link to="/Dashboard/addPanel"><ion-icon name="add-circle-outline"></ion-icon>Add Products</Link></li>
              <li><Link to="/Dashboard/editPanel"><ion-icon name="create-outline"></ion-icon>Edit Products</Link></li>
              <li><Link to="/Dashboard/deletePanel"><ion-icon name="trash-outline"></ion-icon>Delete Products</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/Dashboard/Sales"><ion-icon name="documents-outline"></ion-icon>Sales</Link></li>
        <li><Link to="/Dashboard/SalesReport"><ion-icon name="clipboard-outline"></ion-icon>Sales Report</Link></li>
        <li><Link to="/Dashboard/SystemManagement"><ion-icon name="settings-outline"></ion-icon>System Management</Link></li>
        <li><Link to="/"><ion-icon name="exit-outline"></ion-icon>Logout</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
