import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Products from "../productos.json";

export default function ItemDetailContainer() {
  const [selectedItem, setSelectedItem] = useState("");

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

  useEffect(() => {
    getItem(Products)
      .then((res) => {
        setSelectedItem(res[1]);
      })
      .catch((err) => console.log(err));
  }, [selectedItem]);

  return (
    <div>{selectedItem ? <ItemDetail item={selectedItem} /> : "Cargando"}</div>
  );
}
