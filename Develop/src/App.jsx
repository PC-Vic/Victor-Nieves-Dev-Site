import "./index.css";
import Navbar from "./components/Layouts/Navbar.jsx";
import HamburgerMenu from "./components/Layouts/HamburgerMenu.jsx";
import { Outlet, Routes as RouteContainer, Route } from "react-router-dom";
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Projects from './components/pages/Projects.jsx'
import Contact from './components/pages/Contact.jsx'

const App = () => {
  return (
    <div style={{display: 'flex', alignItems:'center'}}>
      <Navbar />
      <HamburgerMenu /> 
      <Outlet />
    </div>
  );
};

export default App;
