import React from 'react'

function Header() {
  return (
    <header>
      <h1>My Restaurant</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/drinks">Drinks</a></li>
          <li><a href="/food">Food</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header