import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'

import { routes } from '../../utils/routes'

const App = () => {
  const router = createBrowserRouter(routes)

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export { App }