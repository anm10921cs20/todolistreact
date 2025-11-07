import React from 'react'

const Footer = ({length}) => {
  const valueLength = length.length;

  return (
  <footer>{valueLength} List {valueLength === 1 ? "item" : "items"} </footer>
  )
}

export default Footer