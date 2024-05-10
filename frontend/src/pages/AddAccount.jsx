import React, { useState } from 'react';
import axios from 'axios';
import "./AddAccount.css";
import { useNavigate } from 'react-router';

const AddAccount = () => {
  const [newAccount, setNewAccount] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAccount(prevAccount => ({
      ...prevAccount,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", newAccount.username);
    formData.append("password", newAccount.password);

    try {
      const response = await axios.post('http://localhost:5000/admins', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
      console.log(response.data);
      navigate("/Dashboard/SystemManagement");
      
    } catch (error) {
      console.error(error);
      
    }
  };

  return (
    <div className='add-account'>
      <h1>Add Account</h1>
      <div className='add-account-form'>
        <form onSubmit={handleSubmit}>
          <div className='field'>
            <label className='label'>Username</label>
            <div className='control'>
              <input
                type='text'
                className='input'
                value={newAccount.username}
                onChange={handleChange}
                name='username'
                placeholder='Username'
                required
              />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Password</label>
            <div className='control'>
              <input
                type='password'
                className='input'
                value={newAccount.password}
                onChange={handleChange}
                name='password'
                placeholder='Password'
                required
              />
            </div>
          </div>
          <div className='field-button'>
            <button className='button-success' type='submit'>Add Account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAccount;
