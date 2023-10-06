import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Main from './components/Main'
import About from './components/About'
import Navbar from './components/Navbar'
import { Component } from 'react'

function App() {
  const [count, setCount] = useState(0)
  let Component = null

switch(window.location.pathname) {

  case '/':
    Component = Home
    break;

  case '/drinks':
    Component = Main
    break;

  case '/about':
    Component = About
    break;
}
  return (
    <>
    <Navbar />
  <Component />
    
    </>
  )
}

export default App;
