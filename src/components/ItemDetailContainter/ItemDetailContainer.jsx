import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import Products from "../productos.json";

export default function ItemDetailContainer() {
  const [selectedItem, setSelectedItem] = useState("");
  const {id} = useParams()
  const itemId = parseInt(id)
  
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
        const filtrado = Products.find(product => product.id === itemId);
        setSelectedItem(filtrado);
      })
      .catch((err) => console.log(err));
  }, [itemId]);

  return (
    <div>{selectedItem ? <ItemDetail item={selectedItem} /> : "Cargando"}</div>
  );
}
