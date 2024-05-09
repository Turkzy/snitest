// SalesReport.js

import React, { useState } from 'react';
import './SalesReport.css';

const SalesReport = () => {
  // Dummy sales data
  const [salesData, setSalesData] = useState([
    { id: 1, date: '2024-05-01', productName: 'Product A', buyingPrice: 50, sellingPrice: 100, qtySold: 2 },
    { id: 2, date: '2024-05-02', productName: 'Product B', buyingPrice: 70, sellingPrice: 150, qtySold: 3 },
    { id: 3, date: '2024-05-03', productName: 'Product C', buyingPrice: 80, sellingPrice: 200, qtySold: 4 },
    // Add more dummy data as needed
  ]);

  // Calculate total sales and profit
  const totalSales = salesData.reduce((acc, sale) => acc + sale.sellingPrice * sale.qtySold, 0);
  const totalCost = salesData.reduce((acc, sale) => acc + sale.buyingPrice * sale.qtySold, 0);
  const profit = totalSales - totalCost;

  return (
    <div className="sales-report-container">
      <h2 className="sales-report-header">Sales Report</h2>
      <div className="sales-table">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Product Name</th>
              <th>Buying Price ($)</th>
              <th>Selling Price ($)</th>
              <th>Total Qty</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((sale) => (
              <tr key={sale.id}>
                <td>{sale.date}</td>
                <td>{sale.productName}</td>
                <td>{sale.buyingPrice}</td>
                <td>{sale.sellingPrice}</td>
                <td>{sale.qtySold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="sales-summary">
        <p>Total Sales: ${totalSales}</p>
        <p>Total Cost: ${totalCost}</p>
        <p>Profit: ${profit}</p>
      </div>
    </div>
  );
};

export default SalesReport;
