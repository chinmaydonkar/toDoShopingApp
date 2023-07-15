import React, { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
