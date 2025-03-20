import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Message from './Pages/MessageList';
import Navbar from './components/Navbar';
import NotFound from './Pages/NotFound';
import MessageDetails from './Pages/MessageDetails';
const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/message" element={<Message />} />
          <Route path="/message/:messageId" element={<MessageDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
