import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import ItemList from "../ItemList/ItemList";
import { getFirestore } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

function ItemListContainer() {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const gettingItems = (q) =>
      getDocs(q).then((snap) => {
        setProductos(snap.docs.map((item) => item.data()));
      });

    if (id) {
      const q = query(collection(db, "item"), where("category", "==", id));
      gettingItems(q);
    } else {
      const q = query(collection(db, "item"));
      gettingItems(q);
    }

  }, [id]);

  //  const getItems = (items /*Funcion que crea una promesa*/) =>
  //    new Promise((resolve, reject) => {
  //      setTimeout(() => {
  //        if (items) {
  //          resolve(items);
  //        } else {
  //          reject("Hubo un error al acceder a los productos.");
  //        }
  //      }, 2000);
  //    });
  //  useEffect(() => {
  //    getItems(Products)
  //      .then((res) => {id?
  //        setProductos(res.filter((product) => product.category === id)): setProductos(Products); //Filtra los productos cuyo id coincida con el parametro de la url (establecido en NavBar)
  //      }) //Si se resuelve, guarda el array como 'productos'
  //      .catch((err) => console.log(err));
  //  }, [id]);
  //
  return (
    <section>
      <ItemList items={productos} />
    </section>
  );
}

export default ItemListContainer;
