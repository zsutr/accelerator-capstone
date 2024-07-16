import React, {createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export const useCart = () => {
    return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    return(
        <CartContext.Provider value={{ cartItems, addToCart}}>
            {children}
        </CartContext.Provider>

    );
};