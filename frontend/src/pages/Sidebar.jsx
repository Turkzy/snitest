import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/Dashboard"><ion-icon name="home-outline"></ion-icon>Dashboard</Link></li>
        <li><Link to="/Dashboard/product"><ion-icon name="copy-outline"></ion-icon>Products</Link></li>
        <li><Link to="/Dashboard/addproduct"><ion-icon name="duplicate-outline"></ion-icon>Manage Products</Link></li>
        <li><Link to="/Dashboard/Sales"><ion-icon name="documents-outline"></ion-icon>Sales</Link></li>
        <li><Link to="/Dashboard/SalesReport"><ion-icon name="clipboard-outline"></ion-icon>Sales Report</Link></li>
        <li><Link to="/Dashboard/SystemManagement"><ion-icon name="settings-outline"></ion-icon>System Management</Link></li>
        <li><Link to="/"><ion-icon name="exit-outline"></ion-icon>Logout</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
