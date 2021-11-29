import React from "react";
import { useContext, useState } from "react/cjs/react.development";
import { CartContext } from "../../context/CartContext";
import { getFirestore } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function CheckoutForm() {
  const { cartData, checkedOut, total } = useContext(CartContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({});

  const nameHandler = (event) => {
    setName(event.target.value);
    console.log(name);
  };
  const phoneHandler = (event) => {
    setPhone(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("submiteado");
    const auxFormData = {
      buyer: {
        name: name,
        phone: phone,
        email: email,
      },
      item: cartData,
      total: total,
    };
    setFormData(auxFormData);
    const db = getFirestore()
const ordersCollection = collection(db, 'orders' )
addDoc(ordersCollection, auxFormData).then(({id})=>console.log(id))
    console.log(auxFormData);
    checkedOut();
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input type="text" onChange={nameHandler} value={name} />
      </div>
      <div>
        <label htmlFor="phone">Telefono:</label>
        <input type="text" onChange={phoneHandler} value={phone} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" onChange={emailHandler} value={email} />
      </div>
      <button onClick={formSubmitHandler}>Finalizar compra</button>
    </form>
  );
}
