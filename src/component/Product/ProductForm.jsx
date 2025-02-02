import React, { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            title,
            price,
            image
        };

        onAddProduct(payload);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    id="uploadImage"
                    accept="image/*"
                    onChange={handleImageChange}
                />
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ProductForm;
