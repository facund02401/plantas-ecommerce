import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "../../styles/ItemDetail.scss";
import FinishShopping from "../FinishShopping/FinishShopping";
import ItemCounter from "../ItemCount/ItemCount";

export default function ItemDetail(item) {
  const [cartQty, setCartQty] = useState(0);
  const { addItem, isInCart, cartData, total } = useContext(CartContext);
  const itemInUse = item.item[0];

  const saveQty = (counterQty) => {
    setCartQty(counterQty);
    //setTotal(+item.item.price * item.item.quantity)
    addItem(item.item, counterQty);
  };
  console.log(cartData);
  console.log(total);

  return (
    <div className="item-detail__card">
      <img src={itemInUse.url} alt="" className="item-detail__image" />
      <span className="item-detail__name">{itemInUse.name}</span>
      <span className="item-detail__price"> ${itemInUse.price}</span>
      <span className="item-detail__stock">Stock: {itemInUse.stock}</span>
      <p className="item-detail__description">
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
