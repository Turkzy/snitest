import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './EditProduct.css';

const EditProduct = () => {
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
    return `₱${parseFloat(price).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };
  

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="edit-products-container">
      <h1>Edit Products</h1>
      <input
        className="prodList-search-input"
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <div className="edit-table-container">
        {filteredProducts.length === 0 ? (
          <table className="edit-products-table">
            <thead>
              <tr>
                <th className="edit-products-th">Product Name</th>
                <th className="edit-products-th">Stocks</th>
                <th className="edit-products-th">Buying Price</th>
                <th className="edit-products-th">Selling Price</th>
                <th className="edit-products-th">Category</th>
                <th className="edit-products-th">Image</th>
                <th className="edit-products-th">Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="7" className="no-products">No products match your search.</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <table className="edit-products-table">
            <thead>
              <tr>
                <th className="edit-products-th">Product Name</th>
                <th className="edit-products-th">Stocks</th>
                <th className="edit-products-th">Buying Price</th>
                <th className="edit-products-th">Selling Price</th>
                <th className="edit-products-th">Category</th>
                <th className="edit-products-th">Image</th>
                <th className="edit-products-th">Edit</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td className="edit-products-td">{product.name}</td>
                  <td className="edit-products-td">{product.stocks}</td>
                  <td className="edit-products-td">{formatPrice(product.buyingPrice)}</td>
                  <td className="edit-products-td">{formatPrice(product.sellingPrice)}</td>
                  <td className="edit-products-td">{product.category}</td>
                  <td className="edit-products-td">
                    <img src={product.url} alt="Product" width="50" height="50" />
                  </td>
                  <td className="edit-products-td">
                    <Link to={`/Dashboard/edit/${product.id}`}>
                      <button className="edit-products-edit-button">
                        <ion-icon name="create-outline" />Edit
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {showScroll && (
        <button className="edit-scroll-to-top" onClick={scrollToTop}>
          <ion-icon name="chevron-up-circle-outline" />Back to Top
        </button>
      )}
    </div>
  );
};

export default EditProduct;
