import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { CartContext } from "../../context/CartContext";
import "../../styles/CartWidget.scss";

function CartWidget() {
  const { cartData } = useContext(CartContext);

  let itemsNumber = 0;
  const cartItems = cartData.map((item) => (itemsNumber += item.quantity));
  return (
    <div className='cart-widget__container'>
      <Link to="/cart">
        <i className="fas fa-shopping-cart fa-2x carrito"></i>
      </Link>
      {itemsNumber > 0 &&
      <div className="cart-widget__items"><span>{itemsNumber}</span></div>}
    </div>
  );
}

export default CartWidget;
