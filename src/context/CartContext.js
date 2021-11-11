import React, { useState } from "react";

export const CartContext = React.createContext([]);

export default function CartContextProvider({ children }) {
  const [cartData, setCartData] = useState([]);

  const addItem = (item, qty) => {
    if (!isInCart(item.id)) {
      const cartList = [...cartData, { ...item, quantity: qty }];
      setCartData(cartList);
      console.log(cartData);
    } else {
      alert("el articulo ya esta en el carrito");
    }
  };

  const getCartData = () => console.log(cartData);

  const removeItem = (itemId) => {
    setCartData(cartData.filter((items) => items.id !== itemId));
    console.log(cartData);
  };

  const clear = () => {
    setCartData([]);
    console.log(cartData);
  };

  const isInCart = (id) => cartData.find((item) => item.id === id);

  return (
    <CartContext.Provider
      value={{ cartData, addItem, removeItem, clear, isInCart, getCartData }}
    >
      {children}
    </CartContext.Provider>
  );
}
