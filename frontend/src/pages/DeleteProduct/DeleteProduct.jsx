import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import './DeleteProduct.css';

const customModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  content: {
    backgroundColor: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '20%',
    height: '33%',
    borderRadius: '10px',
    padding: '20px'
  }
};

const DeleteProduct = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showScroll, setShowScroll] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [otpError, setOtpError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false); // New state to track email validity
  const navigate = useNavigate(); // useNavigate hook from React Router v6

  useEffect(() => {
    getProducts();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

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

  const openModal = (product) => {
    setCurrentProduct(product);
    setEmail('');
    setOtp('');
    setOtpSent(false);
    setEmailError('');
    setOtpError('');
    if (window.confirm("Are you sure you want to delete this product?")) {
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentProduct(null);
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setEmailError(''); // Clear error when user starts typing
    setIsEmailValid(value.trim() !== ''); // Check if email is not empty
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
    setOtpError(''); // Clear error when user starts typing
  };

  const sendOtp = async () => {
    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    }if (!email.includes('@')) {
      setEmailError('Invalid Email. it must contain @');
      return;
    }
  
    try {
      // Assuming an endpoint exists for sending OTP
      await axios.post('http://localhost:5000/send-otp', { email });
      setOtpSent(true);
      setEmailError(''); // Clear any previous error
    } catch (error) {
      setEmailError('Enter a valid email');
    }
  };
  

  const verifyOtpAndDelete = async () => {
    try {
      // Assuming an endpoint exists for verifying OTP
      await axios.post('http://localhost:5000/verify-otp', { email, otp });
      // If OTP is verified, delete the product
      await axios.delete(`http://localhost:5000/products/${currentProduct.id}`);
      getProducts();
      closeModal();
      setSuccessMessage('Product successfully deleted!');
    } catch (error) {
      setOtpError('Invalid OTP. Please try again.');
    }
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
    <div className="delete-products-container">
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
              <th className="addProduct-th">Date Created</th>
              <th className="DeletePanel-th">Delete</th>
              </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <tr key={product.id}>
                <td className="DeletePanel-td">{product.name}</td>
                <td className="DeletePanel-td">{product.stocks}</td>
                <td className="DeletePanel-td">{formatPrice(product.buyingPrice)}</td>
                <td className="DeletePanel-td">{formatPrice(product.sellingPrice)}</td>
                <td className="DeletePanel-td">{product.category}</td>
                <td className="DeletePanel-td">
                  <img src={product.url} alt="Product" width="50" height="50" />
                </td>
                <td className="addProduct-td">{new Date(product.updatedAt).toLocaleDateString()}</td>
                <td className="DeletePanel-td">
                  <button className="DeletePanel-delete-button" onClick={() => openModal(product)}>
                    <ion-icon name="trash-outline"></ion-icon>Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="no-products">No products match your search.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    {showScroll && (
      <button className="delete-scroll-to-top" onClick={scrollToTop}>
        <ion-icon name="chevron-up-circle-outline"></ion-icon>Back to Top
      </button>
    )}

    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customModalStyles}
      contentLabel="Delete Product Modal"
    >
      <h2 className='verify-email-title'>Verify Email</h2>
      {currentProduct && (
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Email:
            <input
              className='input-email'
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required // Add required attribute here
            />
            {emailError && <div className="error-message">{emailError}</div>}
          </label>
          {otpSent && (
            <label>
              Enter OTP:
              <input
                className='input-otp'
                type="text"
                name="otp"
                value={otp}
                onChange={handleOtpChange}
                required
              />
              {otpError && <div className="error-message">{otpError}</div>}
            </label>
          )}
          {!otpSent ? (
            <button className='btn-Otp' type="button" onClick={sendOtp}><ion-icon name="mail-unread-outline"></ion-icon>Send OTP</button>
          ) : (
            <button className='btn-vrfy' type="button" onClick={verifyOtpAndDelete}><ion-icon name="logo-google"></ion-icon>Verify and Delete</button>
          )}
          <button className='btn-cancel-vrfy' type="button" onClick={closeModal}><ion-icon name="close-circle-outline"></ion-icon>Cancel</button>
        </form>
      )}
    </Modal>
    {successMessage && <div className="delete-message-container ">{successMessage}</div>}
  </div>
);
};

export default DeleteProduct;

