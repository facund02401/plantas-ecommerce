import React from "react";
import { useContext, useState } from "react/cjs/react.development";
import { CartContext } from "../../context/CartContext";
import { getFirestore } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import "../../styles/CheckoutForm.scss";

export default function CheckoutForm() {
  const { cartData, checkedOut, total } = useContext(CartContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({});
  const [purchaseId, setPurchaseId] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const phoneHandler = (event) => {
    setPhone(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
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
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, auxFormData).then(({ id }) => setPurchaseId(id));

    setName("");
    setPhone("");
    setEmail("");
    setTimeout(() => {
      checkedOut();
    }, 10000);
  };

  return (
    <>
      <form className="checkout-form">
        <div className="checkout-form__field-div">
          <label htmlFor="name">Nombre:</label>
          <input type="text" onChange={nameHandler} value={name} />
        </div>
        <div className="checkout-form__field-div">
          <label htmlFor="phone">Telefono:</label>
          <input type="text" onChange={phoneHandler} value={phone} />
        </div>
        <div className="checkout-form__field-div">
          <label htmlFor="email">Email:</label>
          <input type="email" onChange={emailHandler} value={email} />
        </div>
        <button
          onClick={formSubmitHandler}
          disabled={!(name && phone && email)}
        >
          Finalizar compra
        </button>
      </form>
      {purchaseId && (
        <div className="purchase-id">
          <p>
            Compra exitosa! El codigo de identificacion de tu compra es:{" "}
            <span>{purchaseId}</span>
          </p>
          <button onClick={checkedOut}>Hasta luego!</button>
        </div>
      )}
    </>
  );
}
