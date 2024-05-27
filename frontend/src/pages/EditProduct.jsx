import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router';

const EditProduct = () => {
    const [name, setName] = useState("");
    const [stocks, setStocks] = useState(0);
    const [buyingPrice, setBuyingPrice] = useState(0);
    const [sellingPrice, setSellingPrice] = useState(0);
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [preview, setPreview] = useState(null);
    const [category, setCategory] = useState('Default'); // Default category value
    const [categories, setCategories] = useState([]); // State to store categories
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/categories');
                setCategories(response.data); // Set categories state with fetched data
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
            setCategory(response.data.category); // Set the category value from the response
        };

        getProductById();

        return () => {
        };
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
        formData.append("category", category); // Append the category to formData
        formData.append("url", url);

        try {
            await axios.patch(`http://localhost:5000/products/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            navigate("/Dashboard/EditPanel");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='add-product-container'>
            <h1>Edit Product</h1>
            <div className='add-product-form'>
                <form onSubmit={updateProduct}>
                    <div className='field'>
                        <label className='label'>Product Name</label>
                        <div className='control'>
                            <input
                                type='text'
                                className='input'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Enter Name'
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
                                value={stocks}
                                onChange={(e) => setStocks(e.target.value)}
                                placeholder='Enter Stocks'
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
                                value={buyingPrice}
                                onChange={(e) => setBuyingPrice(e.target.value)}
                                placeholder='Enter Buying Price'
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
                                value={sellingPrice}
                                onChange={(e) => setSellingPrice(e.target.value)}
                                placeholder='Enter Selling Price'
                                required
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Category</label>
                        <div className='control'>
                            <select
                                className='input'
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
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
                                onChange={loadImage}
                            />
                        </div>
                    </div>

                    {preview && (
                        <div className='image-preview'>
                            <img src={preview} alt='Product Preview' />
                        </div>
                    )}

                    <button className='button-success' type='submit'>Update</button>
                </form>
            </div>
        </div>
    );
}

export default EditProduct;
