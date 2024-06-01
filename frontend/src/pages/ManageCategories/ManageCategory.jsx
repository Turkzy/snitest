import React, { useState, useEffect } from 'react';
import axios from "axios";
import Modal from 'react-modal';
import './ManageCategory.css';

const ManageCategory = () => {
  const [categories, setCategories] = useState([]);
  const [showScroll, setShowScroll] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("");

  useEffect(() => {
    getCategories();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
        setMessageType("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const getCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/categories");
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
        setMessage("Category successfully deleted!");
        setMessageType("delete");
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
    setCategoryName(category ? category.category : "");
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentCategory(null);
    setCategoryName("");
  };

  const saveCategory = async () => {
    if (isEditing) {
      try {
        await axios.patch(`http://localhost:5000/categories/${currentCategory.id}`, { category: categoryName });
        getCategories();
        closeModal();
        setMessage("Category successfully updated!");
        setMessageType("update");
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios.post('http://localhost:5000/categories', { category: categoryName });
        getCategories();
        closeModal();
        setMessage("Category successfully added!");
        setMessageType("add");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="categories-container">
      <h1>Manage Categories</h1>
      <button className="add-category-btn" onClick={() => openModal()}>
        <ion-icon name="add-circle-outline"></ion-icon>New Category
      </button>
      <div className="table-container">
        <table className="categories-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td>{category.category}</td>
                <td>
                  <button className="edit-button" onClick={() => openModal(category)}>
                    <ion-icon name="create-outline" />Edit
                  </button>
                  <button className="delete-button" onClick={() => deleteCategory(category.id)}>
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
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="small-modal" overlayClassName="overlay">
        <h2>{isEditing ? "Edit Category" : "Add Category"}</h2>
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Enter category name"
          className='categories-edit-field'
        />
        <div className="modal-buttons">
          <button className="save-button" onClick={saveCategory}>{isEditing ? "Save changes" : "Add"}</button>
          <button className="cancel-button" onClick={closeModal}>Cancel</button>
        </div>
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
