import React, { useState } from 'react'

import './ExpertiseNtd.css'

import { SideButton, BreadCrumbs, TabsExpertise } from '../index'
import { TabContentInWork } from '../TabContentInWork/TabContentInWork'

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

const ExpertiseNtd = () => {
  const [toggleState, setToggleState] = useState('inWork')

  const toggleTab = (tabNumber) => {
    setToggleState(tabNumber)
  }

  return (
    <>
      <section className='expertisentd'>
        <div className='expertisentd__bg-color'>
          <div className='expertisentd__container'>
            <div className='expertisentd__content'>
              <div className='expertisentd__title-block'>
                <BreadCrumbs
                  style={{marginBottom: '15px'}}
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