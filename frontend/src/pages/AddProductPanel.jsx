import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import "./AddProductPanel.css";


const AddProductPanel = ({ getProducts }) => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    stocks: 0,
    buyingPrice: 0,
    sellingPrice: 0,
    image: ''
  });
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState("");
  const navigate = useNavigate();

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

    try {
      const response = await axios.post('http://localhost:5000/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data); // Log the response for debugging
      navigate("/Dashboard/addPanel");
      setNewProduct({
        name: '',
        stocks: 0,
        buyingPrice: 0,
        sellingPrice: 0,
        image: ''
      });
      setPreview(null);
      getProducts();
    } catch (error) {
      console.error(error); // Log any errors for debugging
    }
  };


  return (
    <div className='add-product-container'>
      <h1>Add Product</h1>
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
          {preview && (
            <div className='image-preview'>
              <img src={preview} alt='Product Preview' />
            </div>
          )}
          <div className='field-button'>
            <button className='button-success' type='submit'>Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductPanel;
