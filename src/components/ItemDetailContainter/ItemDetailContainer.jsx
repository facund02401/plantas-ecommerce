import React, { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Products from '../productos.json';

export default function ItemDetailContainer() {
  const [selectedItem, setSelectedItem] = useState([]);

  const getItem = (item) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject("No se puede acceder al detalle del producto.");
        }
      }, 2000);
    });

  getItem(Products)
    .then((res) => setSelectedItem(res[0]))
    .catch((err) => console.log(err));
  return <div>
      <ItemDetail item={selectedItem} />
  </div>;
}
