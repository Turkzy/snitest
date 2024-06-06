import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import "./AddProductPanel.css";

const AddProductPanel = ({ onSuccess, closeModal }) => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    stocks: '', // Changed to empty string
    buyingPrice: '', // Changed to empty string
    sellingPrice: '', // Changed to empty string
    image: '',
    category: 'Default' // Default to 'Default'
  });
  const [categories, setCategories] = useState([]);
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/categories');
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    if (image) {
      setErrorMessage("");
      setPreview(URL.createObjectURL(image));
      setFile(image);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errorMessage) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", newProduct.name);
    formData.append("stocks", newProduct.stocks);
    formData.append("buyingPrice", newProduct.buyingPrice);
    formData.append("sellingPrice", newProduct.sellingPrice);
    formData.append("category", newProduct.category);

    try {
      const response = await axios.post('http://localhost:5000/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data); 
      setNewProduct({
        name: '',
        stocks: '',
        buyingPrice: '',
        sellingPrice: '',
        image: '',
        category: 'Default'
      });
      setPreview(null);
      onSuccess(); 
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='addProductPanel-container'>
      <h1>Add Product</h1>
      {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message */}
      <div className='addProductPanel-form-container'>
        <div className='addProductPanel-form'>
          <form onSubmit={handleSubmit}>
            <div className='addProductPanel-field'>
              <label className='addProductPanel-label' htmlFor='name'>Product Name *</label>
              <div className='addProductPanel-control'>
                <input
                  type='text'
                  className='addProductPanel-input'
                  value={newProduct.name}
                  onChange={handleChange}
                  name='name'
                  id='name'
                  placeholder='Product Name'
                  required
                />
              </div>
            </div>
            <div className='addProductPanel-field'>
              <label className='addProductPanel-label' htmlFor='stocks'>Stocks *</label>
              <div className='addProductPanel-control'>
                <input
                  type='number'
                  className='addProductPanel-input'
                  value={newProduct.stocks}
                  onChange={handleChange}
                  name='stocks'
                  id='stocks'
                  placeholder='Stocks'
                  required
                />
              </div>
            </div>
            <div className='addProductPanel-field'>
              <label className='addProductPanel-label' htmlFor='buyingPrice'>Buying Price *</label>
              <div className='addProductPanel-control'>
                <input
                  type='number'
                  className='addProductPanel-input'
                  value={newProduct.buyingPrice}
                  onChange={handleChange}
                  name='buyingPrice'
                  id='buyingPrice'
                  placeholder='Buying Price'
                  required
                />
              </div>
            </div>
            <div className='addProductPanel-field'>
              <label className='addProductPanel-label' htmlFor='sellingPrice'>Selling Price *</label>
              <div className='addProductPanel-control'>
                <input
                  type='number'
                  className='addProductPanel-input'
                  value={newProduct.sellingPrice}
                  onChange={handleChange}
                  name='sellingPrice'
                  id='sellingPrice'
                  placeholder='Selling Price'
                  required
                />
              </div>
            </div>
            <div className='addProductPanel-field'>
              <label className='addProductPanel-label' htmlFor='category'>Category *</label>
              <div className='addProductPanel-control'>
                <select
                  className='addProductPanel-input'
                  value={newProduct.category}
                  onChange={handleChange}
                  name='category'
                  id='category'
                  required
                >
                  <option value='Default' disabled>Select Category</option>
                  {categories
                    .sort((a, b) => a.category.localeCompare(b.category))
                    .map(category => (
                      <option key={category.id} value={category.category}>{category.category}</option>
                    ))}
                </select>
              </div>
            </div>
            <div className='addProductPanel-field'>
              <label className='addProductPanel-label' htmlFor='image'>Image *</label>
              <div className='addProductPanel-control'>
                <input
                  type='file'
                  className='addProductPanel-input'
                  onChange={handleImageChange}
                  name='image'
                  id='image'
                  accept='.jpg, .jpeg, .png'
                  required
                />
              </div>
            </div>
            <div className='addProductPanel-field-button-container'>
              <button className='addProductPanel-button-success' type='submit'><ion-icon name="add-circle-outline"></ion-icon>Add Product</button>
              <button className='addProductPanel-button-cancel' type='button' onClick={closeModal}><ion-icon name="close-outline"></ion-icon>Cancel</button>
            </div>
          </form>
        </div>
        {preview && (
          <div className='addProductPanel-image-preview'>
            <img src={preview} alt='Product Preview' />
          </div>
        )}
      </div>
    </div>
  );
};

export default AddProductPanel;
