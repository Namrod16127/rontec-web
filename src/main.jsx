import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Pages/Home.jsx'
import Contacts from './Pages/Contacts.jsx'
import Services from './Pages/Services.jsx'
import About from './Pages/About.jsx'
import Notfound from './Pages/Notfound.jsx'

const router = createBrowserRouter([
  {path: '/', element: <Home />,errorElement: <Notfound />,},
  {path: '/contacts', element: <Contacts />, errorElement: <Notfound />,},
  {path: '/about', element: <About />, errorElement: <Notfound />,},
  {path: '/services', element: <Services />, errorElement: <Notfound />,},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    

    <RouterProvider router={router}/>
     
   
  </StrictMode>,
)
