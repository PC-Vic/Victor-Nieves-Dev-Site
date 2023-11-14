import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider, BrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import './components/Layouts/layouts.css'
import './components/pages/home.css'
import './components/pages/pages.css'
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Projects from './components/pages/Projects.jsx'
import Contact from './components/pages/Contact.jsx'



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "projects",
//         element: <Projects />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
      
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='*' element={<App />}>
      <Route index element={<Home />} />  
      <Route path='about' element={<About />} />
      <Route path='projects' element={<Projects />} />
      <Route path='contacts' element={<Contact/>}/>
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   </BrowserRouter>
// )
