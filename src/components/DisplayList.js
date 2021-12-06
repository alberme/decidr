export default function DisplayList ({ listContainer }) {
  return (
    <div className="list-display-container" >
    {
      listContainer.map((entry, i, entries) => <p key={i}>{entries.at(-i - 1)}</p>)
    }
  </div>
  )
}