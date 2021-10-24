import React, { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer({ item }) {
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

  getItem(item)
    .then((res) => setSelectedItem(res))
    .catch((err) => console.log(err));
  return <div>
      <ItemDetail item={selectedItem} />
  </div>;
}
