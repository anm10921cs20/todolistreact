import React from 'react'
import { FaTrash } from "react-icons/fa";

const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <li key={item.id}>

                    <input
                        id='itemsCheck'
                        type="Checkbox"
                        checked={item.checked}
                        onChange={() => handleCheck(item.id)}
                    />
                    <label
                        style={(item.checked) ? { textDecoration: 'line-through' } : null}
                        onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
                    <FaTrash
                        className='TrashDelete'
                        role='button'
                        tabIndex="0"
                        onClick={() => handleDelete(item.id)}
                        aria-label={`Delete ${item.item}`}
                    />
                </li>
  )
}

export default LineItem