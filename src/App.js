import logo from './zelda-logo.png';
import './App.css';
import './index.css';

const initialItems = [{ id: "link", image: "media/link.png" }, { id: "silent-princess", image: "media/silent-princess.png" },
{ id: "bokoblin", image: "media/bokoblin.png" }, { id: "sacred-ground", image: "media/sacred-ground-ruins.png" },
{ id: "honeyed-apple", image: "media/honeyed-apple.png" }, { id: "master-sword", image: "media/master-sword.png" }];


function ItemList(props) {
  return (
    <div>
      {props.items.map((item) => (
        <Item id={item.id} image={item.image} />
      ))}
    </div>
  )
}
function Item(props) {

  return (
    <div id={props.id}>
      <img src={props.image}></img>
      <p class="description">This is the description.</p>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ItemList items={initialItems} />
    </div>

  );
}

export default App;
