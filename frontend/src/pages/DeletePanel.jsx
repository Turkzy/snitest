import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./AddProduct.css";

const DeletePanel = () => {
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
      const response = await axios.get("http://localhost:5000/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`http://localhost:5000/products/${id}`);
        getProducts();
      } catch (error) {
        console.log(error);
      }
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
    return `₱${parseFloat(price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="products-container">
      <h1>Delete Products</h1>
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
              <th>Image</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.stocks}</td>
                <td>{formatPrice(product.buyingPrice)}</td>
                <td>{formatPrice(product.sellingPrice)}</td>
                <td><img src={product.url} alt="Product" width="50" height="50" /></td>
                <td>
                  <button className="delete-button" onClick={() => deleteProduct(product.id)}>
                    <ion-icon name="trash-outline"></ion-icon>Delete
                  </button>
                </td>
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

export default DeletePanel;
