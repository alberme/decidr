import { useState } from 'react';
import { MdClose } from "react-icons/md";

export default function Item ({ children, id, onRemove }) {
  const [isHovering, setIsHovering] = useState();

  return (
    <div className="list-item-container">
      <p
        className="list-item-text"
        onMouseEnter={() => console.log('entered')}
        onMouseLeave={() => console.log('leave')}
        >
          {children}
      </p>
      <MdClose onClick={() => onRemove(id)}/>
    </div>

  )
}