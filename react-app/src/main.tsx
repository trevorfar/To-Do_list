import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import Home from './Routes/Home'
import Page1 from './Routes/p1'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/p1",
    element: <Page1 />,
  },

]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
