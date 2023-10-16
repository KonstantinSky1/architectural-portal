import React from 'react'

import './TabsExpertise.css'

import plusIcon from '../../images/plus-icon.svg'

const TabsExpertise = ({ content }) => {
  return (
    <div>
      <div className='block-tabs'>
        <ul className='block-tabs__list'>
          <li className='tabs active-tabs'>
            <div className='block-tabs__number block-tabs__number_bg-color-1'>10</div>
            <p className='block-tabs__text'>В работе</p>
          </li>
          <li className='tabs'>
            <div className='block-tabs__number block-tabs__number_bg-color-2'>2</div>
            <p className='block-tabs__text'>На согласовании</p>
          </li>
          <li className='tabs'>
            <div className='block-tabs__number block-tabs__number_bg-color-3'>2</div>
            <p className='block-tabs__text'>На подписи</p>
          </li>
          <li className='tabs'>
            <div className='block-tabs__number block-tabs__number_bg-color-4'>1</div>
            <p className='block-tabs__text'>Исходящие</p>
          </li>
          <li className='tabs'>
            <div className='block-tabs__number block-tabs__number_bg-color-5'>1</div>
            <p className='block-tabs__text'>Архив</p>
          </li>
        </ul>
        <button
          type='button'
          className='block-tabs__add button'
        >
          <img
            src={plusIcon}
            alt='Создать'
          />
          <span>Создать</span>
        </button>
      </div>
      <div className='content-tabs'>
        {content}
      </div>
    </div>
  )
}

export { TabsExpertise }