import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import "./ManageCategory.css";

const CategoriesPanel = () => {
  const [categories, setCategories] = useState([]);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    getCategories();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/categories");
      setCategories(response.data);
    } catch (error) {
      console.log(error);
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

  return (
    <div className="categories-container">
      <h1>Manage Categories</h1>
      <Link to="/Dashboard/AddCategory">
        <button className="add-category-btn">
          <ion-icon name="add-circle-outline"></ion-icon>New Category
        </button>
      </Link>
      <div className="table-container">
        <table className="categories-table">
          <thead>
            <tr>
              <th>Category</th> 
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td>{category.category}</td>
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
    </div>
  );
};

export default CategoriesPanel;
