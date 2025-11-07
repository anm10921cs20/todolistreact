import React from 'react'

const Header = ({ title ="To Do List" }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: "To Do List"
}
export default Header