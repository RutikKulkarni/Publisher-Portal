import React, { useContext, useState } from 'react';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

function Checkout() {
    const { cart, totalPrice } = useContext(CartContext);
    const [userDocument, setUserDocument] = useState('');

    const handleCheckout = async () => {
        const transaction = {
            items: cart,
            totalPrice,
            userDocument,
        };

        try {
            await axios.post('http://localhost:5000/api/transaction', transaction);
            alert('Transaction completed successfully');
        } catch (err) {
            alert('Error completing transaction');
        }
    };

    return (
        <div>
            <h2>Checkout</h2>
            <div>
                {cart.map(item => (
                    <div key={item.contentId}>
                        <h3>{item.title}</h3>
                        <p>{item.quantity} x ${item.price}</p>
                    </div>
                ))}
            </div>
            <h3>Total: ${totalPrice}</h3>
            <input
                type="text"
                placeholder="Document"
                value={userDocument}
                onChange={(e) => setUserDocument(e.target.value)}
                required
            />
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    );
}

export default Checkout;
