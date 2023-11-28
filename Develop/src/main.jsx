import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './components/Layouts/layouts.css'
import './components/pages/home.css'
import './components/pages/about.css'
import './components/pages/projects.css'
import './components/pages/contact.css'
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Projects from './components/pages/Projects.jsx'
import Contact from './components/pages/Contact.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='*' element={<App />}>
      <Route index element={<Home />} />  
      <Route path='about' element={<About />} />
      <Route path='projects' element={<Projects />} />
      <Route path='contact' element={<Contact />}/>
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
