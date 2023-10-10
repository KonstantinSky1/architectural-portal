import React, { useState } from 'react'

import './Header.css'

import { LogoLink, LogginedHeaderNavigation, NotLogginedHeaderNavigation, HeaderLangSelect } from '../index'

const optionsLang = [
  { title: "KZ", value: "KZ" },
  { title: "RU", value: "RU" },
  { title: "ENG", value: "ENG" }
]

const Header = () => {
  const [lang, setLangValue] = useState('KZ')

  const selectedLang = optionsLang.find((item) => item.value == lang)

  const handleLangSelect = (value) => {
    setLangValue(value)
  }

  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__content'>
          <div className='header__logo'>
            <LogoLink />
          </div>
          <div className='header__navigation'>
            {/* В зависимости от того залогинен ли пользователь сделать примерно так: { isUserLoggined() ? <LogginedNavigation /> : <NotLogginedNavigation /> } */}
            {/* <NotLogginedHeaderNavigation /> */}
            <LogginedHeaderNavigation />
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