import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import './LogginedHeaderNavigation.css'

import arrowDondLineIcon from '../../images/arrow-line-down-icon.svg'
import magnifierIcon from '../../images/magnifier-icon.svg'
import bellIcon from '../../images/bell-icon.svg'
import userPicIcon from '../../images/user-pic-icon.svg'
import logOutIcon from '../../images/logout-icon.svg'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

const LogginedHeaderNavigation = () => {
  const { handleSignOut } = useContext(CurrentUserContext)

  return (
    <div className='logginedHeaderNavigation'>
      <div className='logginedHeaderNavigation__links'>
        <Link to='/'><span className='logginedHeaderNavigation__link'>Мои запросы</span></Link>
        <Link to='/'><span className='logginedHeaderNavigation__link'>Помощь</span></Link>
        <Link to='/'>
          <img
            src={arrowDondLineIcon}
            alt='Скачать'
          />
          <span className='logginedHeaderNavigation__download-template'>Скачать Шаблон тех.задания</span>
        </Link>
      </div>
      <div className='logginedHeaderNavigation__icons'>
        <img
          src={magnifierIcon}
          alt='Скачать'
        />
        <img
          src={bellIcon}
          alt='Скачать'
        />
        <img
          src={userPicIcon}
          alt='Скачать'
        />
      </div>
      <div className='logginedHeaderNavigation__name'>
        <span>Имя Фамилия Отчество</span>
        <ul className='logginedHeaderNavigation-name-submenu-list menu-is-active'>
          <li
          onClick={handleSignOut}
            className='logginedHeaderNavigation-name-submenu-logout'
          >
            <img
              src={logOutIcon}
              alt='Выйти'
            />
            <span>Выход</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export { LogginedHeaderNavigation }