import "./index.css";
import Navbar from "./components/Layouts/Navbar.jsx";
import HamburgerMenu from "./components/Layouts/HamburgerMenu.jsx";
import { Outlet, Routes as RouteContainer, Route } from "react-router-dom";

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
