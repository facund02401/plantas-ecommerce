import React from "react";
import '../../styles/App.scss';
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav>
      <div className="logo"></div>
      <form action="">
        <input type="text" value="" placeholder="Buscar en la página" />
      </form>
      <ul>
        <li>
          <a href="">Plantas</a>
        </li>
        <li>
          <a href="">Sustratos</a>
        </li>
        <li>
          <a href="">Macetas</a>
        </li>
      </ul>
      <div className="iconos">
      <CartWidget />
        <i className="fas fa-bars fa-2x menuBurger"></i>
      </div>
    </nav>
  );
}
export default NavBar;
