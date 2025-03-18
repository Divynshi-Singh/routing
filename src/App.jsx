import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Message from './components/Message';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
