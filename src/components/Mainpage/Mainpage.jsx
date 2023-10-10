import React from 'react'
import { Link } from 'react-router-dom'

import './Mainpage.css'

import arrowRightIcon from '../../images/arrow-right.svg'
import globeIcon from '../../images/globe-icon.svg'
import treeStructureIcon from '../../images/tree-structure-icon.svg'
import calculatorIcon from '../../images/calculator-icon.svg'
import starIcon from '../../images/star-icon.svg'
import catalogIcon from '../../images/catalog-icon.svg'

import { MainpageLink } from '../index'

const Mainpage = () => {
  return (
    <>
      <section className='begin-work'>
        <div className='begin-work__content'>
          <h1 className='begin-work__title'>Архитектурный портал Электронного Правительства</h1>
          <Link
            to='/'
            className='begin-work__start-btn button'
          >
            <span>Начать работу</span>
            <img
              src={arrowRightIcon}
              alt='Начать работу'
            />
          </Link>
          <div className='begin-work__links'>
            <MainpageLink
              picture={globeIcon}
              path='/'
              text='ЦПЦП'
              gridArea='globe'
            />
            <MainpageLink
              picture={starIcon}
              path='/'
              text='Оценка ГО'
              gridArea='star'
            />
            <MainpageLink
              picture={treeStructureIcon}
              path='/'
              text='Архитектура ЭП'
              gridArea='tree'
            />
            <MainpageLink
              picture={calculatorIcon}
              path='/'
              text='Калькулятор'
              gridArea='calculator'
            />
            <MainpageLink
              picture={catalogIcon}
              path='/'
              text='Дата каталог'
              gridArea='catalog'
            />
          </div>
        </div>
      </section>
      <section className='inf-system'>
        <div className='inf-system__container'>
          <div className='inf-system__content'>
            <div className='inf-system__title-block'>
              <h2 className='inf-system__title title'>Информационные системы</h2>
              <div className='inf-system__line'></div>
            </div>
            <div className='inf-system__content-block'>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export { Mainpage }