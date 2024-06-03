import React, { useState, useEffect } from 'react';
import axios from "axios";
import Modal from 'react-modal';
import AddProductPanel from './AddProductPanel';
import "./AddProduct.css";

const customModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)' 
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: '60%',
    borderRadius: '10px',
    padding: '20px'
  }
};

const AddProduct = () => {
  const [products, setProducts] = useState([]);
  const [showScroll, setShowScroll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState('');

  useEffect(() => {
    getProducts();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      setProducts(response.data);
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

  const formatPrice = (price) => {
    return `₱${parseFloat(price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddProductSuccess = () => {
    setMessage('Product successfully added!');
    setMessageType('success');
    closeModal(); 
    getProducts(); 
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
        setMessageType("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="add-products-container">
      <div className="header">
        <h1>Add Products</h1>
        <button className="add-product-btn" onClick={openModal}>
          <ion-icon name="add-circle-outline"></ion-icon>Add Product
        </button>
      </div>
      <div className="table-container">
        <table className="addProduct-products-table">
          <thead>
            <tr>
              <th className="addProduct-th">Product Name</th>
              <th className="addProduct-th">Stocks</th>
              <th className="addProduct-th">Buying Price</th>
              <th className="addProduct-th">Selling Price</th>
              <th className="addProduct-th">Category</th> 
              <th className="addProduct-th">Image</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="addProduct-td">{product.name}</td>
                <td className="addProduct-td">{product.stocks}</td>
                <td className="addProduct-td">{formatPrice(product.buyingPrice)}</td>
                <td className="addProduct-td">{formatPrice(product.sellingPrice)}</td>
                <td className="addProduct-td">{product.category}</td>
                <td className="addProduct-td"><img src={product.url} alt="Product" width="50" height="50" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showScroll && (
        <button className="add-scroll-to-top" onClick={scrollToTop}>
          <ion-icon name="chevron-up-circle-outline"></ion-icon>Back to Top
        </button>
      )}
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customModalStyles}>
        <AddProductPanel onSuccess={handleAddProductSuccess} closeModal={closeModal} />
      </Modal>
      {message && (
        <div className={`AddProduct-message-container ${messageType}`}>
          {message}
          <button className="AddProduct-close-message-btn" onClick={() => setMessage(null)}>X</button>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
