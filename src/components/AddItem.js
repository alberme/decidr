import { useState } from 'react';

export default function AddItem({ setListContainer }) {
  const [newItem, setNewItem] = useState('');

  const formSubmit = (event) => {
    event.preventDefault();
    setListContainer(listContainer => [ ...listContainer, newItem ]);
    setNewItem('');
  }
  return (
    <form>
      <div style={{ display: "flex", justifyContent: "center", margin: "0.5em" }}>
        <input
          type="text"
          id="add-item"
          placeholder="Type here!"
          value={newItem}
          onChange={event => setNewItem(event.target.value)}
        />
        <button
          type="submit"
          onClick={formSubmit}
        >
          Add an Item
        </button>
      </div>
    </form>
  )
}