import "./styles/App.scss";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainter";
import ItemCount from "./components/ItemCount/ItemCount";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
            <ItemCount initial={1} stock={5} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
