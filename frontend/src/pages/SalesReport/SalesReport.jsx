import React, { useState, useEffect } from 'react';
import Modal from 'react-modal'; // Import React Modal
import './SalesReport.css';
import '../../img/logo.png';

// Custom modal styles
const customModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Semi-transparent overlay
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: 'auto',
    borderRadius: '10px',
    padding: '20px'
  }
};

const SalesReport = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [filter, setFilter] = useState('today');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false); // State to manage modal visibility
  const [selectedTransactions, setSelectedTransactions] = useState([]); // State to store selected transaction details

  useEffect(() => {
    fetch('http://localhost:5000/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data));
  }, []);

  useEffect(() => {
    filterTransactions(filter, selectedMonth, selectedYear);
  }, [filter, selectedMonth, selectedYear, transactions]);

  
  const filterTransactions = (filter, month, year) => {
    let filtered = [...transactions];
  
    switch (filter) {
      case 'today':
        filtered = transactions.filter(transaction => {
          const transactionDate = new Date(transaction.createdAt);
          const now = new Date();
          return transactionDate.toDateString() === now.toDateString();
        });
        break;
      case 'weekly':
        filtered = transactions.filter(transaction => {
          const transactionDate = new Date(transaction.createdAt);
          const oneWeekAgo = new Date();
          oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
          return transactionDate >= oneWeekAgo;
        });
        break;
      case 'monthly':
        // Filter transactions for the current month
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
        filtered = transactions.filter(transaction => {
          const transactionDate = new Date(transaction.createdAt);
          return (
            transactionDate.getMonth() + 1 === currentMonth &&
            transactionDate.getFullYear() === currentYear
          );
        });
        break;
      case 'select':
        // Filter transactions based on selected month and year
        filtered = transactions.filter(transaction => {
          const transactionDate = new Date(transaction.createdAt);
          return (
            transactionDate.getMonth() + 1 === parseInt(month) &&
            transactionDate.getFullYear() === parseInt(year)
          );
        });
        break;
      default:
        break;
    }
  
    // Group transactions by their date and time
    const groupedTransactions = {};
    filtered.forEach(transaction => {
      const dateTime = new Date(transaction.createdAt).toLocaleString();
      if (!groupedTransactions[dateTime]) {
        groupedTransactions[dateTime] = [];
      }
      groupedTransactions[dateTime].push(transaction);
    });
  
    // Convert object back to array
    filtered = Object.entries(groupedTransactions).map(([dateTime, transactions]) => ({
      dateTime,
      transactions,
      totalAmount: transactions.reduce((total, transaction) => total + parseFloat(transaction.totalAmount), 0)
    }));
  
    setFilteredTransactions(filtered);
  };
  

  const openModal = (transactions) => {
    setSelectedTransactions(transactions); // Set the selected transactions
    setModalIsOpen(true); // Open the modal
  };

  const closeModal = () => {
    setModalIsOpen(false); // Close the modal
  };

  return (
    <div className="sales-report-container">
      <h1>Sales Report</h1>
      <div className="filter-options">
        <button onClick={() => setFilter('today')}>Today</button>
        <button onClick={() => setFilter('weekly')}>This Week</button>
        <button onClick={() => setFilter('monthly')}>This Month</button>
        <button onClick={() => setFilter('select')}>Select</button>
        {filter === 'select' && (
          <div>
            <select onChange={(e) => setSelectedMonth(e.target.value)}>
              <option value="">Select Month</option>
              {Array.from({ length: 12 }, (_, index) => {
                const month = index + 1;
                return <option key={month} value={month}>{new Date(2022, month - 1).toLocaleString('default', { month: 'long' })}</option>;
              })}
            </select>
            <input type="number" placeholder="Year" onChange={(e) => setSelectedYear(e.target.value)} />
          </div>
        )}
      </div>
      <table className="sales-report-table">
        <thead>
          <tr>
            <th className="date-header">Date</th>
            <th className="total-amount-header">Total Amount</th>
            <th className="action-header">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transactionGroup, index) => (
            <tr key={index}>
              <td className="date-cell">{new Date(transactionGroup.dateTime).toLocaleDateString()}</td>
              <td className="total-amount-cell">{transactionGroup.totalAmount.toFixed(2)}</td>
              <td className="action-cell">
                <button className='view-details' onClick={() => openModal(transactionGroup.transactions)}>
                <ion-icon name="eye-outline"></ion-icon>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customModalStyles} 
        ariaHideApp={false}>
        <h2 className='Sales-Modal-title'>Transaction Details</h2>
        <table className='Sales-Modal-table'>
          <thead>
            <tr>
              <th className='Sales-Modal-th'>Product Name</th>
              <th className='Sales-Modal-th'>Quantity</th>
              <th className='Sales-Modal-th'>Price</th>
              <th className='Sales-Modal-th'>Subtotal</th>
              </tr>
          </thead>
          <tbody>
            {selectedTransactions.map((transaction, index) => (
              <tr key={index}>
                <td className='Sales-Modal-td'>{transaction.productName}</td>
                <td className='Sales-Modal-td'>{transaction.quantity}</td>
                <td className='Sales-Modal-td'>{transaction.price.toFixed(2)}</td>
                <td className='Sales-Modal-td'>{transaction.subTotal.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className='Sales-Modal-Cancel' onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default SalesReport;

