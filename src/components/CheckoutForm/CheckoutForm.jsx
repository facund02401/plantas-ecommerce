import React from "react";
import { useContext, useState } from "react/cjs/react.development";
import { CartContext } from "../../context/CartContext";

export default function CheckoutForm() {
  const { cartData } = useContext(CartContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const phoneHandler = (event) => {
    setPhone(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = {
      buyer: {
        name: name,
        phone: phone,
        email: email,
      },
      item: { cartData },
    };
    console.log(formData);
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input type="text" onChange={nameHandler} />
      </div>
      <div>
        <label htmlFor="phone">Telefono:</label>
        <input type="text" onChange={phoneHandler} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" onChange={emailHandler} />
      </div>
      <button type="submit" onSubmit={submitHandler}>
        Finalizar compra
      </button>
    </form>
  );
}
