import "./index.css";
import Navbar from "./components/Layouts/Navbar.jsx";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
