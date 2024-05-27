import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AddProduct.css';

const EditPanel = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    getProducts();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
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
    return `₱${Number(parseFloat(price).toFixed(2)).toLocaleString()}`;
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="products-container">
      <h1>Edit Products</h1>
      <input
        className="search-text"
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
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
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.stocks}</td>
                <td>{formatPrice(product.buyingPrice)}</td>
                <td>{formatPrice(product.sellingPrice)}</td>
                <td>{product.category}</td>
                <td>
                  <img src={product.url} alt="Product" width="50" height="50" />
                </td>
                <td>
                  <Link to={`/Dashboard/edit/${product.id}`}>
                    <button className="edit-button">
                      <ion-icon name="create-outline" />Edit
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showScroll && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <ion-icon name="chevron-up-circle-outline" />Back to Top
        </button>
      )}
    </div>
  );
};

export default EditPanel;
