import React from 'react'

import './SideButton.css'

import arrowUpIcon from '../../images/arrow-up-icon.svg'

const SideButton = () => {
  return (
    <div className='side-button-block'>
      <div className='side-button-up'>
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