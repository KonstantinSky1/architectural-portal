import React, { useState, useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import './ExpertiseNtd.css'

import { SideButton, BreadCrumbs, TabsExpertise } from '../index'
import { TabContentInWork } from '../TabContentInWork/TabContentInWork'
import { pagesFields } from '../../utils/pageFields'

const TabContentToBeAgreed = () => <div>Содержимое Таба "На согласовании"</div>
const TabContentOnSignature = () => <div>Содержимое Таба "На подписи"</div>
const TabContentOutgoing = () => <div>Содержимое Таба "Исходящие"</div>
const TabContentArchive = () => <div>Содержимое Таба "Архив"</div>

const tabContent = {
  INWORK: 'inWork',
  TOBEAGREED: 'toBeAgreed',
  ONSIGNATURE: 'onSignature',
  OUTGOING: 'outgoing',
  ARCHIVE: 'archive',
}

const tabContentFields = {
  [tabContent.INWORK]: <TabContentInWork />,
  [tabContent.TOBEAGREED]: <TabContentToBeAgreed />,
  [tabContent.ONSIGNATURE]: <TabContentOnSignature />,
  [tabContent.OUTGOING]: <TabContentOutgoing />,
  [tabContent.ARCHIVE]: <TabContentArchive />,
}

const tabContentFieldsTitle = {
  [tabContent.INWORK]: 'В работе',
  [tabContent.TOBEAGREED]: 'На согласовании',
  [tabContent.ONSIGNATURE]: 'На подписи',
  [tabContent.OUTGOING]: 'Исходящие',
  [tabContent.ARCHIVE]: 'Архив',
}

const ExpertiseNtd = () => {
  const [toggleState, setToggleState] = useState('inWork')
  const [pagesLocation, setPagesLocation] = useState([])

  const toggleTab = (tabNumber) => {
    setToggleState(tabNumber)
  }

  const location = useLocation()

  useEffect(() => {
    setPagesLocation([...pagesFields[location.pathname], tabContentFieldsTitle[toggleState]])
  }, [toggleState, location.pathname])

  return (
    <>
      <section className='expertisentd'>
        <div className='expertisentd__bg-color'>
          <div className='expertisentd__container'>
            <div className='expertisentd__content'>
              <div className='expertisentd__title-block'>
                <BreadCrumbs
                  style={{marginBottom: '15px'}}
                  pages={pagesLocation}
                />
                <h1 className='expertisentd__title title'>Экспертиза НТД</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='expertisentd__container'>
          <div className='expertisentd__content'>
            <div className='expertisentd__inner-container'>
              <div className='expertisentd__tabs-block'>
                <TabsExpertise
                  content={tabContentFields[toggleState]}
                  toggleState={toggleState}
                  toggleTab={toggleTab}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <SideButton />
    </>
  )
}

export { ExpertiseNtd }