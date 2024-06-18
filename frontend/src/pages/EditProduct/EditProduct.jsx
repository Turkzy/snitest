import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './EditProduct.css';
import Modal from 'react-modal';

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
  const [emailError, setEmailError] = useState('');
  const [otpError, setOtpError] = useState('');
  const navigate = useNavigate(); // useNavigate hook from React Router v6

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
    setEmailError('');
    setOtpError('');
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
    setEmailError(''); // Clear error when user starts typing
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

  const verifyOtp = async () => {
    try {
      // Assuming an endpoint exists for verifying OTP
      await axios.post('http://localhost:5000/verify-otp', { email, otp });
      // If OTP is verified, navigate to the edit product page with the product ID
      navigate(`/Dashboard/edit/${currentProduct.id}`); // Navigate to the edit product panel
    } catch (error) {
      setOtpError('Invalid OTP. Please try again.');
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
                <th className="edit-products-th">Updated At</th>
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
                  <td className="addProduct-td">{new Date(product.updatedAt).toLocaleDateString()}</td>
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
        <h2 className='verify-email-title'>Verify Email</h2>
        {currentProduct && (
          <form onSubmit={(e) => e.preventDefault()}>
            <label>
              Email:
              <input className='input-email'
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              {emailError && <div className="error-message">{emailError}</div>}
            </label>
            {otpSent && (
              <label>
                Enter OTP:
                <input className='input-otp'
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
              <button className='btn-vrfy' type="button" onClick={verifyOtp}><ion-icon name="logo-google"></ion-icon>Verify to Edit</button>
            )}
            <button className='btn-cancel-vrfy' type="button" onClick={closeModal}><ion-icon name="close-circle-outline"></ion-icon>Cancel</button>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default EditProduct;
