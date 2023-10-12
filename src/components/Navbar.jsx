import React from 'react'

function CustomLink({ herf, children }) {
  return (
    <li>
      <a href={herf}>{children}</a>
    </li>
  )
}

function Navbar() {
  return (
    <nav>
      <ul>
        <CustomLink herf="/">Home</CustomLink>
        <CustomLink herf="/drinks">Drinks</CustomLink>
        <CustomLink herf="/about">About</CustomLink>
      </ul>
    </nav>
  )
}

export default Navbar