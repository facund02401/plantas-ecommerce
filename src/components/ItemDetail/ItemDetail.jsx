import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "../../styles/ItemDetail.scss";
import FinishShopping from "../FinishShopping/FinishShopping";
import ItemCounter from "../ItemCount/ItemCount";

export default function ItemDetail(item) {
  const [cartQty, setCartQty] = useState(0);
  const { addItem, isInCart} = useContext(CartContext);
  const itemInUse = item.item[0];

  const saveQty = (counterQty) => {
    setCartQty(counterQty);
    addItem(itemInUse, counterQty);
  };

  return (
    <div className="item-detail__card">
      <img src={itemInUse.url} alt="" className="item-detail__image" />
      <span className="item-detail__name">{itemInUse.name}</span>
      <span className="item-detail__price"> ${itemInUse.price}</span>
      <span className="item-detail__stock">Stock: {itemInUse.stock}</span>
      <p className="item-detail__description">
        <b>Descripcion: </b> {itemInUse.description}
      </p>
      {isInCart(itemInUse.id) ? (
        <FinishShopping />
      ) : (
        <ItemCounter stock={itemInUse.stock} initial={1} onAdd={saveQty} />
      )}
    </div>
  );
}
