import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import './Mainpage.css'

import arrowRightIcon from '../../images/arrow-right.svg'
import globeIcon from '../../images/globe-icon.svg'
import treeStructureIcon from '../../images/tree-structure-icon.svg'
import calculatorIcon from '../../images/calculator-icon.svg'
import starIcon from '../../images/star-icon.svg'
import catalogIcon from '../../images/catalog-icon.svg'
import notebookPic from '../../images/notebook-image.svg'
import arrowDownLineWhiteIcon from '../../images/arrow-line-down-white.svg'
import diagramPic from '../../images/diagram.svg'
import bookIcon from '../../images/book-icon.svg'
import checkIcon from '../../images/check-icon.svg'
import moneyIcon from '../../images/money-icon.svg'

import { MainpageLink, Post, CardTechnology, SideButton, AnimatedArrow } from '../index'

import { JsonPlaceholderContext } from '../../contexts/JsonPlaceholderContext'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

import { mockTechnology } from '../../utils/mockTechnology'

const Mainpage = () => {
  const { posts } = useContext(JsonPlaceholderContext)
  const { handleLoggined, isUserLoggined } = useContext(CurrentUserContext)

  return (
    <>
      <section className='begin-work'>
        <div className='begin-work__content'>
          <h1 className='begin-work__title'>Архитектурный портал Электронного Правительства</h1>
          {
            isUserLoggined()
              ? (
                  <div className='begin-work__links begin-work__links_loggined'>
                    <MainpageLink
                      picture={bookIcon}
                      path='/'
                      text='Учет сведений'
                      gridArea='accounting'
                    />
                    <div className='begin-work__links_arrow-loggined'>
                      <AnimatedArrow />
                      <MainpageLink
                        picture={checkIcon}
                        path='expertise'
                        text='Экспертиза'
                        gridArea='expertise'
                      />
                    </div>
                    <MainpageLink
                      picture={moneyIcon}
                      path='/'
                      text='Бюджет'
                      gridArea='money'
                    />
                    <MainpageLink
                      picture={globeIcon}
                      path='/'
                      text='ЦПЦП'
                      gridArea='globe'
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
                    <MainpageLink
                      picture={starIcon}
                      path='/'
                      text='Оценка ГО'
                      gridArea='star'
                    />
                  </div>
                )
              : (
                <>
                  <div className='begin-work__start-link-block'>
                    <AnimatedArrow />
                    <Link
                      onClick={handleLoggined}
                      to='/'
                      className='begin-work__start-btn button'
                    >
                      <span>Начать работу</span>
                      <img
                        src={arrowRightIcon}
                        alt='Начать работу'
                      />
                    </Link>
                  </div>
                  <div className='begin-work__links begin-work__links_not-loggined'>
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
                </>
                )
          }
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
              <ul className='inf-system__list'>
                {
                  posts.slice(0, 10).map((post) => (
                    <Post
                      key={post.id}
                      post={post}
                    />
                  ))
                }
              </ul>
              <div className='inf-system__image-block'>
                <img
                  className='inf-system__image'
                  src={notebookPic}
                  alt='Ноутбук'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='often-used-tech'>
        <div className='often-used-tech__container'>
          <div className='often-used-tech__content'>
            <div className='often-used-tech__title-block'>
              <h2 className='often-used-tech__title title'>Часто используемые технологии</h2>
              <div className='often-used-tech__line'></div>
            </div>
            <div className='often-used-tech__content-block'>
              <div className='often-used-tech__content-block-diagram'>
                <ul className='card-technology-list'>
                  {
                    mockTechnology.slice(0, Math.floor(mockTechnology.length / 2)).map((card) => (
                      <CardTechnology
                        key={card.id}
                        title={card.title}
                        image={card.image}
                        numberBgColor={card.numberBgColor}
                        number={card.number}
                        style={{style: 'row'}}
                      />
                    ))
                  }
                </ul>
                <div>
                  <img
                    src={diagramPic}
                    alt='Диаграмма'
                    className='card-technology-list__diagram'
                  />
                </div>
                <ul className='card-technology-list'>
                  {
                    mockTechnology.slice(Math.floor(mockTechnology.length / 2), mockTechnology.length).map((card) => (
                      <CardTechnology
                        key={card.id}
                        title={card.title}
                        image={card.image}
                        numberBgColor={card.numberBgColor}
                        number={card.number}
                        style={{style: 'row-reverse'}}
                      />
                    ))
                  }
                </ul>
              </div>
                <button
                type='button'
                className='often-used-tech__download-btn button'
              >
                <img
                  src={arrowDownLineWhiteIcon}
                  alt='Скачать'
                />
                <span>Cкачать</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <SideButton />
    </>
  )
}

export { Mainpage }