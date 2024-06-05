import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [lowStockCount, setLowStockCount] = useState(0);
  const [lowStockProducts, setLowStockProducts] = useState([]);
  const [categoryCount, setCategoryCount] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products');
      const products = response.data;
      setTotalProducts(products.length);

      const lowStock = products.filter(product => product.stocks <= 5);
      setLowStockCount(lowStock.length);
      setLowStockProducts(lowStock);

      const categoryResponse = await axios.get('http://localhost:5000/categories');
      const categories = categoryResponse.data;
      setCategoryCount(categories.length);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="admDash-container">
      <h1>Dashboard</h1>
      <div className="admDash-stats">
        <div className="admDash-total-products">
          <h2><ion-icon name="grid-outline"></ion-icon>Total Products</h2>
          <p>{totalProducts}</p>
        </div>
        <div className="admDash-low-stock-count">
          <h2><ion-icon name="warning-outline"></ion-icon>Critical Stock</h2>
          <p>{lowStockCount}</p>
        </div>
        <div className="admDash-category-count">
          <h2><ion-icon name="pricetags-outline"></ion-icon>Categories</h2>
          <p>{categoryCount}</p>
        </div>
      </div>
      {lowStockCount > 0 && (
        <div className="admDash-warning">
          <p>Warning: {lowStockCount} product(s) have low stock!</p>
        </div>
      )}
      {lowStockCount > 0 && (
        <div className="admDash-low-stock-products-container">
          <h2>Products with Low Stock</h2>
          <table className="admDash-low-stock-products-table">
            <thead>
              <tr>
                <th className="admDash-th">Product Name</th>
                <th className="admDash-th">Stocks</th>
              </tr>
            </thead>
            <tbody>
              {lowStockProducts.map(product => (
                <tr key={product.id} className="admDash-low-stock-product-item">
                  <td className="admDash-td">{product.name}</td>
                  <td className="admDash-td">{product.stocks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
