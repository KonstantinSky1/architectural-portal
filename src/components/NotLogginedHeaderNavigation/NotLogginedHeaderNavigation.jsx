import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import './NotLogginedHeaderNavigation.css'

import userAuthIcon from '../../images/user-auth-icon.svg'
import userRegisterIcon from '../../images/user-register-icon.svg'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

const NotLogginedHeaderNavigation = () => {
  const { handleLoggined } = useContext(CurrentUserContext)

  return (
    <div className='notLogginedHeaderNavigation'>
      <Link
        onClick={handleLoggined}
        className="notLogginedHeaderNavigation-login notLogginedHeaderNavigation-btn button"
        to="/"
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