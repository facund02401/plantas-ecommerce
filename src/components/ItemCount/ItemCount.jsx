import React, { useState } from "react";
import "../../styles/ItemCount.scss";

export default function ItemCounter({ onAdd, stock, initial }) {
  let [counter, setCounter] = useState(initial);

  const countElements = (adding) => {
    if (adding) {
      setCounter(counter + 1);
      if (counter >= stock) {
        setCounter(stock);
        alert("No hay mas elementos en stock");
      }
    } else {
      setCounter(counter - 1);
      if (counter <= initial) {
        setCounter(initial);
        alert(`No se puede agregar menos ${initial} elemento/s al carrito`);
      }
    }
  };

  return (
    <div className="itemCards">
      <div className="img"></div>
      <div className="counter">
        <button
          onClick={() => {
            countElements(false);
          }}
        >
          -
        </button>
        <p>{counter}</p>
        <button
          onClick={() => {
            countElements(true);
          }}
        >
          +
        </button>
      </div>
      <div>
        <button className="addCart" onClick={onAdd}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}