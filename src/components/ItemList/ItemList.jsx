import React from "react";
import { useState } from "react";
import Item from "../Item/Item";
import "../../styles/ItemList.scss";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  /*Recibe un array de objetos*/
  const [productos, setProductos] = useState([]);

  const getItems = (items /*Funcion que crea una promesa*/) =>
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
    .then((res) => setProductos(res)) //Si se resuelve, guarda el array como 'productos'
    .catch((err) => console.log(err));

  return (
    <div className="item-list">
      {productos.length //chequea que el length del array no sea falsy
        ? productos.map(
            (
              productos // mapea los productos y por cada uno crea un item
            ) => <Link to={`/item/${productos.id}`}> <Item item={productos} key={productos.id} /> </Link>
          ) //en caso de que productos devuelva falsy, muestra "Cargando productos"
        : "Cargando productos..."}
    </div>
  );
};
export default ItemList;
