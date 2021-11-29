import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function ItemDetailContainer() {
  const [selectedItem, setSelectedItem] = useState("");
  const { id } = useParams();
  const itemId = parseInt(id);

  useEffect(() => {
    const db = getFirestore();
    const q = query(collection(db, "item"), where("id", "==", itemId));
    getDocs(q).then((snap) =>
      setSelectedItem(snap.docs.map((doc) => doc.data()))
    );
  }, [itemId]);

  return (
    <div>{selectedItem ? <ItemDetail item={selectedItem} /> : "Cargando"}</div>
  );
}
