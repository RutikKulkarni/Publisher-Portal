import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (content) => {
        const existingItem = cart.find(item => item.contentId === content._id);
        if (existingItem) {
            setCart(cart.map(item =>
                item.contentId === content._id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { contentId: content._id, title: content.title, price: content.price, quantity: 1 }]);
        }
        setTotalPrice(totalPrice + content.price);
    };

    return (
        <CartContext.Provider value={{ cart, totalPrice, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
