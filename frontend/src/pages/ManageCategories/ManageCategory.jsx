import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './ManageCategory.css';

const ManageCategory = () => {
  const [categories, setCategories] = useState([]);
  const [showScroll, setShowScroll] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modal1IsOpen, setModal1IsOpen] = useState(false); 
  const [modal2IsOpen, setModal2IsOpen] = useState(false); 
  const [isEditing, setIsEditing] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [otpError, setOtpError] = useState('');
  const [categoryNameError, setCategoryNameError] = useState('');

  useEffect(() => {
    getCategories();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
        setMessageType('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const getCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/categories');
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategory = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await axios.delete(`http://localhost:5000/categories/${id}`);
        getCategories();
        setMessage('Category successfully deleted!');
        setMessageType('delete');
      } catch (error) {
        console.log(error);
      }
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

  const openModal = (category = null) => {
    setIsEditing(Boolean(category));
    setCurrentCategory(category);
    setCategoryName(category ? category.category : '');
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentCategory(null);
    setCategoryName('');
    setEmail('');
    setOtp('');
    setOtpSent(false);
    setOtpVerified(false);
    setEmailError('');
    setOtpError('');
    clearFields();
  };

  const openModal1 = () => {
    setModal1IsOpen(true);
    setIsEditing(false);
    setCurrentCategory(null);
    setCategoryName('');
    setOtpVerified(true);
  };

  const closeModal1 = () => {
    setModal1IsOpen(false);
    setCurrentCategory(null);
    setCategoryName('');
    setEmail('');
    setOtp('');
    setOtpSent(false);
    setOtpVerified(false);
    setEmailError('');
    setOtpError('');
    clearFields();
  };

  const openModal2 = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      setCurrentCategory(id);
      setModal2IsOpen(true);
    }
  };
  
  const closeModal2 = () => {
    setModal2IsOpen(false);
    setCurrentCategory(null);
    clearFields();
  };
  
  const clearFields = () => {
    setEmail('');
    setOtp('');
    setOtpSent(false);
    setOtpVerified(false);
    setEmailError('');
    setOtpError('');
  };
  const saveCategory = async () => {
    if (isEditing) {
      try {
        await axios.patch(`http://localhost:5000/categories/${currentCategory.id}`, { category: categoryName });
        getCategories();
        closeModal();
        setMessage('Category successfully updated!');
        setMessageType('update');
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios.post('http://localhost:5000/categories', { category: categoryName });
        getCategories();
        closeModal1(); // Close modal1 for adding new category
        setMessage('Category successfully added!');
        setMessageType('add');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const sortedCategories = [...categories].sort((a, b) => a.category.localeCompare(b.category));

  const filteredCategories = sortedCategories.filter((category) =>
    category.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    setOtpError('');
  };

  const sendOtp = async () => {
    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    } if (!email.includes('@')) {
      setEmailError('Invalid Email. it must contain @');
      return;
    }
    try {
      await axios.post('http://localhost:5000/send-otp', { email });
      setOtpSent(true);
      setEmailError('');
    } catch (error) {
      setEmailError('Failed to send OTP. Please enter a valid email.');
    }
  };

  const verifyOtpAndEdit = async () => {
    try {
      await axios.post('http://localhost:5000/verify-otp', { email, otp });
      setOtpVerified(true);
      setOtpError('');
    } catch (error) {
      setOtpError('Invalid OTP. Please try again.');
    }
  };

  const verifyOtpAndDelete = async () => {
    try {
      await axios.post('http://localhost:5000/verify-otp', { email, otp });
      await axios.delete(`http://localhost:5000/categories/${currentCategory}`);
      getCategories();
      closeModal2(); 
      setMessage('Category successfully deleted!');
      setMessageType('delete');
    } catch (error) {
      setOtpError('Invalid OTP. Please try again.');
    }
  };
  
  

  const saveNewCategory = async () => {
    if (!categoryName.trim()) {
      setCategoryNameError('Category name cannot be empty');
      return;
    }
    try {
      await axios.post('http://localhost:5000/categories', { category: categoryName });
      getCategories();
      closeModal1();
      setMessage('Category successfully added!');
      setMessageType('add');
      setCategoryNameError('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="categories-container">
      <h1>Manage Categories</h1>
      <input
        className="prodList-search-input"
        type="text"
        placeholder="Search categories..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <button className="add-category-btn" onClick={openModal1}>
        <ion-icon name="add-circle-outline"></ion-icon>New Category
      </button>
      <div className="table-container">
        <table className="categories-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Date Created</th>
              <th>Updated At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories.length === 0 ? (
              <tr>
                <td colSpan="2" className="no-products">
                  No categories match your search.
                </td>
              </tr>
            ) : (
              filteredCategories.map((category) => (
                <tr key={category.id}>
                  <td>{category.category}</td>
                  <td>{new Date(category.createdAt).toLocaleDateString()}</td>
                  <td>{new Date(category.updatedAt).toLocaleDateString()}</td>
                  <td>
                    <button className="edit-button" onClick={() => openModal(category)}>
                      <ion-icon name="create-outline" />Edit
                    </button>
                    <button className="delete-button" onClick={() => openModal2(category.id)}>
                      <ion-icon name="trash-outline"></ion-icon>Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {showScroll && (
        <button className="category-scroll-to-top" onClick={scrollToTop}>
          <ion-icon name="chevron-up-circle-outline"></ion-icon>Back to Top
        </button>
      )}
      
      {/* Delete Confirmation Modal */}
      <Modal isOpen={modal2IsOpen} onRequestClose={closeModal2} className="small-modal" overlayClassName="overlay">
      <button className="cancel-button" onClick={closeModal2}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <h2 className='verify-email-title-category'>Verify Email</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>Email:
            <input
              className='input-email'
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && <div className="error-message">{emailError}</div>}
          </label>
          {otpSent && (
            <label>Enter OTP:
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
            <button className='btn-Otp' type="button" onClick={sendOtp}>
              <ion-icon name="mail-unread-outline"></ion-icon>Send OTP
            </button>
          ) : (
            <button className='btn-vrfy' type="button" onClick={verifyOtpAndDelete}>
              <ion-icon name="logo-google"></ion-icon>Verify OTP and delete
            </button>
          )}
        </form>
      </Modal>
       {/* Edit Confirmation Modal */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="small-modal" overlayClassName="overlay">
        <button className="cancel-button" onClick={closeModal}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <h2 className='verify-email-title-category'>Verify Email</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>Email:
            <input
              className='input-email'
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && <div className="error-message">{emailError}</div>}
          </label>
          {otpSent && (
            <label>Enter OTP:
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
            <button className='btn-Otp' type="button" onClick={sendOtp}>
              <ion-icon name="mail-unread-outline"></ion-icon>Send OTP
            </button>
          ) : (
            <button className='btn-vrfy' type="button" onClick={verifyOtpAndEdit}>
              <ion-icon name="logo-google"></ion-icon>Verify OTP
            </button>
          )}
        </form>
        {otpVerified && (
          <>
            <h3 className='category-modal'>Edit Category</h3>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="Enter category name"
              className='categories-edit-field'
            />
            <button className='btn-save-category' type="button" onClick={saveCategory}>
              <ion-icon name="save-outline"></ion-icon>{isEditing ? "Save Changes" : "Add Category"}
            </button>
          </>
        )}
      </Modal>
      {/* Modal for Adding New Category */}
      <Modal isOpen={modal1IsOpen} onRequestClose={closeModal1} className="small-modal" overlayClassName="overlay">
        <button className="cancel-button" onClick={closeModal1}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <h2 className='verify-email-title-category'>Add New Category</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>Category Name:
            <input
              className='input-email'
              type="text"
              name="categoryName"
              value={categoryName}
              onChange={(e) => {
                setCategoryName(e.target.value);
                setCategoryNameError('');
              }}
              required
            />
            {categoryNameError && <div className="error-message">{categoryNameError}</div>}
          </label>
          <button className='btn-save-category' type="button" onClick={saveNewCategory}>
            <ion-icon name="save-outline"></ion-icon>Add Category
          </button>
        </form>
      </Modal>
      {message && (
        <div className={`message-container ${messageType}`}>
          {message}
          <button className="close-message-btn" onClick={() => setMessage(null)}>X</button>
        </div>
      )}
    </div>
  );
};

export default ManageCategory;

