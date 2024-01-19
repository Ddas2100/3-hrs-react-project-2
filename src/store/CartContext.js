import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const getCartSize = () => cart.reduce((total, item) => total + item.quantity, 0);
  const handleAddToCart = (product, size) => {
    const existingItem= cart.find(
      (item) => item.productName === product.productName && item.size === size
    );
    if(existingItem) {
      const updatedCart = cart.map((item) =>
        item === existingItem ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, size, quantity: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, getCartSize, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};
