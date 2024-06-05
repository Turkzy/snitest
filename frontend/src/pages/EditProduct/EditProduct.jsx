import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './EditProduct.css';
import Modal from 'react-modal';

const customModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)' 
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '65%',
    borderRadius: '10px',
    padding: '20px'
  }
};

const EditProduct = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showScroll, setShowScroll] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({});
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

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

  const openModal = (product) => {
    setCurrentProduct(product);
    setUpdatedProduct(product);
    setEmail('');
    setOtp('');
    setOtpSent(false);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentProduct(null);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const sendOtp = async () => {
    try {
      // Assuming an endpoint exists for sending OTP
      await axios.post('http://localhost:5000/send-otp', { email });
      setOtpSent(true);
    } catch (error) {
      console.log(error);
    }
  };

  const verifyOtp = async () => {
    try {
      // Assuming an endpoint exists for verifying OTP
      await axios.post('http://localhost:5000/verify-otp', { email, otp });
      // If OTP is verified, continue with product update
      await handleFormSubmit();
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = async () => {
    try {
      await axios.put(`http://localhost:5000/products/${currentProduct.id}`, updatedProduct);
      getProducts();
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

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
                    <button className="edit-products-edit-button" onClick={() => openModal(product)}>
                      <ion-icon name="create-outline" />Edit
                    </button>
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
        contentLabel="Edit Product Modal"
      >
        <h2>Edit Product</h2>
        {currentProduct && (
          <form onSubmit={(e) => e.preventDefault()}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </label>
            {otpSent && (
              <label>
                Enter OTP:
                <input
                  type="text"
                  name="otp"
                  value={otp}
                  onChange={handleOtpChange}
                  required
                />
              </label>
            )}
            {!otpSent ? (
              <button type="button" onClick={sendOtp}>Send OTP</button>
            ) : (
              <button type="button" onClick={verifyOtp}>Verify</button>
            )}
            <button type="button" onClick={closeModal}>Cancel</button>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default EditProduct;
