import React, { useContext } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'

import { routes } from '../../utils/routes'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

const App = () => {
  const router = createBrowserRouter(routes)

  const { isLoading } = useContext(CurrentUserContext)

  return isLoading() ? 'загрузка' : (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export { App }