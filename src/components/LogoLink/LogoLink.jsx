import React from 'react'
import { Link } from 'react-router-dom'

const LogoLink = ({ logo }) => {
  return (
    <Link to='/'>
      <img
        src={logo}
        alt='Логотип'
      />
    </Link>
  )
}

export { LogoLink }