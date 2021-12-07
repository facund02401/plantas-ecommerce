import React, { useState } from "react";
import "../../styles/ItemCount.scss";
import Alert from "../Alert/Alert";

export default function ItemCounter({ stock, initial, onAdd }) {
  let [counter, setCounter] = useState(initial);
  const [alert, setAlert] = useState('')

  const countElements = (adding) => {
    if (adding) {
      setCounter(counter + 1);
      if (counter >= stock) {
        setCounter(stock);
        setAlert(`No hay mas de ${stock} elementos en stock`);
      }
      else{
        setAlert('')
      }
    } else {
      setCounter(counter - 1);
      if (counter <= initial) {
        setCounter(initial);
        setAlert(`No se puede agregar menos ${initial} elemento/s al carrito`);
      }
      else{
        setAlert('')
      }
    }
  };

  return (
    <>
    {alert && <Alert prop={alert}/>}
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
        <button className="addCart" onClick={() => onAdd(counter)}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
}
