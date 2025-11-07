import React from 'react'
import { FaPlus } from "react-icons/fa";


const AddInput = ({newItems, setNewItems, handleSubmit}) => {
  return (
    <form className='inputForm' onSubmit={handleSubmit}>
        <label htmlFor="add item" className='addLabel'>Add Item</label>
        <input type="text" 
            autoFocus
            placeholder='Add Your Task Here...'
            id='addInput'
            required
            value={newItems}
            onChange={(e) => setNewItems(e.target.value)}
          
             />
             <button type='submit'
             aria-label='add item'
             >
                <FaPlus
                className='plus'
                />
             </button>
             
        
    </form>
  )
}

export default AddInput