import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "../../styles/ItemDetail.scss";
import FinishShopping from "../FinishShopping/FinishShopping";
import ItemCounter from "../ItemCount/ItemCount";

export default function ItemDetail(item) {
  const [cartQty, setCartQty] = useState(0);
  const { addItem, isInCart, cartData} = useContext(CartContext);

  const saveQty = (counterQty) => {
    setCartQty(counterQty);
    addItem(item.item, counterQty);
  };

//console.log(cartData)
  return (
    <div className="item-detail__card">
      <img src={item.item.url} alt="" className="item-detail__image" />
      <span className="item-detail__name">{item.item.name}</span>
      <span className="item-detail__price"> ${item.item.price}</span>
      <span className="item-detail__stock">Stock: {item.item.stock}</span>
      <p className="item-detail__description">
        {" "}
        <b>Descripcion: </b> {item.item.description}
      </p>
      {isInCart(item.item.id) ? (
        <FinishShopping />
      ) : (
        <ItemCounter stock={item.item.stock} initial={1} onAdd={saveQty} />
      )}
    </div>
  );
}
