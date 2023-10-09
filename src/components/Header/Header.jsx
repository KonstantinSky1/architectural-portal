import React from 'react'

import './Header.css'

import { LogoLink, LogginedHeaderNavigation, NotLogginedHeaderNavigation } from '../index'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__content'>
          <div className='header__logo'>
            <LogoLink />
          </div>
          <div className='header__navigation'>
            {/* В зависимости от того залогинен ли пользователь сделать примерно так: { isUserLoggined() ? <LogginedNavigation /> : <NotLogginedNavigation /> } */}
            <NotLogginedHeaderNavigation />
          </div>
          <div>
            kz
          </div>
        </div>
      </div>
    </header>
  )
}

export { Header }