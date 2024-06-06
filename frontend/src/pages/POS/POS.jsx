import React, { useState, useEffect } from 'react';
import './POS.css';

const POS = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [changeAmount, setChangeAmount] = useState(0);
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [paymentModalIsOpen, setPaymentModalIsOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState('');

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
  
    // Check if the product is already in the cart
    const existingItemIndex = cart.findIndex(item => item.productName === selectedProduct.name);
    if (existingItemIndex !== -1) {
      // If the product is already in the cart, update the quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      updatedCart[existingItemIndex].subTotal += selectedProduct.sellingPrice * quantity;
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add a new item
      const subTotal = selectedProduct.sellingPrice * quantity;
      const newCartItem = {
        productName: selectedProduct.name,
        quantity,
        price: selectedProduct.sellingPrice,
        subTotal
      };
      setCart([...cart, newCartItem]);
    }
    
    // Update total amount
    setTotalAmount(totalAmount + selectedProduct.sellingPrice * quantity);
    setProductName('');
    setQuantity(1);
    setSelectedProduct(null);
  };
  

  const handleCheckout = () => {
    if (totalAmount <= 0) {
      alert('Cart is empty. Please add items to proceed with the checkout.');
      return;
    }
    setPaymentModalIsOpen(true);
  };

  const handlePayment = () => {
    if (paymentAmount === '' || parseFloat(paymentAmount) < totalAmount) {
      alert('Please enter a valid payment amount');
      return;
    }
  
    const change = parseFloat(paymentAmount) - totalAmount;
    setChangeAmount(change);
    setCart([]);
    setTotalAmount(0);
    setPaymentAmount('');
    setPaymentModalIsOpen(false);
  
    // POST request to process transaction
    fetch('http://localhost:5000/processTransaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ items: cart, totalAmount: totalAmount })
    })
      .then(response => response.json())
      .then(data => {
        alert(`Transaction successful! Total Amount: ${formatCurrency(totalAmount)}, Change: ${formatCurrency(change)}`);
        setMessage('Transaction successful!');
        setMessageType('success');
      })
      .catch(error => console.error('Error:', error));
  };
  
  

  const handleProductInputChange = (e) => {
    setProductName(e.target.value);
    const product = products.find(prod => prod.name.toLowerCase() === e.target.value.toLowerCase());
    setSelectedProduct(product || null);
  };

  const handlePaymentInputChange = (e) => {
    const value = e.target.value;
    // Preserve leading zeros and prevent non-numeric characters
    if (!isNaN(value) && value !== '' && value.charAt(0) !== '0') {
      setPaymentAmount(value);
      const change = parseFloat(value) - totalAmount;
      setChangeAmount(change);
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
        setMessageType('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="pos-container">
      <h1>Transaction</h1>
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
        <button onClick={handleAddToCart}><ion-icon name="cart-outline"></ion-icon>Add to Cart</button>
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
        <button onClick={handleCheckout}><ion-icon name="checkmark-done-circle-outline"></ion-icon>Checkout</button>
      </div>
      {paymentModalIsOpen && (
        <div className="payment-modal">
          <div className="payment-content">
            <span className="close" onClick={() => setPaymentModalIsOpen(false)}>&times;</span>
            <h2>Total Amount: {formatCurrency(totalAmount)}</h2>
            <input
              type="text" // Change input type to 'text'
              placeholder="Enter payment amount"
              value={paymentAmount}
              onChange={handlePaymentInputChange}
            />
            <h2>Change Due: {formatCurrency(changeAmount)}</h2>
            <button className='payment-modal-pay' onClick={handlePayment}><ion-icon name="cash-outline"></ion-icon>Pay Now</button>
            <button className='payment-modal-cancel' onClick={() => setPaymentModalIsOpen(false)}><ion-icon name="close-circle-outline"></ion-icon>Cancel</button>
          </div>
        </div>
      )}
      {message && (
        <div className={`POS-message-container ${messageType}`}>
          {message}
          <button className="close-message-btn" onClick={() => setMessage(null)}>X</button>
        </div>
      )}
    </div>
  );
};

export default POS;
