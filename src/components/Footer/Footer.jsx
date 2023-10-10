import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

import { LogoLink } from '../index'
import footerLogo from '../../images/logo-black.svg'
import arrowDondLineGreyIcon from '../../images/arrow-line-down-grey.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__content'>
          <div className='footer__logo'>
            <LogoLink
              logo={footerLogo}
            />
          </div>
          <div className='footer__links'>
            <Link to='/'><span className='footer__link'>Учет сведений</span></Link>
            <Link to='/'><span className='footer__link'>Бюджет</span></Link>
            <Link to='/'><span className='footer__link'>Экспертиза</span></Link>
            <Link to='/'><span className='footer__link'>Публичные обсуждения</span></Link>
            <Link to='/'><span className='footer__link'>Архитектура ЭП</span></Link>
            <Link to='/'><span className='footer__link'>Калькулятор</span></Link>
            <Link to='/'>
              <img
                src={arrowDondLineGreyIcon}
                alt='Скачать'
              />
              <span className='footer__links-download'>Скачать Шаблон тех.задания</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }