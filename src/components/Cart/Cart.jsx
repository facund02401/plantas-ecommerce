import React from "react";
import { useContext } from "react/cjs/react.development";
import { CartContext } from "../../context/CartContext";

export default function Cart() {
  const { cartData, clear, removeItem, total } = useContext(CartContext);
  console.log(total);

  return (
    <div>
      <button onClick={() => clear()}>Vaciar Carrito</button>
      <ul>
        {cartData ? cartData.map(item => <><li> {item.name} ${item.price} Cantidad {item.quantity} </li><button onClick={() =>removeItem(item.id)}>X</button></>) : 'NADA'}
        <li>Total: ${total}</li>
        </ul>
        
    
    </div>
  );
}
