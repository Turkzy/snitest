// Sales.js

import React from 'react';
import './Sales.css';

const Sales = () => {
  return (
    <div className="sales-container">
      <h2 className="sales-header">Sales</h2>
      <ul className="sales-list">
        <li className="sales-item">
          <h3>Sale 1</h3>
          <p>Product: Product A</p>
          <div className="sales-details">
            <span className="bold">Date:</span>
            <span>2024-05-03</span>
            <span className="bold">Amount:</span>
            <span>$100</span>
          </div>
        </li>
        <li className="sales-item">
          <h3>Sale 2</h3>
          <p>Product: Product B</p>
          <div className="sales-details">
            <span className="bold">Date:</span>
            <span>2024-05-04</span>
            <span className="bold">Amount:</span>
            <span>$150</span>
          </div>
        </li>
        {/* Add more sales items as needed */}
      </ul>
    </div>
  );
};

export default Sales;
