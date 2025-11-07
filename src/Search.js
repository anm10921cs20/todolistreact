import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <form className='serachForm' onSubmit={(e) => e.preventDefault()}>
        <input 
            type="text"
            placeholder='Search Activity'
            id='SearchInput' 
            className='serachInput'
            role='searchbox'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default Search