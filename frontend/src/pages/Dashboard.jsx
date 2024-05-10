import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [lowStockCount, setLowStockCount] = useState(0);
  const [lowStockProducts, setLowStockProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products');
      const products = response.data;
      setTotalProducts(products.length);

      // Count products with low stock
      const lowStock = products.filter(product => product.stocks <= 4);
      setLowStockCount(lowStock.length);

      // Set products with low stock
      setLowStockProducts(lowStock);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-stats">
        <div className="total-products">
          <h2><ion-icon name="grid-outline"></ion-icon>Total Products</h2>
          <p>{totalProducts}</p>
        </div>
        <div className="low-stock-count">
          <h2><ion-icon name="warning-outline"></ion-icon>Critical Stock</h2>
          <p>{lowStockCount}</p>
        </div>
      </div>
      {lowStockCount > 0 && (
        <div className="warning">
          <p>Warning: {lowStockCount} product(s) have low stock!</p>
        </div>
      )}
      {lowStockCount > 0 && (
        <div className="low-stock-products-container">
        <h2>Products with Low Stock</h2>
        <table className="low-stock-products-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Stocks</th>
            </tr>
          </thead>
          <tbody>
            {lowStockProducts.map(product => (
              <tr key={product.id} className="low-stock-product-item">
                <td>{product.name}</td>
                <td>{product.stocks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      )}
    </div>
  );
};

export default Dashboard;
