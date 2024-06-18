import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal'; // Import React Modal
import './SalesReport.css';
import logo from '../../img/logo.png'; // Import company logo

// Custom modal styles
const customModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Semi-transparent overlay
  },
  content: {
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: '80%',
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
  const printRef = useRef(); // Reference to the print content

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

    const now = new Date();
    
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    switch (filter) {
      case 'today':
        filtered = transactions.filter(transaction => {
          const transactionDate = new Date(transaction.createdAt);
          return transactionDate.toDateString() === now.toDateString();
        });
        break;
      case 'weekly':
        filtered = transactions.filter(transaction => {
          const transactionDate = new Date(transaction.createdAt);
          return transactionDate >= startOfWeek && transactionDate <= endOfWeek;
        });
        break;
      case 'monthly':
        const currentMonth = now.getMonth() + 1;
        const currentYear = now.getFullYear();
        filtered = transactions.filter(transaction => {
          const transactionDate = new Date(transaction.createdAt);
          return (
            transactionDate.getMonth() + 1 === currentMonth &&
            transactionDate.getFullYear() === currentYear
          );
        });
        break;
      case 'annually':
        filtered = transactions.filter(transaction => {
          const transactionDate = new Date(transaction.createdAt);
          return transactionDate.getFullYear() === parseInt(year);
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
      totalAmount: transactions.reduce((total, transaction) => total + parseFloat(transaction.subTotal), 0)
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

  const printModalContent = () => {
    const printContent = printRef.current;
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write('<html><head><title>Print</title>');
    printWindow.document.write('<style>');
    printWindow.document.write('table { width: 100%; border-collapse: collapse; }');
    printWindow.document.write('th, td { border: 1px solid black; padding: 8px; text-align: left; }');
    printWindow.document.write('.print-header { display: flex; justify-content: space-between; align-items: center; }');
    printWindow.document.write('.print-header img { height: 50px; }');
    printWindow.document.write('.print-header .date { text-align: right; }');
    printWindow.document.write('</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(printContent.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();

    const logoImage = printWindow.document.querySelector('.logo-modal');
    if (logoImage.complete) {
      printWindow.print();
    } else {
      logoImage.onload = () => {
        printWindow.print();
      };
    }
  };

  const calculateTotalAmount = () => {
    return selectedTransactions.reduce((total, transaction) => total + parseFloat(transaction.subTotal), 0).toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div className="sales-report-container">
      <h1>Sales Report</h1>
      <div className="filter-options">
        <button onClick={() => setFilter('today')}><ion-icon name="calendar-outline"></ion-icon>Daily</button>
        <button onClick={() => setFilter('weekly')}><ion-icon name="calendar-outline"></ion-icon>Weekly</button>
        <button onClick={() => setFilter('monthly')}><ion-icon name="calendar-outline"></ion-icon>Monthly</button>
        <button onClick={() => setFilter('annually')}><ion-icon name="calendar-outline"></ion-icon>Annually</button>
        {filter === 'annually' && (
          <div>
            <input className='salesreport-year' type="number" placeholder="Year" onChange={(e) => setSelectedYear(e.target.value)} />
          </div>
        )}
      </div>
      <table className="sales-report-table">
        <thead>
          <tr>
            <th className="date-header">Date of Transaction</th>
            <th className="total-amount-header">Total Amount</th>
            <th className="action-header">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transactionGroup, index) => (
            <tr key={index}>
              <td className="date-cell">{new Date(transactionGroup.dateTime).toLocaleDateString()}</td>
              <td className="total-amount-cell">₱{transactionGroup.totalAmount.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
              <td className="action-cell">
                <button className='view-details' onClick={() => openModal(transactionGroup.transactions)}>
                  <ion-icon name="eye-outline"></ion-icon>View Details
                </button>
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
        <div ref={printRef}>
          <div className="print-header">
            <img className='logo-modal' src={logo} alt="Company Logo" />
            <div className="date">{new Date().toLocaleDateString()}</div>
          </div>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h2 className='Sales-Modal-title'>R. Laroya Construction Supply</h2>
            <p>1320 Benavidez St., Brgy. 263 Zone 24, 1013 Tondo Manila</p>
          </div>
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
                  <td className='Sales-Modal-td'>₱{transaction.price.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                  <td className='Sales-Modal-td'>₱{transaction.subTotal.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" style={{ textAlign: 'right' }}><strong>Total Amount:</strong></td>
                <td className='Sales-Modal-td'>₱{calculateTotalAmount()}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <button className='Sales-Modal-Print' onClick={printModalContent}>Print</button>
        <button className='Sales-Modal-Cancel' onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default SalesReport;
