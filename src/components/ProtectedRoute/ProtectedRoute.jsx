import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import { CurrentUserContext } from '../../contexts/CurrentUserContext'

const ProtectedRoute = ({ children }) => {
  const { isUserLoggined } = useContext(CurrentUserContext)

  if (!isUserLoggined()) {
    return <Navigate to='/' />
  }

  return children

}

export { ProtectedRoute }