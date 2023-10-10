import React from 'react'
import { Link } from 'react-router-dom'

import './MainpageLink.css'

const MainpageLink = ({ picture, path, text, gridArea }) => {
  return (
    <Link
      to={path}
      className='mainpage-link button'
      style={{"grid-area": gridArea}}
    >
      <img
        src={picture}
        alt={text}
      />
      <span>{text}</span>
    </Link>
  )
}

export { MainpageLink }