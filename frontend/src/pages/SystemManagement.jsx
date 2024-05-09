import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./SystemManagement.css";
import { Link } from 'react-router-dom';

const SystemManagement = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    getAdmins();
  }, []);

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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admins-container">
      <h1><ion-icon name="people-outline"></ion-icon>Admins</h1>
      <div className="table-container">
        <table className="admins-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin.id}>
                <td>{admin.username}</td>
                <td>{admin.password}</td>
                <td>
                  <Link to={`/Dashboard/edit/${admin.id}`}>
                    <button className="edit-button">Edit</button>
                  </Link>
                  <button className="delete-button" onClick={() => deleteAdmin(admin.id)}>Delete</button> 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SystemManagement;
