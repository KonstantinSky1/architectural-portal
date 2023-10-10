import React from 'react'
import { Link } from 'react-router-dom'

import './NotLogginedHeaderNavigation.css'

import userAuthIcon from '../../images/user-auth-icon.svg'
import userRegisterIcon from '../../images/user-register-icon.svg'

const NotLogginedHeaderNavigation = () => {
  return (
    <div className='notLogginedHeaderNavigation'>
      <Link
        className="notLogginedHeaderNavigation-login notLogginedHeaderNavigation-btn button"
        to="signin"
      >
        <img
          src={userAuthIcon}
          alt='Авторизация'
        />
        <span>Авторизация</span>
      </Link>
      <Link
        className="notLogginedHeaderNavigation-register notLogginedHeaderNavigation-btn button"
        to="signup"
      >
        <img
          src={userRegisterIcon}
          alt='Регистрация'
        />
        <span>Регистрация</span>
      </Link>
    </div>
  )
}

export { NotLogginedHeaderNavigation }