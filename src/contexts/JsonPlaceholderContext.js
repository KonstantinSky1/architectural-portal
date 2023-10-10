import React, { useState, useEffect } from 'react'

import { getTestData } from '../utils/api'

const JsonPlaceholderContext = React.createContext()

const JsonPlaceholderContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getTestData()
      .then(res => {
        if(res) {
          setPosts(res)
        }
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <JsonPlaceholderContext.Provider value={{ posts }}>
      {children}
    </JsonPlaceholderContext.Provider>
    )
}

export { JsonPlaceholderContext, JsonPlaceholderContextProvider }