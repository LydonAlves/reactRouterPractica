import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import Contact from './components/pages/Contact/Contact'
import NotFound from './components/pages/NotFound/NotFound'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about/:heading' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
