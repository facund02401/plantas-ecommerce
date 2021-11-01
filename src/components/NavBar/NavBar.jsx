import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../../styles/App.scss';
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav>
      <Link to={'/'}>
      <div className="logo"></div>
      </Link>
      <form action="">
        <input type="text" value="" placeholder="Buscar en la página" />
      </form>
      <ul>
        <li>
          <NavLink to={'/category/plantas'}>Plantas</NavLink>
        </li>
        <li>
          <NavLink to={'/category/sustratos'}>Sustratos</NavLink>
        </li>
        <li>
          <NavLink to={'/category/macetas'}>Macetas</NavLink>
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
