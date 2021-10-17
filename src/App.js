import './styles/App.scss';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainter';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemCount initial={1} stock={5}/>
    </div>
  );
}

export default App;
