import './App.css';
import { useState } from 'react';
import AddItem from './components/AddItem';
import DisplayList from './components/DisplayList';

function App() {
  const [listContainer, setListContainer] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');

  const selectItem = () => {
    const random = Math.floor(Math.random() * listContainer.length);
    setSelectedItem( listContainer.length > 0 ? listContainer[random] : '' );
  }

  const onRemove = (itemId) => {
    const updatedListContainer = listContainer.filter( (item, id)=> id !== itemId);
    setListContainer(updatedListContainer);
  }

  const renderMain = () => {
    if (listContainer.length > 0 && !selectedItem) {
      return <DisplayList
        listContainer={listContainer}
        onRemove={onRemove}
      />;
    } else if (selectedItem) {
      return (
        <>
          <h4>The Winner Is</h4>
          <p>{selectedItem}</p>
        </>
      );
    } else {
      return <h4>Add Items To Your List!</h4>;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Decidr</h2>
      </header>
      <main>
      { renderMain() }
      </main>
      <footer>
        <AddItem
          setListContainer={setListContainer} 
          setSelectedItem={setSelectedItem}
          listContainer={listContainer}
        />
        <button style={{ alignSelf: "center" }} onClick={() => selectItem()}>Decide!</button>
      </footer>
    </div>
  );
}

export default App;
