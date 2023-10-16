import React from 'react'

import './ExpertiseNtd.css'

import { SideButton, BreadCrumbs, TabsExpertise } from '../index'

const TabContentInWork = () => {
  return(
    <div>
      Содержимое Таба "В работе"
    </div>
  )
}

const ExpertiseNtd = () => {
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
              <div className='expertisentd__inner-container'>
                <div className='expertisentd__tabs-block'>
                  <TabsExpertise
                    content={<TabContentInWork />}
                  />
                </div>

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