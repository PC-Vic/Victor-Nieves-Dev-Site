import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import './index.css'

const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
  </Router>
);

}

export default App;