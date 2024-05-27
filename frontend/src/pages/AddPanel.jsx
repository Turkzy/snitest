import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import "./AddProduct.css";

const AddPanel = () => {
  const [products, setProducts] = useState([]);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    getProducts();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatPrice = (price) => {
    return `₱${parseFloat(price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };

  return (
    <div className="products-container">
      <h1>Add Products</h1>
      <Link to="/Dashboard/Add">
        <button className="add-product-btn">
          <ion-icon name="add-circle-outline"></ion-icon>Add Product
        </button>
      </Link>
      <div className="table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Stocks</th>
              <th>Buying Price</th>
              <th>Selling Price</th>
              <th>Category</th> 
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.stocks}</td>
                <td>{formatPrice(product.buyingPrice)}</td>
                <td>{formatPrice(product.sellingPrice)}</td>
                <td>{product.category}</td> {/* Display category */}
                <td><img src={product.url} alt="Product" width="50" height="50" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showScroll && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <ion-icon name="chevron-up-circle-outline"></ion-icon>Back to Top
        </button>
      )}
    </div>
  );
};

export default AddPanel;
