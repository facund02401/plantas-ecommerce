import React from "react";
import { useState } from "react";
import Item from "../Item/Item";
import '../../styles/ItemList.scss'

const ItemList = ({ items }) => {
  const [productos, setProductos] = useState([]);

  const getItems = (items) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (items) {
          resolve(items);
        } else {
          reject("Hubo un error al acceder a los productos.");
        }
      }, 2000);
    });

  getItems(items)
    .then((res) => setProductos(res))
    .catch((err) => console.log(err));

  return (
    <div className='item-list'>
      {productos.length
        ? productos.map((productos) => (
            <Item item={productos} key={productos.id} />
          ))
        : "Cargando productos..."}
    </div>
  );
};
export default ItemList;
