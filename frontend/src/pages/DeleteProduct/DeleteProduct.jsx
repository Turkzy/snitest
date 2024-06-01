import React, { useState, useEffect } from 'react';
import axios from "axios";
import './DeleteProduct.css';

const DeleteProduct = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showScroll, setShowScroll] = useState(false);
  const [message, setMessage] = useState(null);

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
        setMessage('Product successfully deleted!');
        setTimeout(() => {
          setMessage(null);
        }, 3000); 
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
    <div className="delete-products-container">
      {message && (
        <div className="delete-message-container">
          {message}
        </div>
      )}
      <h1>Delete Products</h1>
      <input
        className="prodList-search-input"
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <div className="delete-table-container">
        <table className="delete-products-table">
          <thead>
            <tr>
              <th className="DeletePanel-th">Product Name</th>
              <th className="DeletePanel-th">Stocks</th>
              <th className="DeletePanel-th">Buying Price</th>
              <th className="DeletePanel-th">Selling Price</th>
              <th className="DeletePanel-th">Category</th>
              <th className="DeletePanel-th">Image</th>
              <th className="DeletePanel-th">Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td className="DeletePanel-td">{product.name}</td>
                <td className="DeletePanel-td">{product.stocks}</td>
                <td className="DeletePanel-td">{formatPrice(product.buyingPrice)}</td>
                <td className="DeletePanel-td">{formatPrice(product.sellingPrice)}</td>
                <td className="DeletePanel-td">{product.category}</td>
                <td className="DeletePanel-td"><img src={product.url} alt="Product" width="50" height="50" /></td>
                <td className="DeletePanel-td">
                  <button className="DeletePanel-delete-button" onClick={() => deleteProduct(product.id)}>
                    <ion-icon name="trash-outline"></ion-icon>Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showScroll && (
        <button className="delete-scroll-to-top" onClick={scrollToTop}>
          <ion-icon name="chevron-up-circle-outline"></ion-icon>Back to Top
        </button>
      )}
    </div>
  );
};

export default DeleteProduct;
