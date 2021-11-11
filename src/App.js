import "./styles/App.scss";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainter";
import ItemDetailContainer from "./components/ItemDetailContainter/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useContext, useState } from "react";
import CartContextProvider from "./context/CartContext";

function App() {
  const [cart, setCart] = useState([]);
  const CartContext = useContext(CartContextProvider);
  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route path="/category/:id">
              <ItemListContainer />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
          </Switch>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
