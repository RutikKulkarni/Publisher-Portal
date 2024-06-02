import React, { useState } from 'react';
import axios from 'axios';

function ContentForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newContent = { title, description, price };
        try {
            await axios.post('http://localhost:5000/api/content', newContent);
            alert('Content added successfully');
        } catch (err) {
            alert('Error adding content');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Content</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />
            <button type="submit">Add Content</button>
        </form>
    );
}

export default ContentForm;
