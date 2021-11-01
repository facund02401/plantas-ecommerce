import React from "react";
import "../../styles/ItemDetail.scss";
import ItemCounter from "../ItemCount/ItemCount";

export default function ItemDetail(item) {
  return (
    <div className="item-detail__card">
      <img src={item.item.url} alt="" className="item-detail__image" />
      <span className="item-detail__name">{item.item.name}</span>
      <span className="item-detail__price"> ${item.item.price}</span>
      <span className='item-detail__stock'>Stock: {item.item.stock}</span>
      <p className="item-detail__description"> <b>Descripcion: </b> {item.item.description}</p>
      <ItemCounter stock={item.item.stock} initial={1}/>
    </div>
  );
}
