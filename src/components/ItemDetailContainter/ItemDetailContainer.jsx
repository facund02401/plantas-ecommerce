import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
//import Products from "../productos.json";
import { getFirestore } from "../../firebase";
import { collection, getDocs, docs, setDoc, query, where } from "firebase/firestore";

export default function ItemDetailContainer() {
  const [selectedItem, setSelectedItem] = useState("");
  const {id} = useParams()
  const itemId = parseInt(id)
  

useEffect(()=>{
  const db = getFirestore();

  const q = query(collection(db, "item"), where("id", "==", itemId));
  getDocs(q).then(snap => setSelectedItem(snap.docs.map(doc => doc.data())))


},[])


  /* const getItem = (item) =>
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
        const filtrado = res.find(product => product.id === itemId);
        setSelectedItem(filtrado);
      })
      .catch((err) => console.log(err));
  }, [itemId]); */

  return (
    <div>{selectedItem ? <ItemDetail item={selectedItem} /> : "Cargando"}</div>
  );
}
