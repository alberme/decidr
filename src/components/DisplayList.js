import Item from './Item';

export default function DisplayList ({ listContainer, onRemove }) {
  return (
    <div className="list-display-container" >
    {
      listContainer.length > 0
       ? listContainer.map((entry, i, entries) => 
          <Item
            key={i}
            id={i}
            onRemove={onRemove}
          >
            {entries.at(-i - 1)}
          </Item>
        )
       : (
        <h4>Add Items To Your List!</h4>
      )
    }
  </div>
  )
}