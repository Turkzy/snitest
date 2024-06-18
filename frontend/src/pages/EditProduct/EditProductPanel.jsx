import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router';
import './EditProductPanel.css';

const EditProduct = () => {
    const [name, setName] = useState("");
    const [stocks, setStocks] = useState(0);
    const [buyingPrice, setBuyingPrice] = useState(0);
    const [sellingPrice, setSellingPrice] = useState(0);
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [preview, setPreview] = useState(null);
    const [category, setCategory] = useState('Default');
    const [categories, setCategories] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/categories');
                setCategories(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();

        const getProductById = async () => {
            const response = await axios.get(`http://localhost:5000/products/${id}`);
            setName(response.data.name);
            setStocks(response.data.stocks);
            setBuyingPrice(response.data.buyingPrice);
            setSellingPrice(response.data.sellingPrice);
            setImage(response.data.image);
            setUrl(response.data.url);
            setPreview(response.data.url);
            setCategory(response.data.category);
        };

        getProductById();

        return () => {};
    }, [id]);

    const loadImage = (e) => {
        const image = e.target.files[0];
        if(image){
            setImage(image);
            setPreview(URL.createObjectURL(image));
        }
    };

    const updateProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", image);
        formData.append("name", name);
        formData.append("stocks", stocks);
        formData.append("buyingPrice", buyingPrice);
        formData.append("sellingPrice", sellingPrice);
        formData.append("category", category);
        formData.append("url", url);

        try {
            await axios.patch(`http://localhost:5000/products/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            setSuccessMessage('Product Updated Successfully!');
            setTimeout(() => {
                setSuccessMessage('');
                navigate("/Dashboard/EditPanel");
            }, 1500);
        } catch (error) {
            console.log(error);
        }
    };

    const handleCancel = () => {
        navigate("/Dashboard/EditPanel");
    };

    return (
        <div className='edit-product-container'>
            <h1>Edit Product</h1>
            {successMessage && <div className="edit-success-message">{successMessage}</div>}
            <div className='edit-product-form-container'>
                <form onSubmit={updateProduct}>
                    <div className='editProductPanel-field'>
                        <label className='edit-label'>Product Name *</label>
                        <div className='edit-control'>
                            <input
                                type='text'
                                className='edit-input'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Enter Name'
                                required
                            />
                        </div>
                    </div>
                    <div className='editProductPanel-field'>
                        <label className='edit-label'>Stocks *</label>
                        <div className='edit-control'>
                            <input
                                type='number'
                                className='edit-input'
                                value={stocks}
                                onChange={(e) => setStocks(e.target.value)}
                                placeholder='Enter Stocks'
                                required
                            />
                        </div>
                    </div>
                    <div className='editProductPanel-field'>
                        <label className='edit-label'>Buying Price *</label>
                        <div className='edit-control'>
                            <input
                                type='number'
                                className='edit-input'
                                value={buyingPrice}
                                onChange={(e) => setBuyingPrice(e.target.value)}
                                placeholder='Enter Buying Price'
                                required
                            />
                        </div>
                    </div>
                    <div className='editProductPanel-field'>
                        <label className='edit-label'>Selling Price *</label>
                        <div className='edit-control'>
                            <input
                                type='number'
                                className='edit-input'
                                value={sellingPrice}
                                onChange={(e) => setSellingPrice(e.target.value)}
                                placeholder='Enter Selling Price'
                                required
                            />
                        </div>
                    </div>
                    <div className='editProductPanel-field'>
                        <label className='edit-label'>Category *</label>
                        <div className='edit-control'>
                        <select
                            className='edit-input'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                            >
                            <option value='Default' disabled>Select Category *</option>
                            {categories
                                .sort((a, b) => a.category.localeCompare(b.category)) // Sort the categories alphabetically
                                .map(category => (
                                <option key={category.id} value={category.category}>{category.category}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='editProductPanel-field'>
                        <label className='edit-label'>Image *</label>
                        <div className='edit-control'>
                            <input
                                type='file'
                                className='edit-input'
                                accept='.jpg, .jpeg, .png'
                                onChange={loadImage}
                            />
                        </div>
                    </div>

                    {preview && (
                        <div className='editProductPanel-image-preview'>
                            <img src={preview} alt='Product Preview' />
                        </div>
                    )}

                    <div className='editProductPanel-field-button-container'>
                        <button className='editProductPanel-button-success' type='submit'><ion-icon name="create-outline"></ion-icon>Update</button>
                        <button className='editProductPanel-button-cancel' type='button' onClick={handleCancel}><ion-icon name="close-outline"></ion-icon>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditProduct;