import React from "react";
import { useContext } from "react/cjs/react.development";
import { CartContext } from "../../context/CartContext";
import EmptyCart from "../EmptyCart/EmptyCart";
import "../../styles/Cart.scss";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Cart() {
  const { cartData, clear, removeItem, total } = useContext(CartContext);
  console.log(total);

  if (cartData.length) {
    return (
      <div className='cart'>
        {cartData.map((item) => (
          <div className="cart-element__card">
            <li className='cart-element__item'>
              {item.name} ${item.price} (x{item.quantity})
            </li>
            <button className='cart-element__remove' onClick={() => removeItem(item.id)}><span>X</span></button>
          </div>
        ))}
        <li>Total: ${total}</li>
        <button onClick={() => clear()}>Vaciar Carrito</button>
        <CheckoutForm />
      </div>
    );
  } else {
    return <EmptyCart />;
  }
}
