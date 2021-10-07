import React from "react";
import '../../styles/App.scss';

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
        <a href="">
          <i className="fas fa-shopping-cart fa-2x carrito"></i>
        </a>
        <i className="fas fa-bars fa-2x menuBurger"></i>
      </div>
    </nav>
  );
}
export default NavBar;
