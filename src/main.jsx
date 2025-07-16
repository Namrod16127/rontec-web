import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createHashRouter, RouterProvider} from "react-router-dom"
import Home from './Pages/Home.jsx'
import Contacts from './Pages/Contacts.jsx'
import Services from './Pages/Services.jsx'
import About from './Pages/About.jsx'
import Notfound from './Pages/Notfound.jsx'

const router = createHashRouter([
  {path: '/', element: <Home />,},
  {path: '/contacts', element: <Contacts />,},
  {path: '/about', element: <About />,},
  {path: '/services', element: <Services />,},
  {path: '*', element: <Notfound />},
  
],)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    

    <RouterProvider router={router}/>
     
   
  </StrictMode>,
)
