import React, { createContext } from "react";
import { useState } from "react/cjs/react.development";

const CartContext = createContext([]);

function CartContextProvider({ children }) {
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState(0);

  /* const calculateTotal = (total) => {
    let totalArray = [];
    console.log(cartData)
    if (cartData) {
      cartData.map((item) =>
        totalArray.push(parseInt(item.price) * parseInt(item.quantity))
      );
      console.log(totalArray)
      return setTotal(
        totalArray.reduce((prevValue, nextValue) => prevValue + nextValue),
        0
      );
    }
  }; */

  const addItem = (item, qty) => {
    if (!isInCart(item.id)) {
      const cartList = [...cartData, { ...item, quantity: qty }];
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
    setTotal(total.filter(item => )) // FALTA SACAR MONTO DEL TOTAL
  };

  const clear = () => {
    setCartData([]);
    setTotal(0)
  };

  const isInCart = (id) => cartData.find((item) => item.id === id);

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };
