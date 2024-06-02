import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

function HomeScreen() {
    const [contents, setContents] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchContents = async () => {
            const response = await axios.get('http://localhost:5000/api/content');
            setContents(response.data);
        };
        fetchContents();
    }, []);

    return (
        <div>
            <h2>Content Offerings</h2>
            {contents.map(content => (
                <div key={content._id}>
                    <h3>{content.title}</h3>
                    <p>{content.description}</p>
                    <p>${content.price}</p>
                    <button onClick={() => addToCart(content)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}

export default HomeScreen;
