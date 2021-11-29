import React, { createContext } from "react";
import { useState } from "react/cjs/react.development";

const CartContext = createContext([]);

function CartContextProvider({ children }) {
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (item, qty) => {
    if (!isInCart(item.id)) {
      const cartList = [
        ...cartData,
        { name: item.name, price: item.price, id: item.id, quantity: qty },
      ];
      setCartData(cartList);
      setTotal(total + item.price * qty);
      console.log("Agregado!");
    }
  };

  const getCartData = () => {
    console.log(cartData);
  };

  const removeItem = (itemId) => {
    setCartData(cartData.filter((items) => items.id !== itemId));
    const removeTotal = cartData.filter((item) => item.id === itemId);
    setTotal(total - removeTotal[0]["price"]);
  };

  const clear = () => {
    setCartData([]);
    setTotal(0);
  };

  const isInCart = (id) => cartData.find((item) => item.id === id);

  const checkedOut = () => {
    setCartData([]);
    setTotal(0);
  };

  return (
    <CartContext.Provider
      value={{
        cartData,
        addItem,
        removeItem,
        clear,
        isInCart,
        getCartData,
        total,
        checkedOut,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };
