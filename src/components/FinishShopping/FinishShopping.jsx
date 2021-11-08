import React from "react";
import { Link } from "react-router-dom";
import '../../styles/FinishShopping.scss';

export default function FinishShopping() {
  return (
    <Link to="/cart">
      <button className='finish-shopping'>Terminar mi compra</button>
    </Link>
  );
}
