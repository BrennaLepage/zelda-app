import logo from './zelda-logo.png';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div id="items">
    <div id="link">
      <img src="media/link.png"></img>
    </div>
    <div id="silent-princess">
      <img src="media/silent-princess.png"/>
    </div>
    <div id="bokoblin">
      <img src="media/bokoblin.png"/>
    </div>
    <div id="sacred-ground">
      <img src="media/sacred-ground-ruins.png"/>
    </div>
    <div id="honeyed-apple">
      <img src="media/honeyed-apple.png"/>
    </div>
    <div id="master-sword">
      <img src="media/master sword.png"/>
    </div>
  </div> 
    </div>
    
  );
}

export default App;
