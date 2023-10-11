import React, { useState } from 'react'

import './Header.css'

import { LogoLink, NotLogginedHeaderNavigation, HeaderLangSelect } from '../index'
// import { LogginedHeaderNavigation } from '../index'

import headerLogo from '../../images/header-logo.svg'

const optionsLang = [
  { title: "KZ", value: "KZ" },
  { title: "RU", value: "RU" },
  { title: "ENG", value: "ENG" }
]

const Header = () => {
  const [lang, setLangValue] = useState('KZ')

  const selectedLang = optionsLang.find((item) => item.value === lang)

  const handleLangSelect = (value) => {
    setLangValue(value)
  }

  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__content'>
          <div className='header__logo'>
            <LogoLink
              logo={headerLogo}
            />
          </div>
          {/* В зависимости от того залогинен ли пользователь: <LogginedHeaderNavigation /> или <NotLogginedHeaderNavigation /*/}
          {/* <div className='header__navigation-login'>
            <LogginedHeaderNavigation />
          </div> */}
          <div className='header__navigation-not-login'>
            <NotLogginedHeaderNavigation />
          </div>
          <div className="select-lang-wrapper">
            <HeaderLangSelect
              options={optionsLang}
              selected={selectedLang}
              onChange={handleLangSelect}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export { Header }