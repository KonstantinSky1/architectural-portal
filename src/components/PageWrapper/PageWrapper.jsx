import React from 'react'
import { Outlet } from 'react-router-dom'

import './PageWrapper.css'

const PageWrapper = () => {
  return (
    <main className='main'>
      {/* На месте Outlet всегда будут показываться дочерние компоненты указанные в массивае children из массива routes */}
      <Outlet />
    </main>
  )
}

export { PageWrapper }