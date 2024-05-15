import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router';
import "./EditAccount.css"

const EditAccount = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usertype, setUsertype] = useState('User'); // Default to 'User'
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchAdmin();
  }, []);

  const fetchAdmin = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/admins/${id}`);
      const admin = response.data;
      setUsername(admin.username);
      setPassword(admin.password);
      setUsertype(admin.usertype);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.patch(`http://localhost:5000/admins/${id}`, { username, password, usertype });
      setMessage('Admin Updated Successfully');
      setTimeout(() => {
        navigate('/Dashboard/SystemManagement'); // Redirect to SystemManagement after update
      }, 1500);
    } catch (error) {
      console.log(error);
      setMessage('Failed to update admin');
    }
  };

  return (
    <div className="edit-account-container custom-margin">
      <h1>Edit Account</h1>
      <form onSubmit={handleSubmit} className="edit-account-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="usertype">User Type</label>
          <select
            id="usertype"
            value={usertype}
            onChange={(e) => setUsertype(e.target.value)}
            required
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Update Account</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default EditAccount;
