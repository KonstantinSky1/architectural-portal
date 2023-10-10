import React from 'react'
import { Link } from 'react-router-dom'

import './LogginedHeaderNavigation.css'

import arrowDondLineIcon from '../../images/arrow-line-down-icon.svg'
import magnifierIcon from '../../images/magnifier-icon.svg'
import bellIcon from '../../images/bell-icon.svg'
import userPicIcon from '../../images/user-pic-icon.svg'

const LogginedHeaderNavigation = () => {
  return (
    <div className='logginedHeaderNavigation'>
      <div className='logginedHeaderNavigation__links'>
        <Link to='/'>Мои запросы</Link>
        <Link to='/'>Помощь</Link>
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
        Имя Фамилия Отчество
      </div>
    </div>
  )
}

export { LogginedHeaderNavigation }