import React from 'react'

const Search = () => {
  return (
    <form className='serachForm'>
        <input 
            type="text"
            placeholder='Serach Activity'
            id='SearchInput' 
            className='serachInput'
        />
    </form>
  )
}

export default Search