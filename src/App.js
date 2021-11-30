import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddItem from './components/AddItem';

function App() {
  const [listContainer, setListContainer] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');

  const selectItem = () => {
    const random = Math.floor(Math.random() * listContainer.length);
    setSelectedItem( listContainer[random] );
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <AddItem setListContainer={setListContainer} />
        <button style={{ alignSelf: "center" }} onClick={() => selectItem()}>Select an Item</button>
    </div>
  );
}

export default App;
