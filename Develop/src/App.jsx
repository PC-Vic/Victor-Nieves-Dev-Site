import { useState } from 'react'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import './index.css'

const App = () => {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
    </div>
  )

}

export default App;