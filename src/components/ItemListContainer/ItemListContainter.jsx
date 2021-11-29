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

  
  return (
    <section>
      <ItemList items={productos} />
    </section>
  );
}

export default ItemListContainer;
