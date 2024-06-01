// POS.js

import React, { useState, useEffect } from 'react';
import './POS.css';

const POS = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const formatCurrency = (amount) => {
    return amount.toLocaleString('en-PH', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 2
    });
  };

  const handleAddToCart = () => {
    if (!selectedProduct) {
      alert('Please select a valid product');
      return;
    }

    if (quantity > selectedProduct.stocks) {
      alert('Quantity exceeds available stock');
      return;
    }

    const subTotal = selectedProduct.sellingPrice * quantity;
    const newCartItem = {
      productName: selectedProduct.name,
      quantity,
      price: selectedProduct.sellingPrice,
      subTotal
    };

    setCart([...cart, newCartItem]);
    setTotalAmount(totalAmount + subTotal);
    setProductName('');
    setQuantity(1);
    setSelectedProduct(null);
  };

  const handleCheckout = () => {
    fetch('http://localhost:5000/processTransaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ items: cart })
    })
    .then(response => response.json())
    .then(data => {
      alert(`Transaction successful! Total Amount: ${formatCurrency(data.totalAmount)}`);
      setCart([]);
      setTotalAmount(0);
    })
    .catch(error => console.error('Error:', error));
  };

  const handleProductInputChange = (e) => {
    setProductName(e.target.value);
    const product = products.find(prod => prod.name.toLowerCase() === e.target.value.toLowerCase());
    setSelectedProduct(product || null);
  };

  return (
    <div className="pos-container">
      <h1>POS System</h1>
      <div className="pos-inputs">
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={handleProductInputChange}
          list="product-list"
        />
        <datalist id="product-list">
          {products.map(product => (
            <option key={product.id} value={product.name} />
          ))}
        </datalist>
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          min="1"
        />
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      <table className="pos-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Sub Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{item.productName}</td>
              <td>{item.quantity}</td>
              <td>{formatCurrency(item.price)}</td>
              <td>{formatCurrency(item.subTotal)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pos-total">
        <h2>Total Amount: {formatCurrency(totalAmount)}</h2>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default POS;
