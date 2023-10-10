import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import './PageWrapper.css'

const PageWrapper = () => {
  const location = useLocation()

  return (
    <main className='main'>
      {/* На месте Outlet всегда будут показываться дочерние компоненты указанные в массивае children из массива routes */}
      <Outlet />
    </main>
  )
}

export { PageWrapper }