import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Process from './pages/Process';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage'
import Services from './pages/Services';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path="process" element={<Process />} />
          <Route path="services" element={<Services />} /> 
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
