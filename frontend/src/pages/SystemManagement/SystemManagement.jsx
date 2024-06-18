import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import "./SystemManagement.css";

const SystemManagement = () => {
  const [admins, setAdmins] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modal1IsOpen, setModal1IsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentAdmin, setCurrentAdmin] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usertype, setUsertype] = useState('User');
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [emailError, setEmailError] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpError, setOtpError] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    getAdmins();
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

  const getAdmins = async () => {
    try {
      const response = await axios.get("http://localhost:5000/admins");
      setAdmins(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAdmin = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/admins/${id}`);
      getAdmins();
      setMessage('Account successfully deleted!');
      setMessageType('delete');
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = (admin = null) => {
    setIsEditing(Boolean(admin));
    setCurrentAdmin(admin);
    if (admin) {
      setUsername(admin.username);
      setPassword(admin.password);
      setUsertype(admin.usertype);
    } else {
      clearFields();
    }
    setModalIsOpen(true);
  };

  const clearFields = () => {
    setUsername('');
    setPassword('');
    setUsertype('User');
    setEmail('');
    setOtp('');
    setOtpSent(false);
    setOtpVerified(false);
    setEmailError('');
    setOtpError('');
    setError('');
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentAdmin(null);
    clearFields();
  };

  const openModal2 = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setCurrentAdmin(id);
      setModal2IsOpen(true);
    }
  };

  const closeModal2 = () => {
    setModal2IsOpen(false);
    setOtpSent(false); 
    clearFields();
  };
  

  const openModal1 = () => {
    setIsEditing(false);
    clearFields();
    setModal1IsOpen(true);
  };

  const closeModal1 = () => {
    setModal1IsOpen(false);
    clearFields();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isUsernameTaken = admins.some(admin => admin.username.toLowerCase() === username.toLowerCase());

    if (isUsernameTaken && (!isEditing || (isEditing && currentAdmin.username.toLowerCase() !== username.toLowerCase()))) {
      setError('Username already taken!');
      return;
    } else {
      setError('');
    }

    if (isEditing) {
      try {
        await axios.patch(`http://localhost:5000/admins/${currentAdmin.id}`, { username, password, usertype });
        getAdmins();
        closeModal();
        setMessage('Account successfully updated!');
        setMessageType('update');
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios.post('http://localhost:5000/admins', { username, password, usertype });
        getAdmins();
        closeModal1();
        setMessage('Account successfully added!');
        setMessageType('add');
      } catch (error) {
        console.log(error);
      }
    }
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
      await axios.delete(`http://localhost:5000/admins/${currentAdmin}`);
      getAdmins();
      closeModal2();
      setMessage('Account successfully deleted!');
      setMessageType('delete');
    } catch (error) {
      setOtpError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="system-management-container">
      <h1>System Management</h1>
      <button className="add-admin-btn" onClick={openModal1}>
        <ion-icon name="person-add-outline"></ion-icon> Add Account
      </button>
      <div className="table-container">
        <table className="admins-table">
          <thead>
            <tr>
              <th className="admins-th">Username</th>
              <th className="admins-th">Password</th>
              <th className="admins-th">Usertype</th>
              <th className="admins-th">Account Created At</th>
              <th className="admins-th">Account Updated At</th>
              <th className="admins-th">Actions</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin.id}>
                <td className="admins-td">{admin.username}</td>
                <td className="admins-td">{admin.password}</td>
                <td className="admins-td">{admin.usertype}</td>
                <td className="admins-td">{new Date(admin.createdAt).toLocaleDateString()}</td>
                <td className="admins-td">{new Date(admin.updatedAt).toLocaleDateString()}</td>
                <td className="admins-td">
                  <button className="edit-button" onClick={() => openModal(admin)}>
                    <ion-icon name="create-outline" />Edit
                  </button>
                  <button className="delete-button" onClick={() => openModal2(admin.id)}>
                    <ion-icon name="trash-outline"></ion-icon>Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* UPDATE */}
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
              <ion-icon name="logo-google"></ion-icon>
              Verify OTP
            </button>
          )}
        </form>
        {otpVerified && (
          <>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className='margin-top-modal' htmlFor="username">Username: *</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                {error && <div className="error-message">{error}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password: *</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="usertype">Usertype:</label>
                <select id="usertype" value={usertype} onChange={(e) => setUsertype(e.target.value)} required>
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <div className="modal-buttons">
                <button type="submit" className="save-button">
                  <ion-icon name="add-circle-outline"></ion-icon> Save Changes
                </button>
              </div>
            </form>
          </>
        )}
      </Modal>

      {/* DELETE */}
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
            
      {/* ADD */}
      <Modal isOpen={modal1IsOpen} onRequestClose={closeModal1} className="small-modal" overlayClassName="overlay">
        <button className="cancel-button" onClick={closeModal1}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <h2 className='verify-email-title-category'>Add Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username: *</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            {error && <div className="error-message">{error}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: *</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="usertype">Usertype:</label>
            <select id="usertype" value={usertype} onChange={(e) => setUsertype(e.target.value)} required>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div className="modal-buttons">
            <button type="submit" className="save-button">
              <ion-icon name="add-circle-outline"></ion-icon>Add Account
            </button>
          </div>
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

export default SystemManagement;
