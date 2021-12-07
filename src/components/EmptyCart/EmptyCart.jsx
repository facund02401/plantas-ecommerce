import React from "react";
import { Link } from "react-router-dom";
import "../../styles/EmptyCart.scss";

export default function EmptyCart() {
  return (
    <div className="empty-cart">
      <h1>EL CARRITO ESTÁ VACÍO</h1>
      <button>
        <Link to="/">Ir al home y empezar a comprar</Link>
      </button>
    </div>
  );
}
