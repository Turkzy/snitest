import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./ProductsList.css";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showScroll, setShowScroll] = useState(false);

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

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
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

  const filteredProducts = products.filter((product) =>
    (product.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedCategory === "All" || product.category === selectedCategory)
  );

  const categories = Array.from(new Set(products.map(product => product.category)));

  return (
    <div className="prodList-container">
      <h1>Product List</h1>
      <div className="prodList-filters">
        <input
          className="prodList-search-input"
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <select
          className="prodList-category-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="All">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="prodList-table-container">
        <table className="prodList-table">
          <thead>
            <tr>
              <th className="prodList-th">Product Name</th>
              <th className="prodList-th">Stocks</th>
              <th className="prodList-th">Buying Price</th>
              <th className="prodList-th">Selling Price</th>
              <th className="prodList-th">Category</th>
              <th className="prodList-th">Date Created</th>
              <th className="prodList-th">Updated At</th>
              <th className="prodList-th">Image</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length === 0 ? (
              <tr>
                <td colSpan="6" className="no-products">No products match your search.</td>
              </tr>
            ) : (
              filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td className="prodList-td">{product.name}</td>
                  <td className="prodList-td">{product.stocks}</td>
                  <td className="prodList-td">{formatPrice(product.buyingPrice)}</td>
                  <td className="prodList-td">{formatPrice(product.sellingPrice)}</td>
                  <td className="prodList-td">{product.category}</td>
                  <td className="prodList-td">{new Date(product.createdAt).toLocaleDateString()}</td>
                  <td className="prodList-td">{new Date(product.updatedAt).toLocaleDateString()}</td>
                  <td className="prodList-td"><img src={product.url} alt="Product" width="50" height="50" /></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {showScroll && (
        <button className="prodList-scroll-to-top" onClick={scrollToTop}>
          <ion-icon name="chevron-up-circle-outline"></ion-icon>Back to Top
        </button>
      )}
    </div>
  );
};

export default ProductsList;
