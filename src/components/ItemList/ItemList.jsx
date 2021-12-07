import React from "react";
import Item from "../Item/Item";
import "../../styles/ItemList.scss";
import { Link } from "react-router-dom";

const ItemList = ({items}) => {
  /*Recibe un array de objetos filtrados en ItemListContainer*/
  return (
    <div className="item-list">
      {items.length //chequea que el length del array no sea falsy
        ? items.map(
            (
              productos // mapea los productos y por cada uno crea un item
            ) => <Link to={`/item/${productos.id}`} style={{textDecoration:'none'}} key={productos.id}> <Item item={productos} key={productos.id} /> </Link>
          ) //en caso de que productos devuelva falsy, muestra "Cargando productos"
        : "Cargando productos..."}
    </div>
  );
};
export default ItemList;
