import React from 'react'
import './App.css'
import Main from './components/Main'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/drinks' element={<Main />} />
      </Routes>
    </>
  )
}

export default App