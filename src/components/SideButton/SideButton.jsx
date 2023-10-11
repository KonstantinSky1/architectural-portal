import React from 'react'

import './SideButton.css'

import arrowUpIcon from '../../images/arrow-up-icon.svg'

const SideButton = () => {
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className='side-button-block'>
      <div
        onClick={handleScrollUp}
        className='side-button-up'
      >
        <img
          src={arrowUpIcon}
          alt='Стрелка вверх'
        />
      </div>
      <button
        type='button'
        className='side-button'
      >
        <span>Задать вопрос</span>
      </button>
    </div>
  )
}

export { SideButton }