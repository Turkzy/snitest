import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import "./AddProduct.css";

const AddPanel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="products-container">
      <h1><ion-icon name="add-circle-outline"></ion-icon>Add Products</h1>
      <Link to="/Dashboard/Add"><button className="add-product-btn">Add Product</button></Link>
      <div className="table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Stocks</th>
              <th>Buying Price</th>
              <th>Selling Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.stocks}</td>
                <td>{product.buyingPrice}</td>
                <td>{product.sellingPrice}</td>
                <td><img src={product.url} alt="Product"/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddPanel;
