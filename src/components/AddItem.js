import { useState } from 'react';

export default function AddItem({ setListContainer, setSelectedItem }) {
  const [newItem, setNewItem] = useState('');

  const formSubmit = (event) => {
    event.preventDefault();
    setListContainer(listContainer => [ ...listContainer, newItem ]);
    setNewItem('');
  }
  return (
    <form className="form-add-item">
      <input
        type="text"
        placeholder="Type here!"
        value={newItem}
        onChange={event => {
          setNewItem(event.target.value)
          setSelectedItem('');
        }}
      />
      <button
        type="submit"
        onClick={formSubmit}
      >
        Add an Item
      </button>
    </form>
  )
}