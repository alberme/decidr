import { MdClose } from "react-icons/md";

export default function Item ({ children, id, onRemove }) {
  return (
    <div className="list-item-container">
      <p className="list-item-text">
          {children}
      </p>
      <MdClose onClick={() => onRemove(id)}/>
    </div>

  )
}