import { useState } from 'react';

export default function AddItem({ setListContainer, setSelectedItem, listContainer }) {
  const [newItem, setNewItem] = useState('');
  const [error, setError] = useState('');

  const formSubmit = (event) => {
    event.preventDefault();
    const itemNotBlank = newItem.trim().length > 0
    const hasNoDuplicates = listContainer.every(item => item.toLowerCase() !== newItem.toLowerCase());

    if (itemNotBlank && hasNoDuplicates) {
      setListContainer(listContainer => [ ...listContainer, newItem.trim() ]);
      setNewItem('');
    } else if (!itemNotBlank) {
      setError('Please enter an item');    
    } else if (!hasNoDuplicates) {
      setError('That item is a duplicate');
    }
  }
  return (
    <form className="form-add-item">
      <div className="form-input-container">
        <input
          type="text"
          placeholder="Type here!"
          value={newItem}
          onChange={event => {
            setNewItem(event.target.value)
            setSelectedItem('');
            setError('');
          }}
        />
        { error && <p className="error-text">{error}</p> }
      </div>
      <button
        type="submit"
        onClick={formSubmit}
      >
        Add an Item
      </button>
    </form>
  )
}