import React from 'react'
import { Link } from 'react-router-dom'

import './NotLogginedHeaderNavigation.css'

import userAuthIcon from '../../images/user-auth-icon.svg'

const NotLogginedHeaderNavigation = () => {
  return (
    <div className='notLogginedHeaderNavigation'>
      <Link
        className="notLogginedHeaderNavigation-login-link button"
        to="signin"
      >
        <img
          src={userAuthIcon}
          alt='Авторизация'
        />
        <span>Авторизация</span>
      </Link>
      <Link
        className="notLogginedHeaderNavigation-register-link button"
        to="signup"
      >
        Регистрация
      </Link>
    </div>
  )
}

export { NotLogginedHeaderNavigation }