import React, { useState, useEffect } from 'react';
import logo from './zelda-logo.png';
import './App.css';
import './index.css';

const initialItems = [{ id: "link", image: "media/link.png", isVisible: true}, { id: "silent-princess", image: "media/silent-princess.png", isVisible: false},
{ id: "bokoblin", image: "media/bokoblin.png", isVisible: false }, { id: "sacred-ground", image: "media/sacred-ground-ruins.png", isVisible: false },
{ id: "honeyed-apple", image: "media/honeyed-apple.png", isVisible: false }, { id: "master-sword", image: "media/master-sword.png", isVisible: false }];



function App() {
  
  // useState - something that will change - function to change it
  const [items, setItems] = useState(initialItems);
  
  const itemClicked = (id) => {
    console.log("hello");
    console.log(id)
    //Create new array with all of the old items
    const newItems = [{ id: "link"}, { id: "silent-princess"},
    { id: "bokoblin"}, { id: "sacred-ground"},
    { id: "honeyed-apple"}, { id: "master-sword"}];
    //Look through array for item that was clicked and change it
    //Call setItems with the new array of new items
    // setItems([])
  }
  function ItemList(props) {
    return (
      <div>
        {props.items.map((item) => (
          <Item id={item.id} image={item.image} isVisible={item.isVisible} />
        ))}
      </div>
    )
  }
  
  function Item(props) {
  console.log(props);
    return (
      <div id={props.id} onClick={() => itemClicked(props.id)}>
        <img src={props.image}></img>
        <p style={{display:props.isVisible ? 'block' : 'none'}}>This is the description.</p>
      </div>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ItemList items={items} />
    </div>

  );
}

export default App;
