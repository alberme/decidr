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
          <h2>Decidr</h2>
        </header>
        <div className="list-display-container" >
          {
            listContainer.map((entry, i) => <p key={i}>{entry}</p>)
          }
        </div>
        <AddItem setListContainer={setListContainer} />
        <button style={{ alignSelf: "center" }} onClick={() => selectItem()}>Select an Item</button>
    </div>
  );
}

export default App;
