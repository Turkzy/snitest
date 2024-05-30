import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import "./AddProductPanel.css";

const AddProductPanel = ({ getProducts, closeModal }) => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    stocks: 0,
    buyingPrice: 0,
    sellingPrice: 0,
    image: '',
    category: 'Default' // Default to 'Default'
  });
  const [categories, setCategories] = useState([]);
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState("");

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
    const parsedValue = name === 'buyingPrice' || name === 'sellingPrice' ? parseInt(value, 10) : value;

    if (!isNaN(parsedValue) || name !== 'buyingPrice' || name !== 'sellingPrice') {
      setNewProduct(prevProduct => ({
        ...prevProduct,
        [name]: parsedValue
      }));
    } else {
      console.error(`Invalid input for ${name}: ${value}`);
    }
  };

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    if (image) {
      setFile(image);
      setPreview(URL.createObjectURL(image));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        stocks: 0,
        buyingPrice: 0,
        sellingPrice: 0,
        image: '',
        category: 'Default' // Reset category after submission
      });
      setPreview(null);
      getProducts();
      closeModal(); // Close the modal after submission
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='add-product-container'>
      <h1>Add Product</h1>
      <div className='add-product-form-container'>
        <div className='add-product-form'>
          <form onSubmit={handleSubmit}>
            <div className='field'>
              <label className='label'>Product Name</label>
              <div className='control'>
                <input
                  type='text'
                  className='input'
                  value={newProduct.name}
                  onChange={handleChange}
                  name='name'
                  placeholder='Product Name'
                  required
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Stocks</label>
              <div className='control'>
                <input
                  type='number'
                  className='input'
                  value={newProduct.stocks}
                  onChange={handleChange}
                  name='stocks'
                  placeholder='Stocks'
                  required
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Buying Price</label>
              <div className='control'>
                <input
                  type='number'
                  className='input'
                  value={newProduct.buyingPrice}
                  onChange={handleChange}
                  name='buyingPrice'
                  placeholder='Buying Price'
                  required
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Selling Price</label>
              <div className='control'>
                <input
                  type='number'
                  className='input'
                  value={newProduct.sellingPrice}
                  onChange={handleChange}
                  name='sellingPrice'
                  placeholder='Selling Price'
                  required
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Category</label>
              <div className='control'>
                <select
                  className='input'
                  value={newProduct.category}
                  onChange={handleChange}
                  name='category'
                  required
                >
                  <option value='Default' disabled>Select Category</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.category}>{category.category}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className='field'>
              <label className='label'>Image</label>
              <div className='control'>
                <input
                  type='file'
                  className='input'
                  onChange={handleImageChange}
                  name='image'
                  required
                />
              </div>
            </div>
            <div className='field-button-container'>
              <button className='button-success' type='submit'>Add Product</button>
              <button className='button-cancel' type='button' onClick={closeModal}>Cancel</button>
            </div>
          </form>
        </div>
        {preview && (
          <div className='image-preview'>
            <img src={preview} alt='Product Preview' />
          </div>
        )}
      </div>
    </div>
  );
};

export default AddProductPanel;
