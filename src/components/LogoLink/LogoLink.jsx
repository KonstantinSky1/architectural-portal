import React from 'react'
import { Link } from 'react-router-dom'

import './LogoLink.css'
import headerLogo from '../../images/header-logo.svg'

const LogoLink = () => {
  return (
    <Link to='/'>
      <img
        src={headerLogo}
        alt='Логотип'
      />
    </Link>
  )
}

export { LogoLink }