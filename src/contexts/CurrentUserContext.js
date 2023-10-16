import React, { useState, useEffect } from 'react'

export const loggedInMap = {
  loggedIn: "loggedIn",
  loggedOut: "loggedOut",
  loading: "loading"
}

export const CurrentUserContext = React.createContext()

export const CurrentUserContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(loggedInMap.loading)

  useEffect(() => {
    const isLoggined = localStorage.getItem('isLoggined')

    if (isLoggined === loggedInMap.loggedIn) {
      userLoggined()
    } else {
      userLogOut()
    }
  }, [])

  const isLoading = () => loggedIn === loggedInMap.loading

  const userLoggined = () => setLoggedIn(loggedInMap.loggedIn)

  const userLogOut = () => setLoggedIn(loggedInMap.loggedOut)

  const isUserLoggined = () => loggedIn === loggedInMap.loggedIn

  const handleLoggined = () => {
    localStorage.setItem('isLoggined', 'loggedIn')

    userLoggined()
  }

  const handleSignOut = () => {
    localStorage.clear()

    userLogOut()
  }

  return (
    <CurrentUserContext.Provider value={{ isLoading, userLoggined, isUserLoggined, handleSignOut, handleLoggined }}>
      {children}
    </CurrentUserContext.Provider>
    )
}