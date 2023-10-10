import React, { useState } from 'react'

import { ReactComponent as ArrowDown } from '../../images/arrow-dropdown-icon.svg'

import './HeaderLangSelect.css'

const Option = (props) => {
  const {
    option:
      {
        value,
        title
      },
    onClick,
  } = props

  const handleClick = (clickedValue) => () => onClick(clickedValue)

  return (
    <li
      className='option-lang'
      value={value}
      onClick={handleClick(value)}
    >
      {title}
    </li>
  )
}

const HeaderLangSelect = (props) => {
  const {
    onChange,
    selected,
    options
  } = props

  const [isOpen, setIsOpen] = useState(false)

  const handleOptionClick = (value) => {
    setIsOpen(false)
    onChange(value)
  }

  const handleSelectLangClick = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className='select-wrapper'>
      <div className='arrow-lang-dropdown'>
        <ArrowDown />
      </div>
      <div
        className='select-lang'
        onClick={handleSelectLangClick}
      >
        {selected.title}
      </div>
      {isOpen && (
        <ul className='select-lang-menu'>
          {options.map((option) => (
            <Option
              key={option.value}
              option={option}
              onClick={handleOptionClick}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export { HeaderLangSelect }